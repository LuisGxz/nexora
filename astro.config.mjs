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
export default defineConfig({
  // GitHub Pages project site: served under https://luisgxz.github.io/nexora/.
  // `site` (origin) + `base` (subpath) together drive canonical/hreflang/OG/sitemap
  // and prefix every asset URL. Swap both for the real domain at launch (base: '/').
  site: 'https://luisgxz.github.io',
  base: '/nexora',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
