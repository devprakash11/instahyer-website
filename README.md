# People First - Remote Hiring Webinar

A responsive React + Vite landing page recreated from the supplied one-page webinar design.

## Technology

- HTML5 through semantic React components
- CSS3 with desktop, tablet and mobile breakpoints
- JavaScript for navigation, modal behaviour and registration form state
- React 18 for reusable components
- Vite 5 for development and production builds

## Run locally

### Windows quick start

Double-click `RUN-WEBSITE.bat`.

### Terminal

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

## Asset locations

- Hero background: `public/images/hero-background.jpg`
- Hero illustration: `public/images/hero-illustration.webp`
- About illustration: `public/images/about-illustration.webp`
- Panelists: `public/images/panelist-*.webp`
- Final CTA illustration: `public/images/registration-illustration.webp`
- Alternative portraits: `public/images/alternatives/`

## Add your logo

The header and footer intentionally use a blank logo placeholder. Replace the `LogoPlaceholder` component in `src/components/common/LogoPlaceholder.jsx` with your own image:

```jsx
<img src="/images/logo.svg" alt="People First" className="brand-logo" />
```

## Content note

The section order and core copy follow the provided assignment. Clear typographical mistakes in the reference were corrected for a professional final page.
