# Pocketly landing page

Single-page marketing site for Pocketly, a mobile personal-finance app. Built with Vite, React, TypeScript, and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run lint     # run ESLint
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
```

The site is served under `/finance-landing-page/` (see `base` in `vite.config.ts`), so open the URL that `npm run dev` prints, including that path.

## Project structure

- `src/components/` – layout pieces shared across the page (`Navbar`, `Footer`)
- `src/sections/` – one component per page section, composed in order by `src/App.tsx`
- `src/index.css` – Tailwind import and design tokens (`@theme`)

## Deploying to GitHub Pages

Pushes to `master` run `.github/workflows/deploy.yml`, which installs dependencies, builds the site, and publishes `dist/`.

One-time setup: in the repository, go to **Settings > Pages** and set **Source** to **GitHub Actions**.

The site is then available at `https://fanorama.github.io/finance-landing-page/`.
