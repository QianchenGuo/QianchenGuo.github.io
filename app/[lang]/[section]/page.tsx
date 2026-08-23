import { BlogPage, CvPage, ResearchPage } from '@/components/pages';
import { languages, type Lang } from '@/lib/site-data';
import { notFound } from 'next/navigation';

const sections = ['cv','research','blog'] as const;
export function generateStaticParams() { return languages.flatMap(lang => sections.map(section => ({ lang, section }))); }
export default async function SectionPage({ params }: { params: Promise<{ lang: string; section: string }> }) {
  const { lang, section } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  if (section === 'cv') return <CvPage lang={lang as Lang} />;
  if (section === 'research') return <ResearchPage lang={lang as Lang} />;
  if (section === 'blog') return <BlogPage lang={lang as Lang} />;
  notFound();
}
