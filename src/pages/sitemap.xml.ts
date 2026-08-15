/**
 * Sitemap endpoint → served at `/sitemap.xml` (reescrito en fase 12 · A1 + A4 + A5).
 *
 * Sigue hecho a mano y no con `@astrojs/sitemap`, por la misma razón de siempre: las páginas
 * bilingües viajan como pares `hreflang` explícitos (es / en / x-default), que es la señal
 * correcta y ninguna integración la emite así de limpia.
 *
 * Lo que cambió con la fase 12:
 * - **`<lastmod>` en todo** (A1): `changefreq`/`priority` Google los ignora; `lastmod` SÍ lo usa
 *   para decidir si vale re-rastrear. Es la fecha del BUILD — el módulo es `prerender`, así que
 *   `new Date()` corre una vez al compilar, no por petición — porque en un sitio estático todo
 *   redeploy ES el momento en que algo pudo cambiar.
 * - **Las páginas de servicio** (A5) y **la privacidad**, cada una con su par de idiomas.
 * - **Los 5 demos** (A4): salieron de `noindex` y entran acá — cinco URLs de contenido real que
 *   eran invisibles. Sin `hreflang`: cada demo es una pieza única en español.
 *
 * La página de gracias NO entra: es `noindex` (una meta de medición, no contenido).
 */
import type { APIRoute } from 'astro';
import { LOCALES, getContent, pathForLocale, withBase, DEFAULT_LOCALE } from '../lib/i18n';
import { demoUrls } from '../config/site.config';

export const prerender = true;

/** La fecha del build, una sola vez para todo el archivo (YYYY-MM-DD). */
const LASTMOD = new Date().toISOString().slice(0, 10);

/** Un par bilingüe: el path ES y el EN de la misma página. */
interface BilingualEntry {
  es: string;
  en: string;
}

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://nexora.example')).origin;
  const abs = (path: string) => `${origin}${withBase(path)}`;

  // Las portadas + las páginas con espejo. Los slugs de servicio salen del contenido: agregar
  // la quinta página de servicio la mete acá sola.
  const pairs: BilingualEntry[] = [
    { es: '/', en: '/en/' },
    { es: '/privacidad/', en: '/en/privacy/' },
    ...getContent('es').servicePages.map((page) => ({
      es: `/servicios/${page.slug}/`,
      en: `/en/services/${page.altSlug}/`,
    })),
  ];

  const pairXml = pairs
    .map((pair) => {
      const alternates = [
        `    <xhtml:link rel="alternate" hreflang="es" href="${abs(pair.es)}"/>`,
        `    <xhtml:link rel="alternate" hreflang="en" href="${abs(pair.en)}"/>`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pair[DEFAULT_LOCALE])}"/>`,
      ].join('\n');
      return LOCALES.map(
        (locale) => `  <url>
    <loc>${abs(pair[locale])}</loc>
    <lastmod>${LASTMOD}</lastmod>
${alternates}
  </url>`,
      ).join('\n');
    })
    .join('\n');

  const demoXml = Object.values(demoUrls)
    .map(
      (path) => `  <url>
    <loc>${origin}${path}</loc>
    <lastmod>${LASTMOD}</lastmod>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pairXml}
${demoXml}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
