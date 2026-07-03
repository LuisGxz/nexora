/**
 * Site configuration — the single source of truth for everything that is NOT
 * copy or theme: contact channels, demo URLs, social handles, analytics id and
 * brand constants. Components and helpers read from here so a phone number or a
 * demo link changes in exactly one place.
 *
 * Locale-independent. Translated copy lives in `site.es.ts` / `site.en.ts`;
 * colors/typography live in the design tokens.
 *
 * ⚠️ PENDING REAL VALUES (owner to provide; wired in the final phase): the
 * WhatsApp number, email and social handles below are placeholders. Search
 * `PENDING` before launch. Analytics id comes from the environment
 * (`PUBLIC_GA_ID`) — never commit a real id or any secret to the repo.
 */

/**
 * Deploy base path (no trailing slash) so config-built URLs resolve both under
 * the GitHub Pages `/nexora/` subpath and at a future root domain.
 */
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

/** Brand identity constants used in metadata, vCard and footer. */
export const brand = {
  name: 'Nexora',
  legalName: 'Nexora Software',
  tagline: 'Estudio de Software',
  location: 'Guayaquil, Ecuador',
  /** PENDING: real contact email. */
  email: 'hola@nexora.dev',
  /** PENDING: production domain (also set in `astro.config.mjs`). */
  url: 'https://luisgxz.github.io/nexora/',
} as const;

/**
 * WhatsApp contact in E.164 WITHOUT the leading `+` or spaces — this is the
 * exact form `wa.me/<number>` requires.
 * ⚠️ PENDING: replace with the real number before launch.
 */
export const whatsappNumber = '593900000000';

/**
 * Live demo URLs referenced by `works[]` (same key in both locales). Each demo
 * is a self-contained static landing shipped from `public/demos/<slug>/`, so
 * the links deploy with the site and inherit the configured base path.
 */
export const demoUrls = {
  barbershop: `${BASE}/demos/bravo-barber/`,
  restaurant: `${BASE}/demos/la-sazon/`,
  clinic: `${BASE}/demos/dental-aurora/`,
  event: `${BASE}/demos/andrea-y-mateo/`,
  corporate: `${BASE}/demos/vertice/`,
} as const;

/**
 * Preview screenshots for the `works[]` cards (960×540 webp under
 * `public/works/`), captured from each live demo's hero at 1280×720. Keys
 * mirror `demoUrls` so a demo and its preview always travel together.
 */
export const demoPreviews = {
  barbershop: `${BASE}/works/bravo-barber.webp`,
  restaurant: `${BASE}/works/la-sazon.webp`,
  clinic: `${BASE}/works/dental-aurora.webp`,
  event: `${BASE}/works/andrea-y-mateo.webp`,
  corporate: `${BASE}/works/vertice.webp`,
} as const;

/**
 * Social / professional profile URLs. ⚠️ PENDING: confirm before launch.
 * `portfolio` is the lead developer's GitHub portfolio, surfaced in About so
 * visitors can see who builds Nexora.
 */
export const social = {
  instagram: 'https://instagram.com/nexora',
  linkedin: 'https://linkedin.com/company/nexora',
  portfolio: 'https://luisgxz.github.io/portfolio/',
  /** ⚠️ PENDING: real Fiverr profile URL (placeholder hides the link). */
  fiverr: '#',
} as const;

/**
 * Google Analytics measurement id, injected from the environment at build.
 * Absent in dev / when unset → analytics is a no-op (see `lib/analytics.ts`).
 */
export const analyticsId: string | undefined = import.meta.env.PUBLIC_GA_ID;

/**
 * Path to the downloadable vCard (`/nexora.vcf` endpoint), prefixed with the
 * configured deploy subpath so it resolves both under `/nexora/` and at root.
 */
export const vcardPath = `${BASE}/nexora.vcf`;

export const siteConfig = {
  brand,
  whatsappNumber,
  demoUrls,
  social,
  analyticsId,
  vcardPath,
} as const;

export type SiteConfig = typeof siteConfig;
