import { SiteShell } from './site-shell';
import { BlogPage } from './post-components';
import { copy, cv, research, type Lang } from '@/lib/site-data';
import Image from 'next/image';

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return <SiteShell lang={lang}><main>
    <section className="shell hero"><div><p className="eyebrow">{t.intro}</p><h1>{t.hero}</h1><p className="hero-lead">{t.lead}</p><div className="hero-actions"><a className="button primary" href={`/${lang}/research`}>{t.viewResearch} →</a><a className="button" href={`/${lang}/blog`}>{t.readBlog}</a></div></div>
      <aside className="portrait-panel" aria-label="Profile portrait"><div className="portrait-frame"><Image src="/qianchen-guo.jpeg" width={320} height={426} priority alt={lang === 'zh' ? '郭乾琛证件照' : 'Portrait of Qianchen Guo'} /></div><div className="portrait-code"><b>● ACTIVE</b><br />{t.status}<br />{t.role}</div></aside>
    </section>
    <div className="metric-strip">{t.metrics.map(([value,label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    <section className="shell section"><div className="section-head"><div className="section-index">01 / RESEARCH</div><div className="section-title"><h2>{t.focusTitle}</h2><p>{t.focusDesc}</p></div></div><div className="card-grid">{t.focus.map((item,index) => <article className="card" key={item.title}><span className="card-number">0{index+1}</span><h3>{item.title}</h3><p>{item.text}</p><div className="tag-list">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div></section>
    <section className="shell section"><div className="statement"><div className="statement-quote">“{t.statementTitle}”</div><div className="statement-copy">{t.statement.map(p => <p key={p}>{p}</p>)}</div></div></section>
  </main></SiteShell>;
}

function PageHero({ index, title, intro }: { index: string; title: string; intro: string }) {
  return <header className="page-hero"><div className="shell"><p className="eyebrow">{index}</p><h1>{title}</h1><p>{intro}</p></div></header>;
}

export function CvPage({ lang }: { lang: Lang }) {
  const data = cv[lang];
  return <SiteShell lang={lang}><main><PageHero index="02 / PROFILE" title={data.title} intro={data.intro} />
    <section className="shell section"><div className="section-head"><div className="section-index">EDUCATION</div><div /></div><div className="timeline">{data.education.map(item => <article className="timeline-item" key={item.title}><div className="timeline-meta">{item.time}</div><h2>{item.title}</h2><h3>{item.place}</h3><ul>{item.points.map(p => <li key={p}>{p}</li>)}</ul></article>)}</div></section>
    <section className="shell section"><div className="section-head"><div className="section-index">CAPABILITIES</div><div className="section-title"><h2>{lang === 'zh' ? '知识与工具' : 'Knowledge & Tools'}</h2></div></div><div className="two-col">{data.skills.map(([title,text]) => <article className="info-panel" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></section>
    <section className="shell section"><div className="section-head"><div className="section-index">HONORS</div><div className="section-title"><h2>{lang === 'zh' ? '荣誉与奖项' : 'Honors & Awards'}</h2></div></div><div className="info-panel"><ul>{data.awards.map(a => <li key={a}>{a}</li>)}</ul></div></section>
  </main></SiteShell>;
}

export function ResearchPage({ lang }: { lang: Lang }) {
  const data = research[lang];
  return <SiteShell lang={lang}><main><PageHero index="03 / WORK" title={data.title} intro={data.intro} /><section className="shell section"><div className="timeline">{data.items.map(item => <article className="timeline-item" key={item.title}><div className="timeline-meta">{item.time}</div><h2>{item.title}</h2><h3>{item.place}</h3><ul>{item.points.map(p => <li key={p}>{p}</li>)}</ul></article>)}</div></section></main></SiteShell>;
}

export { BlogPage };
