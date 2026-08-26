import type { Lang } from './site-data';
import { generatedPosts } from './generated-posts';

export type BlogPost = {
  slug: string; lang: Lang; title: string; date: string; excerpt: string;
  tags: string[]; source?: string; sourceType?: string; zhihuId?: string;
  translationStatus?: string; sourceLang?: Lang; content: string;
};

export function getAllPosts(lang: Lang): BlogPost[] {
  const allPosts = generatedPosts as unknown as BlogPost[];
  const nativePosts = allPosts
    .filter(post => post.lang === lang)
    .map(post => ({ ...post, tags: [...post.tags] }))
    .sort((a,b) => b.date.localeCompare(a.date)) as BlogPost[];

  if (lang === 'zh') return nativePosts;

  const translatedSlugs = new Set(nativePosts.map(post => post.slug));
  const sourceFallbacks = allPosts
    .filter(post => post.lang === 'zh' && (post.sourceType === 'zhihu-article' || post.sourceType === 'zhihu-answer') && !translatedSlugs.has(post.slug))
    .map(post => ({
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
