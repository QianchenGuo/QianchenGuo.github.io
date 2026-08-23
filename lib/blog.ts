import type { Lang } from './site-data';
import { generatedPosts } from './generated-posts';

export type BlogPost = {
  slug: string; lang: Lang; title: string; date: string; excerpt: string;
  tags: string[]; source?: string; content: string;
};

export function getAllPosts(lang: Lang): BlogPost[] {
  return generatedPosts
    .filter(post => post.lang === lang)
    .map(post => ({ ...post, tags: [...post.tags] }))
    .sort((a,b) => b.date.localeCompare(a.date));
}

export function getPost(lang: Lang, slug: string) {
  return getAllPosts(lang).find(post => post.slug === slug);
}
