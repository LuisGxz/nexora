/**
 * JSON-LD del sitio (fase 12 · A2 + A3 + D1 + A5/C5).
 *
 * Por qué existe: la auditoría encontró CERO datos estructurados — el único indicador de
 * "vibecodeado" que el sitio disparaba. Estas funciones son puras (objeto adentro, objeto
 * afuera) para poder fijarlas con `astro check` y leerlas sin abrir un navegador.
 *
 * Reglas que este módulo hace cumplir:
 * - **`ProfessionalService` y no `Organization`** (decisión D1 del 2026-08-13): mismo trabajo,
 *   tipo más específico, con `areaServed` y SIN `PostalAddress` — la regla 6 sigue prohibiendo
 *   una dirección visible; lo que se abre es el área de servicio, no el domicilio.
 * - **Nunca `Review` ni `AggregateRating`** (regla 5): no hay reseñas verificables, y marcarlas
 *   sin tenerlas es sancionable por Google. Que no aparezcan es una propiedad, no un olvido.
 * - **Lo que falta se omite**: ninguna clave viaja con null o cadena vacía.
 */
import { PRIMARY_ORIGIN } from '../config/domain.mjs';
import { brand, social } from '../config/site.config';
import type { FaqItem, ServicePage } from '../content/types';

/** El origen canónico SIEMPRE (aunque el build sea el espejo de GitHub Pages): el schema habla del negocio, no del deploy. */
const ORIGIN = PRIMARY_ORIGIN;

/**
 * La ficha del estudio (A2 · D1): quién es Nexora, dónde sirve y por dónde se le habla.
 *
 * `sameAs` enlaza los perfiles reales del config — es lo que arma el panel de marca y lo que
 * citan los buscadores con IA.
 */
export function professionalServiceJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${ORIGIN}/#studio`,
    name: brand.legalName,
    url: `${ORIGIN}/`,
    logo: `${ORIGIN}/apple-touch-icon.png`,
    email: brand.email,
    areaServed: 'Guayaquil, Ecuador',
    knowsLanguage: ['es', 'en'],
    sameAs: [social.linkedin, social.portfolio, social.fiverr],
  };
}

/** El sitio como entidad (A2): nombre + URL, con sus dos idiomas declarados. */
export function webSiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${ORIGIN}/#website`,
    name: brand.legalName,
    url: `${ORIGIN}/`,
    inLanguage: ['es', 'en'],
    publisher: { '@id': `${ORIGIN}/#studio` },
  };
}

/**
 * Las preguntas frecuentes como datos (A3), compartiendo EXACTAMENTE las cadenas visibles:
 * un schema que dice otra cosa que la página es lo que Google castiga.
 *
 * @param items - Las mismas preguntas del componente, del árbol de contenido del idioma.
 */
export function faqPageJsonLd(items: readonly FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/**
 * Una página de servicio (A5) como `Service` de schema.org. Sin precio — la regla 1 del
 * proyecto también aplica a los datos estructurados.
 *
 * @param page - El contenido de la página, en su idioma.
 * @param url - La URL canónica absoluta de la página.
 */
export function serviceJsonLd(page: ServicePage, url: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.heading,
    description: page.metaDescription,
    url,
    provider: { '@id': `${ORIGIN}/#studio` },
    areaServed: 'Guayaquil, Ecuador',
  };
}

/**
 * Las migas como datos (C5), espejo del rastro visible: posición 1 es el inicio del idioma y
 * la última es la página actual.
 *
 * @param items - Las migas en orden, con su URL absoluta.
 */
export function breadcrumbJsonLd(
  items: readonly { name: string; url: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Serializa JSON-LD para un `<script is:inline set:html>`: el `<` se escapa para que un texto
 * no pueda cerrar el script — mismo criterio que usa Turnia.
 *
 * @param payload - Uno o varios objetos JSON-LD (varios viajan como arreglo).
 */
export function jsonLdString(payload: Record<string, unknown> | Record<string, unknown>[]): string {
  return JSON.stringify(payload).replace(/</g, '\\u003c');
}
