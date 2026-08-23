import { ArticlePage } from '@/components/post-components';
import { getAllPosts, getPost } from '@/lib/blog';
import { languages, type Lang } from '@/lib/site-data';
import { notFound } from 'next/navigation';

export function generateStaticParams() { return languages.flatMap(lang => getAllPosts(lang).map(post => ({ lang, slug: post.slug }))); }
export default async function PostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  const post = getPost(lang as Lang, slug);
  if (!post) notFound();
  return <ArticlePage lang={lang as Lang} post={post} />;
}
