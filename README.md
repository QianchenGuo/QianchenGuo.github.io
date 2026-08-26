# Qianchen Guo — Personal Website

A bilingual, zero-hosting-cost research portfolio and Markdown blog prepared for `qianchenguo.github.io`.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Add a blog post

```bash
npm run new:post -- zh my-new-post
```

Edit `content/blog/zh/my-new-post.md` and paste Zhihu Markdown below the front matter. GitHub-flavored Markdown, inline math `$...$`, and display math `$$...$$` are supported.

For an English translation, create a file with the same slug under `content/blog/en/`. Technical terms should be checked editorially; untranslated posts remain clearly marked instead of being presented as finished translations.

## Import Zhihu snapshots

```bash
npm run import:zhihu -- <raw-directory> [--download-images]
```

The raw directory can contain `article-<id>.json` and `answer-<id>.json` files produced by the Zhihu archiver. Articles become `zhihu-<id>.md`, answers become `zhihu-answer-<id>.md`, and both are merged into `content/zhihu-inventory.json` without dropping previously imported entries, so the script can be run repeatedly while fetching the remaining snapshots.

Add `--download-images` to download Zhihu images into `public/blog-assets/zhihu/` instead of keeping remote URLs.

## Publish to GitHub Pages

1. Create the public repository `QianchenGuo.github.io` under the `QianchenGuo` account.
2. Push this directory to the repository's `main` branch.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.
4. The included workflow builds a static export and deploys it at no hosting cost.

## Content model

- `lib/site-data.tsx`: bilingual profile, CV, and research copy.
- `content/blog/zh/*.md`: Chinese posts.
- `content/blog/en/*.md`: editorial English translations.
- `content/zhihu-inventory.json`: generated Zhihu article/answer index used for blog counts and status.
- `scripts/import-zhihu.mjs`: imports article and answer snapshots into Markdown.
- `public/`: portrait, favicon, and future blog images.

The website intentionally omits date of birth, gender, and phone number from the public CV.
