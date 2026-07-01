/**
 * Sitemap endpoint → served at `/sitemap.xml`.
 *
 * Why hand-written (not `@astrojs/sitemap`): only two routes exist and they are
 * locale alternates of one page, so we emit them with explicit `xhtml:link`
 * `hreflang` pairs (es / en / x-default) — the cleanest correct signal for a
 * bilingual single page, with no extra dependency. URLs are absolute, built from
 * `Astro.site` so they follow the configured domain.
 */
import type { APIRoute } from 'astro';
import { LOCALES, pathForLocale, DEFAULT_LOCALE } from '../lib/i18n';

export const prerender = true;

/**
 * Emits the sitemap with hreflang alternates for every locale route.
 * @param context - Astro endpoint context (provides `site`).
 * @returns an `application/xml` sitemap response.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://nexora.example')).origin;
  const abs = (locale: (typeof LOCALES)[number]) => `${origin}${pathForLocale(locale)}`;

  const alternates = LOCALES.map(
    (locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${abs(locale)}"/>`,
  )
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(DEFAULT_LOCALE)}"/>`)
    .join('\n');

  const urls = LOCALES.map(
    (locale) => `  <url>
    <loc>${abs(locale)}</loc>
${alternates}
  </url>`,
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
