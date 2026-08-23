import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const [lang = 'zh', slug = `note-${Date.now()}`] = process.argv.slice(2);
if (!['zh','en'].includes(lang) || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: npm run new:post -- <zh|en> <lowercase-slug>');
  process.exit(1);
}
const dir = path.join(process.cwd(),'content','blog',lang);
const file = path.join(dir,`${slug}.md`);
if (fs.existsSync(file)) { console.error(`Post already exists: ${file}`); process.exit(1); }
fs.mkdirSync(dir,{ recursive: true });
fs.writeFileSync(file,`---\ntitle: "新文章标题"\ndate: "${new Date().toISOString().slice(0,10)}"\nexcerpt: "一句话摘要"\ntags: ["规划", "优化"]\nsource: ""\n---\n\n把知乎 Markdown 正文粘贴到这里。\n\n行内公式：$x_{t+1}=f(x_t,u_t)$\n\n块公式：\n\n$$\n\\min_u J(u)\n$$\n`,'utf8');
execFileSync(process.execPath,[path.join(process.cwd(),'scripts','build-content.mjs')],{ stdio: 'inherit' });
console.log(file);
