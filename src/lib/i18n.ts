/**
 * Internationalization helpers.
 *
 * Why: a single place that knows the locale set, the default, how each locale
 * maps to a URL path, and how to fetch the right content tree. The static
 * `getContent` keeps page frontmatter trivial and type-safe.
 *
 * Note on auto-detection: the project ships as a STATIC site (no SSR adapter),
 * so per-request `Accept-Language` is unavailable at runtime — server
 * middleware can't do first-visit routing. The sanctioned alternative (plan §7)
 * is a tiny client head script; `firstVisitRedirectScript` provides it as an
 * inline-able string. Manual override + persistence is handled by the language
 * toggle (Phase 3) writing `STORAGE_KEY`.
 */
import type { Locale, SiteContent } from '../content/types';
import { siteEs } from '../content/site.es';
import { siteEn } from '../content/site.en';

/** All supported locales, ES first (it is the default). */
export const LOCALES: readonly Locale[] = ['es', 'en'] as const;

/** Default locale / market (Ecuador). */
export const DEFAULT_LOCALE: Locale = 'es';

/** localStorage key holding the visitor's manual language choice. */
export const STORAGE_KEY = 'nexora_lang';

/** Configured deploy subpath (`/nexora/` on GitHub Pages, `/` on a root domain). */
const RAW_BASE = import.meta.env.BASE_URL || '/';

/**
 * Prefixes a root-relative path with the configured base subpath.
 *
 * Why: under `output: 'static'`, Astro auto-prefixes its own emitted assets with
 * `base`, but NOT hardcoded `href`/`src` strings. This centralizes that join so
 * every internal link (locale routes, favicon, OG image, vCard, sitemap) works
 * whether the site is deployed under `/nexora/` or at a root domain (`/`).
 *
 * @param path - root-relative path (leading slash optional), defaults to `/`.
 * @returns the path prefixed with the normalized base (no double slashes).
 */
export function withBase(path = '/'): string {
  const base = RAW_BASE.replace(/\/+$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}` || '/';
}

const CONTENT: Record<Locale, SiteContent> = {
  es: siteEs,
  en: siteEn,
};

/**
 * Returns the full content tree for a locale.
 * @param locale - target locale.
 * @returns the matching `SiteContent` (typed, locale-complete).
 */
export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale];
}

/**
 * Maps a locale to its base-prefixed root path. ES is served at the base root
 * (`/` or `/nexora/`), EN under `/en/` of that base.
 * @param locale - target locale.
 * @returns the base-aware path prefix for that locale.
 */
export function pathForLocale(locale: Locale): string {
  return withBase(locale === DEFAULT_LOCALE ? '/' : `/${locale}/`);
}

/**
 * Returns the opposite locale — used by the language toggle.
 * @param locale - current locale.
 * @returns the other supported locale.
 */
export function alternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

/**
 * Inline, dependency-free script that runs once on the ES root (`/`) to
 * auto-route a first-time visitor whose browser is not Spanish to `/en/`.
 *
 * It NEVER overrides intent: it bails if the visitor already made a manual
 * choice (`STORAGE_KEY` in localStorage) or arrived with an explicit `?lang=`.
 * A Spanish speaker on an English browser can still switch back and will be
 * remembered. Kept tiny and run as early as possible to avoid a visible flash.
 *
 * @returns JS source to embed via `<script is:inline set:html={...}>`.
 */
export function firstVisitRedirectScript(): string {
  return `(function(){try{var K=${JSON.stringify(STORAGE_KEY)};if(localStorage.getItem(K))return;var q=new URLSearchParams(location.search);if(q.has('lang'))return;var n=(navigator.language||navigator.userLanguage||'es').toLowerCase();if(n.indexOf('es')!==0){location.replace(${JSON.stringify(withBase('/en/'))});}}catch(e){}})();`;
}
