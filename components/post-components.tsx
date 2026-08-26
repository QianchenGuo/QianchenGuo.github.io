import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { getAllPosts, type BlogPost } from '@/lib/blog';
import { type Lang } from '@/lib/site-data';
import { blogColumns, columnBySlug } from '@/lib/columns';
import { SiteShell } from './site-shell';

function PostLink({ lang, post, cn }: { lang: Lang; post: BlogPost; cn: boolean }) {
  return <a className="post-card" href={`/${lang}/blog/${post.slug}`}><div className="post-date">{post.date}</div><div><h2>{post.title}</h2><p>{post.excerpt}</p><div className="tag-list">{post.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><span className="status">{post.sourceLang === 'zh' ? 'Chinese source · translation pending' : post.sourceType === 'zhihu-answer' ? (cn ? '知乎回答完整归档' : 'Zhihu answer archive') : post.sourceType === 'zhihu-article' ? (cn ? '知乎原文完整归档' : 'Zhihu source archive') : (cn ? '结构化整理版' : 'Editorial adaptation')}</span></div><span className="post-arrow">↗</span></a>;
}

export function BlogPage({ lang }: { lang: Lang }) {
  const posts = getAllPosts(lang);
  const cn = lang === 'zh';
  const articlePosts = posts.filter(post => post.sourceType === 'zhihu-article');
  const answerPosts = posts.filter(post => post.sourceType === 'zhihu-answer');
  const answerOrder = ['控制理论', '滤波与估计', '数学学习', '优化'];
  const groupBy = (items: BlogPost[], key: (post: BlogPost) => string) => items.reduce((acc, item) => {
    const k = key(item);
    if (!acc.has(k)) acc.set(k, []);
    acc.get(k)!.push(item);
    return acc;
  }, new Map<string, BlogPost[]>());
  const columnsWithPosts = blogColumns.map(column => ({ column, items: articlePosts.filter(post => post.column === column.name) })).filter(group => group.items.length > 0);
  const nonColumnPosts = posts.filter(post => !post.column);
  const nonColumnGroups = [...groupBy(nonColumnPosts, post => post.category || '其他').entries()]
    .sort((a,b) => (answerOrder.indexOf(a[0]) - answerOrder.indexOf(b[0])) || (a[0] as string).localeCompare(b[0] as string));
  return <SiteShell lang={lang}><main><header className="page-hero"><div className="shell"><p className="eyebrow">04 / NOTES</p><h1>{cn ? '技术博客' : 'Technical Notes'}</h1><p>{cn ? '围绕控制、优化、决策规划与机器人学的长期技术写作。正文使用 Markdown 管理，原生支持 LaTeX 数学公式。' : 'Long-form notes on control, optimization, decision making, motion planning, and robotics. Posts are maintained in Markdown with native LaTeX support.'}</p></div></header>
    <section className="shell section"><div className="blog-toolbar"><span>{cn ? `${posts.length} 篇本地 Markdown · ${articlePosts.length} 篇文章 · ${answerPosts.length} 条回答` : `${posts.length} local Markdown entries · ${articlePosts.length} articles · ${answerPosts.length} answers`}</span><span>MARKDOWN + KATEX</span></div>
      <div className="blog-columns">
        <div className="column-card-grid">
          {columnsWithPosts.map(({ column, items }) => <a className="column-card" key={column.slug} href={`/${lang}/blog/column/${column.slug}`}><span className="column-index">{cn ? '专栏' : 'COLUMN'}</span><h2>{cn ? column.name : column.enName}</h2><p>{cn ? column.zhDescription : column.enDescription}</p><div className="column-meta">{items.length} {cn ? '篇文章' : 'articles'} · {cn ? '进入专栏 →' : 'Open column →'}</div></a>)}
        </div>
        {nonColumnGroups.length > 0 && <section className="outside-columns"><div className="outside-head"><span className="column-index">OUTSIDE</span><div><h2>{cn ? '不在专栏里' : 'Outside Columns'}</h2><p>{cn ? `${nonColumnPosts.length} 条回答与未归档内容` : `${nonColumnPosts.length} answers and unlisted notes`}</p></div></div>{nonColumnGroups.map(([category, items]) => <div className="answer-group" key={category as string}><h3>{category}</h3><div className="blog-list">{items.map(post => <PostLink key={post.slug} lang={lang} post={post} cn={cn} />)}</div></div>)}</section>}
      </div>
    </section></main></SiteShell>;
}

export function ColumnPage({ lang, columnSlug }: { lang: Lang; columnSlug: string }) {
  const column = columnBySlug.get(columnSlug);
  const cn = lang === 'zh';
  if (!column) return null;
  const posts = getAllPosts(lang).filter(post => post.column === column.name);
  return <SiteShell lang={lang}><main><header className="page-hero"><div className="shell"><p className="eyebrow">COLUMN / {columnSlug.toUpperCase()}</p><h1>{cn ? column.name : column.enName}</h1><p>{cn ? column.zhDescription : column.enDescription}</p></div></header>
    <section className="shell section"><div className="blog-toolbar"><span>{cn ? `${posts.length} 篇文章` : `${posts.length} articles`}</span><span>MARKDOWN + KATEX</span></div><div className="blog-list">{posts.map(post => <PostLink key={post.slug} lang={lang} post={post} cn={cn} />)}</div></section></main></SiteShell>;
}

export function ArticlePage({ lang, post }: { lang: Lang; post: BlogPost }) {
  return <SiteShell lang={lang}><main className="shell prose-wrap"><article className="prose"><p className="eyebrow">BLOG / {post.sourceType === 'zhihu-answer' ? 'ZHIHU ANSWER' : post.sourceType === 'zhihu-article' ? 'ZHIHU ARTICLE' : 'NOTE'}</p><h1>{post.title}</h1><div className="prose-meta">{post.date} · {post.tags.join(' / ')}</div>{post.sourceLang === 'zh' && <div className="translation-notice"><strong>Chinese source archive</strong>This is the complete Chinese original. A terminology-checked English translation has not yet been published; adding an English Markdown file with the same slug will replace this fallback automatically.</div>}<ReactMarkdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{post.content}</ReactMarkdown></article><aside className="article-aside"><strong>{lang === 'zh' ? '内容信息' : 'CONTENT INFO'}</strong>{lang === 'zh' ? '正文采用 Markdown 维护。行内公式使用 $...$，块公式使用 $$...$$。' : 'Maintained in Markdown. Use $...$ for inline math and $$...$$ for display math.'}{post.source && <><br /><br /><a href={post.source} target="_blank" rel="noreferrer">{lang === 'zh' ? '查看知乎原文 ↗' : 'View Chinese source ↗'}</a></>}</aside></main></SiteShell>;
}
