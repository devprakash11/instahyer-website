# Instahyer asset system

## Structure

- `brand/`: canonical logo and favicon assets.
- `images/`: reserved for optimized production images grouped by feature.
- `icons/`: reusable non-brand SVG icons.

## Existing legacy images

The current webinar assets remain under `public/images/` during this migration so existing URLs do not break. New assets should use `public/assets/`.

## Naming rules

- lowercase kebab-case
- descriptive names
- no spaces
- one purpose per asset
- prefer SVG for logos/icons
- prefer WebP/AVIF for photographic/raster marketing imagery

## Optimization rules

- Provide explicit image dimensions where practical.
- Use responsive images for large photography/illustrations.
- Lazy-load below-the-fold content images.
- Keep above-the-fold hero imagery eager and high priority when it materially affects LCP.
