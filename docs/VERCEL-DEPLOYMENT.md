# Vercel Deployment

This project is a React + Vite static application and is configured for Vercel deployment.

## Vercel project settings

Use the repository root as the Root Directory.

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Node.js: 20.x
- Production Branch: `main`

Vercel can detect Vite automatically, but `vercel.json` is included so SPA routing and production headers are explicit and version-controlled.

## SPA routing

`vercel.json` rewrites application requests to `/index.html`. This keeps direct navigation to the application's fallback route working on Vercel while allowing Vite-generated assets to be served normally.

## Security headers

Production security headers are configured in `vercel.json`, including CSP, HSTS, clickjacking protection, MIME sniffing protection, Referrer-Policy and Permissions-Policy.

## Deployment

For Git-based deployment, connect `devprakash11/instahyer-website` to the Vercel project and deploy the `main` branch.

For CLI deployment:

```bash
npm install
npm run build
npx vercel --prod
```

Do not commit `.vercel/` or environment files. `.vercelignore` and `.gitignore` already exclude them.

## Environment variables

This frontend currently does not require private environment variables. If a future API is added, configure Vite public variables through Vercel Project Settings and keep secrets server-side. Never commit `.env` files.

## Production verification

After deployment verify:

1. `/` returns the application.
2. `/site.webmanifest` returns 200.
3. `/robots.txt` returns 200.
4. `/sitemap.xml` returns 200 after the canonical domain is configured.
5. Favicon and logo assets load.
6. Direct navigation to an application route does not return a Vercel 404.
7. Security headers are present.
8. `npm run build` succeeds locally or in the Vercel build logs.
9. `npm run security:audit` has no unreviewed high-severity findings.

## Canonical domain

The repository currently does not hardcode a Vercel domain because the connected Vercel workspace does not expose an Instahyer project in the available project list. Once the production URL is confirmed, update the sitemap/canonical configuration with the real domain rather than a guessed URL.
