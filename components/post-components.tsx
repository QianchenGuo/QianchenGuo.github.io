import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { getAllPosts, type BlogPost } from '@/lib/blog';
import { type Lang } from '@/lib/site-data';
import { SiteShell } from './site-shell';

export function BlogPage({ lang }: { lang: Lang }) {
  const posts = getAllPosts(lang);
  const cn = lang === 'zh';
  const articles = posts.filter(post => post.sourceType === 'zhihu-article').length;
  const answers = posts.filter(post => post.sourceType === 'zhihu-answer').length;
  return <SiteShell lang={lang}><main><header className="page-hero"><div className="shell"><p className="eyebrow">04 / NOTES</p><h1>{cn ? '技术博客' : 'Technical Notes'}</h1><p>{cn ? '围绕控制、优化、决策规划与机器人学的长期技术写作。正文使用 Markdown 管理，原生支持 LaTeX 数学公式。' : 'Long-form notes on control, optimization, decision making, motion planning, and robotics. Posts are maintained in Markdown with native LaTeX support.'}</p></div></header>
    <section className="shell section"><div className="blog-toolbar"><span>{cn ? `${posts.length} 篇本地 Markdown · ${articles} 篇文章 · ${answers} 条回答` : `${posts.length} local Markdown entries · ${articles} articles · ${answers} answers`}</span><span>MARKDOWN + KATEX</span></div>
      <div className="blog-list">{posts.map(post => <a className="post-card" key={post.slug} href={`/${lang}/blog/${post.slug}`}><div className="post-date">{post.date}</div><div><h2>{post.title}</h2><p>{post.excerpt}</p><div className="tag-list">{post.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><span className="status">{post.sourceLang === 'zh' ? 'Chinese source · translation pending' : post.sourceType === 'zhihu-answer' ? (cn ? '知乎回答完整归档' : 'Zhihu answer archive') : post.sourceType === 'zhihu-article' ? (cn ? '知乎原文完整归档' : 'Zhihu source archive') : (cn ? '结构化整理版' : 'Editorial adaptation')}</span></div><span className="post-arrow">↗</span></a>)}</div>
    </section></main></SiteShell>;
}

export function ArticlePage({ lang, post }: { lang: Lang; post: BlogPost }) {
  return <SiteShell lang={lang}><main className="shell prose-wrap"><article className="prose"><p className="eyebrow">BLOG / {post.sourceType === 'zhihu-answer' ? 'ZHIHU ANSWER' : post.sourceType === 'zhihu-article' ? 'ZHIHU ARTICLE' : 'NOTE'}</p><h1>{post.title}</h1><div className="prose-meta">{post.date} · {post.tags.join(' / ')}</div>{post.sourceLang === 'zh' && <div className="translation-notice"><strong>Chinese source archive</strong>This is the complete Chinese original. A terminology-checked English translation has not yet been published; adding an English Markdown file with the same slug will replace this fallback automatically.</div>}<ReactMarkdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{post.content}</ReactMarkdown></article><aside className="article-aside"><strong>{lang === 'zh' ? '内容信息' : 'CONTENT INFO'}</strong>{lang === 'zh' ? '正文采用 Markdown 维护。行内公式使用 $...$，块公式使用 $$...$$。' : 'Maintained in Markdown. Use $...$ for inline math and $$...$$ for display math.'}{post.source && <><br /><br /><a href={post.source} target="_blank" rel="noreferrer">{lang === 'zh' ? '查看知乎原文 ↗' : 'View Chinese source ↗'}</a></>}</aside></main></SiteShell>;
}
