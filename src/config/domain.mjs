/**
 * Primary production domain — the single source of truth for the canonical
 * origin of the site.
 *
 * Why a standalone `.mjs` module: the domain is needed by three consumers that
 * cannot share a TypeScript import graph — `astro.config.mjs` (Node, build
 * time), `src/config/site.config.ts` + `BaseLayout.astro` (Vite, browser) and
 * `scripts/render-og.mjs` (plain Node, run outside Astro). Plain ESM is the only
 * format all three load without a transpile step, so the value lives here and
 * every consumer imports it. Swapping the domain is a one-line edit.
 *
 * Not in `site.config.ts` because `astro.config.mjs` runs before Vite exists and
 * cannot import a `.ts` file.
 */

/** Bare apex hostname, no scheme and no trailing slash (used in printed copy). */
export const PRIMARY_DOMAIN = 'nexoradevs.com';

/** Canonical origin used for `site`, canonical URLs, hreflang, sitemap and OG. */
export const PRIMARY_ORIGIN = `https://${PRIMARY_DOMAIN}`;
