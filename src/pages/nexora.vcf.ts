/**
 * vCard endpoint → served at `/nexora.vcf`.
 *
 * Why an endpoint, not a static file: the card must stay in lockstep with
 * `site.config.ts` (the WhatsApp number, email, url, location) — a single source
 * of truth — so the "Guardar contacto" link in the Contact section always
 * matches the number behind the WhatsApp buttons. Prerendered at build under
 * `output: 'static'`.
 *
 * Faceless by brand rule: no PHOTO field. vCard 3.0 with CRLF line endings as
 * the spec requires; the TEL is the E.164 number with a leading `+`.
 */
import type { APIRoute } from 'astro';
import { brand, whatsappNumber } from '../config/site.config';

export const prerender = true;

/**
 * Serves the Nexora contact card.
 * @returns a `text/vcard` response built from the site config.
 */
export const GET: APIRoute = () => {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${brand.legalName};;;`,
    `FN:${brand.legalName}`,
    `ORG:${brand.legalName}`,
    `TITLE:${brand.tagline}`,
    `TEL;TYPE=CELL,VOICE:+${whatsappNumber}`,
    `EMAIL;TYPE=INTERNET:${brand.email}`,
    `URL:${brand.url}`,
    `ADR;TYPE=WORK:;;;${brand.location};;;`,
    'END:VCARD',
  ];

  return new Response(lines.join('\r\n') + '\r\n', {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="nexora.vcf"',
    },
  });
};
