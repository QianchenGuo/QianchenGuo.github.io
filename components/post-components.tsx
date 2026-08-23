import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { getAllPosts, type BlogPost } from '@/lib/blog';
import { knownZhihuPosts, type Lang } from '@/lib/site-data';
import { SiteShell } from './site-shell';

export function BlogPage({ lang }: { lang: Lang }) {
  const posts = getAllPosts(lang);
  const cn = lang === 'zh';
  return <SiteShell lang={lang}><main><header className="page-hero"><div className="shell"><p className="eyebrow">04 / NOTES</p><h1>{cn ? '技术博客' : 'Technical Notes'}</h1><p>{cn ? '围绕控制、优化、决策规划与机器人学的长期技术写作。正文使用 Markdown 管理，原生支持 LaTeX 数学公式。' : 'Long-form notes on control, optimization, decision making, motion planning, and robotics. Posts are maintained in Markdown with native LaTeX support.'}</p></div></header>
    <section className="shell section"><div className="blog-toolbar"><span>{cn ? `${posts.length} 篇已完成本地迁移 · 知乎公开档案共 92 篇文章 / 78 个回答` : `${posts.length} locally curated English post(s) · 92 articles / 78 answers in the public Zhihu archive`}</span><span>MARKDOWN + KATEX</span></div>
      <div className="blog-list">{posts.map(post => <a className="post-card" key={post.slug} href={`/${lang}/blog/${post.slug}`}><div className="post-date">{post.date}</div><div><h2>{post.title}</h2><p>{post.excerpt}</p><div className="tag-list">{post.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><span className="status">{cn ? '已本地化' : 'Editorial translation'}</span></div><span className="post-arrow">↗</span></a>)}</div>
      {cn && <><div className="blog-toolbar" style={{marginTop:64}}><span>知乎原文迁移清单（已核验条目）</span><span>SOURCE-LINKED</span></div><div className="blog-list">{knownZhihuPosts.map(([date,title,url]) => <a className="post-card" href={url} target="_blank" rel="noreferrer" key={url}><div className="post-date">{date}</div><div><h2>{title}</h2><p>原文仍托管于知乎；完成正文、公式与插图校验后再标记为本地化。</p><span className="status">待完整校验</span></div><span className="post-arrow">↗</span></a>)}</div></>}
    </section></main></SiteShell>;
}

export function ArticlePage({ lang, post }: { lang: Lang; post: BlogPost }) {
  return <SiteShell lang={lang}><main className="shell prose-wrap"><article className="prose"><p className="eyebrow">BLOG / {post.tags[0] ?? 'NOTE'}</p><h1>{post.title}</h1><div className="prose-meta">{post.date} · {post.tags.join(' / ')}</div><ReactMarkdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{post.content}</ReactMarkdown></article><aside className="article-aside"><strong>{lang === 'zh' ? '文章信息' : 'ARTICLE INFO'}</strong>{lang === 'zh' ? '正文采用 Markdown 维护。行内公式使用 $...$，块公式使用 $$...$$。' : 'Maintained in Markdown. Use $...$ for inline math and $$...$$ for display math.'}{post.source && <><br /><br /><a href={post.source} target="_blank" rel="noreferrer">{lang === 'zh' ? '查看知乎原文 ↗' : 'View Chinese source ↗'}</a></>}</aside></main></SiteShell>;
}
