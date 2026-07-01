/**
 * robots.txt endpoint → served at `/robots.txt`.
 *
 * Why an endpoint: it references the sitemap by absolute URL, which must follow
 * the configured domain (`Astro.site`) rather than a hardcoded host that would
 * rot when the real domain is wired in the final phase. Allows all crawlers —
 * this is a public marketing page.
 */
import type { APIRoute } from 'astro';
import { withBase } from '../lib/i18n';

export const prerender = true;

/**
 * Serves robots.txt pointing crawlers at the generated sitemap.
 * @param context - Astro endpoint context (provides `site`).
 * @returns a `text/plain` robots response.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://nexora.example')).origin;
  const body = `User-agent: *
Allow: /

Sitemap: ${origin}${withBase('/sitemap.xml')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
