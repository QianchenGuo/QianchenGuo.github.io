import { ColumnPage } from '@/components/post-components';
import { columnBySlug } from '@/lib/columns';
import { languages, type Lang } from '@/lib/site-data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return languages.flatMap(lang => Array.from(columnBySlug.keys()).map(column => ({ lang, column })));
}

export default async function ColumnRoute({ params }: { params: Promise<{ lang: string; column: string }> }) {
  const { lang, column } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  if (!columnBySlug.has(column)) notFound();
  return <ColumnPage lang={lang as Lang} columnSlug={column} />;
}
