# Instahyer - Remote Hiring Webinar

A responsive React + Vite landing page for the Instahyer remote hiring webinar.

## Technology

- Semantic React components
- CSS3 with desktop, tablet and mobile breakpoints
- JavaScript for navigation, modal behaviour and registration form state
- React 18 for reusable components
- Vite 5 for development and production builds

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

Before production launch, replace the placeholder sitemap URL with the confirmed canonical production domain.

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
