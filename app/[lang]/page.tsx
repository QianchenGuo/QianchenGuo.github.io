import { HomePage } from '@/components/pages';
import { languages, type Lang } from '@/lib/site-data';
import { notFound } from 'next/navigation';

export function generateStaticParams() { return languages.map(lang => ({ lang })); }
export default async function LocalizedHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  return <HomePage lang={lang as Lang} />;
}
