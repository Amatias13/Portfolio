# Portfolio

Personal portfolio built with React + Vite, deployed to GitHub Pages via GitHub Actions.

🌐 **Live:** [amatias13.github.io/Portfolio](https://amatias13.github.io/Portfolio/)

## Stack

React · Vite · Framer Motion · CSS · GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/Portfolio/](http://localhost:5173/Portfolio/)

## Available scripts

| Script            | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start dev server                 |
| `npm run build`   | Production build → `dist/`       |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint                       |
| `npm test`        | Run unit tests (Vitest)          |

## Deployment

Automated via GitHub Actions on every push to `main`:

1. Lint → Test → Build
2. Deploy `dist/` to GitHub Pages

No manual steps needed — just push to `main`.
