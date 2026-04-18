# Portfolio

Personal portfolio (React + Vite) — build & deploy instructions

## Prerequisites

- Node.js 18+ and npm

## Quick start (local)

Install dependencies and run dev server:

```bash
npm install
npm run dev
```

Open http://localhost:5173 (Vite will show the port).

## Build (production)

```bash
npm run build
```

This produces the `dist/` folder with the production site.

## Preview the built site locally

```bash
npm run preview
```

## Deploy options

Two supported deploy workflows are included in this repo:

- Manual `gh-pages` deploy (pushes `dist` to `gh-pages` branch):

```bash
# runs build then publishes dist to gh-pages
npm run deploy
```

- `docs/` deploy (builds and copies `dist` to `docs/` on `main`):

```bash
npm run deploy:docs
# commit and push docs/ to main (this repo already contains a commit)
git add docs && git commit -m "Publish site to docs/ for GitHub Pages" && git push
```

After `docs/` is on `main`, set GitHub Pages to use `main` → `/docs` in repository Settings → Pages.

## Troubleshooting

- If the site loads raw `.jsx` files or shows MIME errors, ensure Pages is serving the built content (either `gh-pages` branch or `main/docs`).
- If assets 404, check `vite.config.js` `base` option matches your Pages subpath.

## Where things are

- Source: `src/`
- Assets: `src/assets/`
- Build output: `dist/` (generated) and `docs/` (generated and committed when using `deploy:docs`)

---
