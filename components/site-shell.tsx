import type { Lang } from '@/lib/site-data';
import { copy } from '@/lib/site-data';
import { LangSwitch } from './lang-switch';

export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = copy[lang];
  const base = `/${lang}`;
  const alternate = lang === 'zh' ? 'en' : 'zh';
  return <>
    <header className="topbar"><div className="shell topbar-inner">
      <a href={base} className="brand" aria-label="Qianchen Guo home"><span className="brand-mark" aria-hidden="true" /><span>QIANCHEN.GUO</span></a>
      <nav className="nav" aria-label="Primary navigation">
        <a href={base}>{t.nav.home}</a><a href={`${base}/cv`}>{t.nav.cv}</a><a href={`${base}/research`}>{t.nav.research}</a><a href={`${base}/blog`}>{t.nav.blog}</a><LangSwitch alternate={alternate} label={t.switchLabel} />
      </nav>
    </div></header>
    {children}
    <footer className="footer"><div className="shell footer-inner">
      <span>© 2026 Qianchen Guo · {t.footer}</span>
      <div className="footer-links"><a href="mailto:guo13006568010@163.com">Email</a><a href="https://github.com/QianchenGuo" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.zhihu.com/people/gqcshuang-zi-xing" target="_blank" rel="noreferrer">Zhihu</a></div>
    </div></footer>
  </>;
}
