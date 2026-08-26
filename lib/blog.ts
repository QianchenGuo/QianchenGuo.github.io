import type { Lang } from './site-data';
import { generatedPosts } from './generated-posts';
import taxonomy from '../content/zhihu-taxonomy.json';

export type BlogPost = {
  slug: string; lang: Lang; title: string; date: string; excerpt: string;
  tags: string[]; source?: string; sourceType?: string; zhihuId?: string;
  translationStatus?: string; sourceLang?: Lang; content: string;
  column?: string; category?: string;
};

const articleColumnById = new Map<string, string>();
for (const [column, ids] of Object.entries(taxonomy.articleColumns)) {
  for (const id of ids) articleColumnById.set(id, column);
}
const answerCategoryById = new Map<string, string>();
for (const [category, ids] of Object.entries(taxonomy.answerCategories)) {
  for (const id of ids) answerCategoryById.set(id, category);
}

function withTaxonomy(post: BlogPost): BlogPost {
  if (post.zhihuId) {
    if (post.sourceType === 'zhihu-article') post.column = articleColumnById.get(post.zhihuId);
    if (post.sourceType === 'zhihu-answer') post.category = answerCategoryById.get(post.zhihuId);
  }
  return post;
}

export function getAllPosts(lang: Lang): BlogPost[] {
  const allPosts = generatedPosts as unknown as BlogPost[];
  const nativePosts = allPosts
    .filter(post => post.lang === lang)
    .map(post => withTaxonomy({ ...post, tags: [...post.tags] }))
    .sort((a,b) => b.date.localeCompare(a.date)) as BlogPost[];

  if (lang === 'zh') return nativePosts;

  const translatedSlugs = new Set(nativePosts.map(post => post.slug));
  const sourceFallbacks = allPosts
    .filter(post => post.lang === 'zh' && (post.sourceType === 'zhihu-article' || post.sourceType === 'zhihu-answer') && !translatedSlugs.has(post.slug))
    .map(post => withTaxonomy({
      ...post,
      lang: 'en' as const,
      sourceLang: 'zh' as const,
      excerpt: 'Complete Chinese source archive. A terminology-checked English translation is pending.',
      tags: ['Chinese source', ...post.tags],
      translationStatus: 'source-only',
    }));

  return [...nativePosts, ...sourceFallbacks].sort((a,b) => b.date.localeCompare(a.date));
}

export function getPost(lang: Lang, slug: string) {
  return getAllPosts(lang).find(post => post.slug === slug);
}
