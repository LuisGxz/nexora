/**
 * `llms.txt` endpoint (fase 12 · A6) → served at `/llms.txt`.
 *
 * Qué es: la nota de texto plano que los buscadores con IA leen para saber qué es este sitio y
 * adónde mandar a la gente — cada vez más tráfico llega por ahí. Es un endpoint y no un archivo
 * en `public/` por la regla de siempre: el nombre, el dominio y el correo son variables de
 * config, y un archivo estático los dejaría hardcodeados.
 *
 * Solo afirmaciones verdaderas: qué hace el estudio, sus productos propios y por dónde se le
 * habla. Nada de clientes ni reseñas que no existen.
 */
import type { APIRoute } from 'astro';
import { brand, productUrls } from '../config/site.config';
import { withBase } from '../lib/i18n';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://nexora.example')).origin;
  const abs = (path: string) => `${origin}${withBase(path)}`;

  const body = `# ${brand.legalName}

> Estudio de software en ${brand.location}. Páginas web, sistemas y aplicaciones a la medida,
> para clientes de cualquier parte del mundo, en español y en inglés.

## Qué hacemos

- Webs y landings profesionales: ${abs('/servicios/web-profesional/')}
- Sistemas de reservas online: ${abs('/servicios/sistema-de-reservas/')}
- Menús digitales QR: ${abs('/servicios/menu-digital-qr/')}
- Apps y sistemas a medida: ${abs('/servicios/software-a-medida/')}

## Productos propios

- Turnia (reservas y agenda): ${productUrls.turnia}
- Spektova (comercio electrónico): ${productUrls.spektova}

## Páginas

- Inicio (ES): ${abs('/')}
- Home (EN): ${abs('/en/')}
- Privacidad: ${abs('/privacidad/')}

## Contacto

- Correo: ${brand.email}
- El formulario del sitio abre un chat de WhatsApp con el mensaje ya armado.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
