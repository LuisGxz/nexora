// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

/**
 * Astro project configuration for the Nexora landing.
 *
 * Why: wires the two integrations the stack needs — Tailwind (theme ported
 * from `nexora-brand/tokens/`) and React (interactive islands only) — and
 * declares the canonical site URL used for SEO (canonical, hreflang, sitemap).
 *
 * Output is `static`: the site has no backend. First-visit language detection
 * (Phase 1) is implemented client-side so the build can stay fully static and
 * free on Vercel. A pure-static Astro site needs NO adapter — Vercel detects
 * Astro, runs `npm run build`, and serves `dist/` (see `vercel.json` + README).
 *
 * `site` drives canonical URLs, `hreflang`, the sitemap and OG image URLs. It is
 * still the placeholder domain — set the real domain HERE (one place) at launch.
 *
 * `applyBaseStyles: false` keeps Tailwind's base reset under our control via
 * `src/styles/global.css`, avoiding a duplicate injected stylesheet.
 */
/**
 * Deploy-target detection: Vercel sets `VERCEL=1` and the production hostname
 * in `VERCEL_PROJECT_PRODUCTION_URL` at build time, so the same repo builds
 * for the Vercel root domain AND for the GitHub Pages `/nexora/` subpath
 * without touching this file. `withBase()` (lib/i18n) keys off `base`, so
 * every internal link adapts with it.
 */
const onVercel = !!process.env.VERCEL;
// Pinned to the project's primary production domain (added via
// `vercel domains add`) so canonical/OG/sitemap URLs stay stable even though
// each deploy also gets hashed + default aliases.
const vercelSite = 'https://nexora-gye.vercel.app';

export default defineConfig({
  // Vercel: root deploy (primary share link). GitHub Pages: project subpath
  // https://luisgxz.github.io/nexora/ (kept as mirror). A future custom domain
  // only needs its own site/base pair here.
  site: onVercel ? vercelSite : 'https://luisgxz.github.io',
  base: onVercel ? '/' : '/nexora',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
