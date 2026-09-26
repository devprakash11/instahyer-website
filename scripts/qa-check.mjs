import { existsSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const requiredFiles = [
  'index.html',
  'package.json',
  'vercel.json',
  '.vercelignore',
  'src/main.jsx',
  'src/App.jsx',
  'src/config/brand.config.js',
  'src/config/routes.js',
  'src/config/seo.config.js',
  'src/components/common/SEO.jsx',
  'src/components/common/BrandLogo.jsx',
  'src/components/modal/RegistrationModal.jsx',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/site.webmanifest',
];

const requiredAssets = [
  'public/images/visual-element/Logo.png',
  'public/images/visual-element/favicon-icon.png',
  'public/images/hero-illustration.webp',
  'public/images/hero-background.jpg',
];

const failures = [];

for (const file of [...requiredFiles, ...requiredAssets]) {
  if (!existsSync(join(root, file))) failures.push(`Missing: ${file}`);
}

const index = readFileSync(join(root, 'index.html'), 'utf8');
const packageJson = JSON.parse(readFileSync(join(root, 'package.json')));
const vercelConfig = JSON.parse(readFileSync(join(root, 'vercel.json')));

const requiredChecks = [
  [index.includes('favicon-icon.png'), 'index.html references the favicon'],
  [index.includes('site.webmanifest'), 'index.html references the web manifest'],
  [index.includes('hero-illustration.webp'), 'index.html preloads the hero illustration'],
  [packageJson.scripts?.build, 'package.json defines a production build script'],
  [packageJson.scripts?.['security:audit'], 'package.json defines a security audit script'],
  [packageJson.engines?.node === '20.x', 'package.json pins the supported Node major version'],
  [vercelConfig.framework === 'vite', 'vercel.json uses the Vite framework preset'],
  [vercelConfig.outputDirectory === 'dist', 'vercel.json uses the Vite dist output directory'],
  [vercelConfig.buildCommand === 'npm run build', 'vercel.json uses the production build command'],
  [Array.isArray(vercelConfig.rewrites) && vercelConfig.rewrites.length > 0, 'vercel.json defines SPA routing'],
  [Array.isArray(vercelConfig.headers) && vercelConfig.headers.length > 0, 'vercel.json defines production headers'],
];

for (const [passed, label] of requiredChecks) {
  if (!passed) failures.push(`Failed: ${label}`);
}

if (failures.length) {
  console.error('Final QA static checks failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Final QA static checks passed: ${requiredFiles.length} required files and ${requiredAssets.length} required assets verified.`);
console.log(`Project root: ${relative(process.cwd(), root) || '.'}`);
