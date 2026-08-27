"use client";

import { usePathname } from 'next/navigation';
import type { Lang } from '@/lib/site-data';

export function LangSwitch({ alternate, label }: { alternate: Lang; label: string }) {
  const pathname = usePathname() ?? '';
  const target = pathname === '/' ? `/${alternate}` : pathname.replace(/^\/(zh|en)(?=\/|$)/, `/${alternate}`);
  return <a className="lang-switch" href={target}>{label}</a>;
}
