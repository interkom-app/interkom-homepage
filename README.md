# interkom-homepage

Static landing page for **Interkom** — a private social network for your company.
Built with Vite + React + TypeScript + Tailwind v4.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The build uses a relative `base` (`./`), so it works whether GitHub Pages
serves it from `username.github.io` or `username.github.io/interkom-homepage/`.

## Deploy to GitHub Pages

1. Push to `main` on a GitHub repo.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
