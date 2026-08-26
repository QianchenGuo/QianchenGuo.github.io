import fs from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';
import matter from 'gray-matter';
import TurndownService from 'turndown';
import gfmPlugin from 'turndown-plugin-gfm';

const rawArgument = process.argv[2];
const downloadAssets = process.argv.includes('--download-images');

if (!rawArgument) {
  console.error('Usage: npm run import:zhihu -- <raw-directory> [--download-images]');
  process.exit(1);
}

const projectRoot = process.cwd();
const rawDirectory = path.resolve(rawArgument);
const postDirectory = path.join(projectRoot, 'content', 'blog', 'zh');
const publicAssetRoot = path.join(projectRoot, 'public', 'blog-assets', 'zhihu');
const inventoryPath = path.join(projectRoot, 'content', 'zhihu-inventory.json');

const decodeAttribute = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>');

function collectImageUrls(html) {
  const matches = [...html.matchAll(/\b(?:src|data-original|data-actualsrc)="([^"]+)"/g)];
  return [...new Set(matches
    .map((match) => decodeAttribute(match[1]))
    .filter((url) => /^https:\/\/pic\d*\.zhimg\.com\//.test(url)))];
}

function extensionFor(contentType, sourceUrl) {
  if (contentType?.includes('png')) return '.png';
  if (contentType?.includes('webp')) return '.webp';
  if (contentType?.includes('gif')) return '.gif';
  if (contentType?.includes('svg')) return '.svg';
  const fromPath = new URL(sourceUrl).pathname.match(/\.(png|webp|gif|jpe?g)$/i)?.[0];
  return fromPath?.toLowerCase() ?? '.jpg';
}

async function localizeImages(article) {
  const imageMap = new Map();
  if (!downloadAssets) return imageMap;

  const urls = collectImageUrls(article.html);
  const articleAssetDirectory = path.join(publicAssetRoot, article.id);
  await fs.mkdir(articleAssetDirectory, { recursive: true });

  const download = async (index) => {
    const url = urls[index];
    try {
      const response = await fetch(url, {
        headers: {
          Referer: article.url,
          'User-Agent': 'Mozilla/5.0 (compatible; QianchenGuoArchive/1.0)',
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const extension = extensionFor(response.headers.get('content-type'), url);
      const filename = `image-${String(index + 1).padStart(2, '0')}${extension}`;
      await fs.writeFile(path.join(articleAssetDirectory, filename), Buffer.from(await response.arrayBuffer()));
      imageMap.set(url, `/blog-assets/zhihu/${article.id}/${filename}`);
    } catch (error) {
      console.warn(`Image kept remote for ${article.id}: ${url} (${error.message})`);
    }
  };

  const workerCount = Math.min(6, urls.length);
  await Promise.all(Array.from({ length: workerCount }, (_, worker) => (async () => {
    for (let index = worker; index < urls.length; index += workerCount) {
      await download(index);
    }
  })()));
  return imageMap;
}

function createTurndown(imageMap) {
  const service = new TurndownService({
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
    headingStyle: 'atx',
    strongDelimiter: '**',
  });
  const { gfm } = gfmPlugin;
  service.use(gfm);

  service.remove(['script', 'style', 'svg', 'button']);

  service.addRule('zhihu-entity-word', {
    filter: (node) => node.nodeName === 'A' && node.classList?.contains('RichContent-EntityWord'),
    replacement: (content) => content,
  });

  service.addRule('zhihu-math', {
    filter: (node) => node.nodeName === 'SPAN' && node.classList?.contains('ztext-math') && node.getAttribute('data-tex'),
    replacement: (_content, node) => {
      const tex = node.getAttribute('data-tex').trim();
      const parent = node.parentElement;
      const display = tex.length > 100
        || /\\begin\{(?:aligned|array|cases|matrix|bmatrix|pmatrix)\}/.test(tex)
        || (parent?.nodeName === 'P' && parent.children.length === 1);
      return display ? `\n\n$$\n${tex}\n$$\n\n` : `$${tex}$`;
    },
  });

  service.addRule('localized-image', {
    filter: 'img',
    replacement: (_content, node) => {
      const preferred = node.getAttribute('data-original')
        || node.getAttribute('data-actualsrc')
        || node.getAttribute('src')
        || '';
      const source = imageMap.get(preferred) || imageMap.get(node.getAttribute('src')) || preferred;
      if (!source) return '';
      const alt = (node.getAttribute('alt') || '').replaceAll('[', '\\[').replaceAll(']', '\\]');
      return `![${alt}](${source})`;
    },
  });

  service.addRule('normalized-link', {
    filter: 'a',
    replacement: (content, node) => {
      let href = node.getAttribute('href') || '';
      if (!href) return content;
      try {
        const parsed = new URL(href, 'https://www.zhihu.com');
        if (parsed.hostname === 'link.zhihu.com' && parsed.searchParams.get('target')) {
          href = parsed.searchParams.get('target');
        }
      } catch {
        // Preserve malformed but visible source links.
      }
      return `[${content || href}](${href})`;
    },
  });

  return service;
}

function cleanMarkdown(markdown) {
  return markdown
    .replace(/\n{4,}/g, '\n\n\n')
    .replace(/\n[ \t]+\n/g, '\n\n')
    .trim();
}

function excerptFrom(markdown) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$[^$]*\$/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160);
}

await fs.mkdir(postDirectory, { recursive: true });
const rawFiles = (await fs.readdir(rawDirectory))
  .filter((name) => /^(?:article|answer)-\d+\.json$/.test(name))
  .sort();

const inventoryById = new Map();
if (existsSync(inventoryPath)) {
  try {
    for (const item of JSON.parse(await fs.readFile(inventoryPath, 'utf8'))) {
      inventoryById.set(item.slug, item);
    }
  } catch {
    // A corrupt or partial inventory should not block a fresh import.
  }
}

for (const filename of rawFiles) {
  const article = JSON.parse(await fs.readFile(path.join(rawDirectory, filename), 'utf8'));
  if (!article.id || !article.title || !article.html) {
    console.warn(`Skipped incomplete snapshot: ${filename}`);
    continue;
  }

  const kind = filename.startsWith('answer-') ? 'answer' : 'article';
  const sourceType = kind === 'answer' ? 'zhihu-answer' : 'zhihu-article';
  const imageMap = await localizeImages(article);
  const markdown = cleanMarkdown(createTurndown(imageMap).turndown(article.html));
  const date = (article.publishedAt || article.modifiedAt || '').slice(0, 10);
  const fallbackSource = kind === 'answer'
    ? (article.questionUrl ? `${String(article.questionUrl).replace(/\/?$/, '')}/answer/${article.id}` : '')
    : `https://zhuanlan.zhihu.com/p/${article.id}`;
  const frontmatter = {
    title: article.title,
    date,
    excerpt: excerptFrom(markdown) || '知乎原文归档。',
    tags: kind === 'answer' ? ['知乎归档', '知乎回答'] : ['知乎归档', '知乎文章'],
    source: article.url || article.source || fallbackSource || '',
    sourceType,
    zhihuId: String(article.id),
    translationStatus: 'source-only',
  };
  if (article.modifiedAt) frontmatter.updated = article.modifiedAt;
  if (kind === 'answer' && (article.questionTitle || article.question?.title)) {
    frontmatter.questionTitle = article.questionTitle || article.question.title;
  }
  const slug = kind === 'answer' ? `zhihu-answer-${article.id}` : `zhihu-${article.id}`;
  await fs.writeFile(path.join(postDirectory, `${slug}.md`), matter.stringify(markdown, frontmatter), 'utf8');
  inventoryById.set(slug, { slug, ...frontmatter, imageCount: article.images?.length ?? 0, mathCount: article.mathCount ?? 0 });
}

const inventory = [...inventoryById.values()].sort((a, b) => b.date.localeCompare(a.date));
await fs.writeFile(
  inventoryPath,
  `${JSON.stringify(inventory, null, 2)}\n`,
  'utf8',
);

const articleCount = inventory.filter((item) => item.sourceType === 'zhihu-article').length;
const answerCount = inventory.filter((item) => item.sourceType === 'zhihu-answer').length;
console.log(`Imported ${rawFiles.length} Zhihu snapshot(s); ${articleCount} article(s) and ${answerCount} answer(s) in inventory.`);
