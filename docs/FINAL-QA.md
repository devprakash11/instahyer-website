# Instahyer Final QA

## Automated checks

Run these from the repository root:

```bash
npm install
npm run qa:static
npm run build
npm run security:audit
```

`qa:static` validates the production-critical source files, Vercel configuration and required brand/marketing assets. `build` verifies the Vite production bundle. `security:audit` checks dependencies at the configured high-severity threshold.

## Vercel deployment checks

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 20.x
- Production branch: `main`
- SPA fallback is configured in `vercel.json`.
- Production security headers are configured in `vercel.json`.
- `.vercel/` is ignored by Git.

## Manual browser QA matrix

Before production launch, verify the deployed site at:

- Desktop: 1440px, 1280px
- Tablet: 1024px, 768px
- Mobile: 430px, 390px, 360px

### Core flow

- Header navigation opens and closes correctly on mobile.
- Skip link reaches the main content.
- Hero CTA opens the registration dialog.
- Required fields show useful validation errors.
- Invalid form submission moves focus to the first invalid field.
- Submission loading state prevents duplicate submissions.
- Success state restores focus correctly.
- Modal closes with Escape when not submitting.
- Focus is restored to the trigger after modal close.

### Accessibility

- Keyboard-only navigation has visible focus indicators.
- Heading hierarchy remains logical.
- Decorative icons are ignored by assistive technology.
- Modal background content is unavailable to assistive technology while open.
- Reduced-motion preference is respected.
- High-contrast preference retains visible focus.

### SEO / production

- Confirm the canonical production domain and replace the sitemap placeholder if still present.
- Verify `robots.txt` and `sitemap.xml` return 200 responses.
- Verify favicon and web manifest load.
- Verify Open Graph and Twitter metadata in the deployed HTML.
- Validate JSON-LD structured data.
- Verify the 404 route is not indexed.
- Verify Vercel security headers are present.
- Verify hashed Vite assets are cached correctly.

## Release criteria

The site should only be considered production-ready when:

1. `npm run qa:static` passes.
2. `npm run build` passes.
3. `npm run security:audit` has no high-severity dependency findings that are accepted without remediation.
4. The manual browser matrix above passes.
5. The canonical domain is confirmed and configured.
6. The Vercel production deployment reports Ready.
