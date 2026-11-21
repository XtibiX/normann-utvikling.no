# Normann Utvikling

Personal site for Normann Utvikling — Rolf Erik Normann, Tech Lead & backend developer.

Live at **https://normann-utvikling.no**

## Stack

Vite, React, TypeScript, Tailwind CSS and shadcn/ui.

## Develop

Requires Node.js 22+.

```sh
npm ci
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

The custom domain is set under **Settings → Pages**. DNS is managed at domene.shop:
four `A` records on the apex domain pointing to GitHub Pages, and `www` as a `CNAME` to `xtibix.github.io`.

## Design

- Colours are defined as HSL tokens in [`src/index.css`](src/index.css). The teal accent (`--signal`, `#68BAD1`)
  is sampled from the profile photo background.
- Fonts: Instrument Serif (headings), IBM Plex Sans (body), IBM Plex Mono (labels).
- Page sections live in [`src/components/`](src/components/) and are composed in [`src/pages/Index.tsx`](src/pages/Index.tsx).
