# Instahyer - Remote Hiring Webinar

A responsive React + Vite landing page for the Instahyer remote hiring webinar, configured for production deployment on Vercel.

## Technology

- Semantic React components
- CSS3 with desktop, tablet and mobile breakpoints
- JavaScript for navigation, modal behaviour and registration form state
- React 18 for reusable components
- Vite 5 for development and production builds
- Vercel deployment with explicit SPA routing and security headers

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`.

## Production build

```bash
npm run build
npm run preview
```

## Vercel deployment

The repository is configured for Vercel with `vercel.json`.

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js: 20.x
- Production Branch: `main`
- SPA rewrites: enabled through `vercel.json`
- Security headers: configured through `vercel.json`
- Vercel working files: excluded through `.vercelignore` and `.gitignore`

For deployment instructions, see [`docs/VERCEL-DEPLOYMENT.md`](./docs/VERCEL-DEPLOYMENT.md).

## SEO

SEO metadata is centralized in `src/config/seo.config.js` and applied through `src/components/common/SEO.jsx`.

The application includes:

- Page title and meta description
- Canonical URL generation from the active origin
- Open Graph metadata
- Twitter card metadata
- `index, follow` for the primary page
- `noindex, nofollow` for the fallback 404 route
- Website and webinar Event JSON-LD structured data
- `public/robots.txt`
- `public/sitemap.xml` foundation
- `public/site.webmanifest`

Before production launch, replace the placeholder sitemap URL with the confirmed canonical production domain.

## QA and security

```bash
npm run qa:static
npm run build
npm run security:audit
```

The final release checklist is documented in [`docs/FINAL-QA.md`](./docs/FINAL-QA.md).

## Assets

Brand assets are stored under `public/images/visual-element/` and referenced through `src/config/brand.config.js`.

Marketing imagery remains under `public/images/` to preserve existing asset paths.

## Architecture

```text
src/
├── components/
├── config/
│   ├── brand.config.js
│   ├── routes.js
│   └── seo.config.js
├── data/
├── hooks/
├── pages/
└── styles/
```
