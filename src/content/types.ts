/**
 * Content contract for the Nexora landing.
 *
 * Why: this is the single shape both locale files (`site.es.ts` / `site.en.ts`)
 * must satisfy, so the compiler guarantees ES and EN never drift. Every string
 * the site renders lives behind this interface — components read from it and
 * hardcode nothing. Adding a service / work / FAQ is one entry in an array.
 *
 * It mirrors the model in `nexora-prompt-claude-code.md` (hero, services,
 * works, process, niches, about, pillars, faq, contact) and adds
 * the surrounding chrome (meta, nav, per-section eyebrows/headings, footer, ui
 * microcopy) so that copy is centralized too — never inlined in components.
 *
 * NO pricing anywhere by design: there is no price/plan/amount/tier field.
 */

/** Supported locales. ES is the default market (Ecuador); EN is international. */
export type Locale = 'es' | 'en';

/**
 * Icon key — the basename of an SVG in `src/assets/icons/` (without extension),
 * e.g. `'service-web'`, `'ui-whatsapp'`. Components resolve it to the asset.
 * Typed as a union so a typo fails the build instead of rendering a blank icon.
 */
export type IconKey =
  | 'service-web'
  | 'service-qr-menu'
  | 'service-booking'
  | 'service-catalog'
  | 'service-portfolio'
  | 'service-memberships'
  | 'service-custom-apps'
  | 'ui-arrow'
  | 'ui-check'
  | 'ui-language'
  | 'ui-menu'
  | 'ui-whatsapp'
  | 'ui-github'
  | 'ui-external';

/** Per-page SEO metadata (title/description/OG); consumed by BaseLayout. */
export interface SiteMeta {
  title: string;
  description: string;
  ogAlt: string;
}

/** A navigation entry: visible label + in-page anchor id (without `#`). */
export interface NavItem {
  label: string;
  anchor: string;
}

/** Eyebrow + heading (+ optional lead) shown atop a section. */
export interface SectionHeader {
  eyebrow: string;
  heading: string;
  subheading?: string;
}

/**
 * Above-the-fold block. `eyebrow` is the small studio label above the headline;
 * it is deliberately separate from `footer.tagline` so the footer can carry the
 * city while the rest of the page stays location-free.
 */
export interface Hero {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /**
   * La tarjeta de la propuesta (rediseño 2026-10-01): rótulo, título y la lista de lo que
   * se entrega por escrito. Es la prueba que acompaña al titular — cada renglón debe ser
   * algo que la propuesta real contiene.
   */
  proposalEyebrow: string;
  proposalHeading: string;
  proposalItems: string[];
}

/**
 * One service card: title + what the service is.
 *
 * `benefit` describes what Nexora delivers, never the visitor's problem and never a
 * comparison with an alternative — forward-looking by editorial rule. No price.
 */
export interface Service {
  title: string;
  benefit: string;
  /**
   * Slug de la página de servicio propia (fase 12 · A5), cuando existe. La tarjeta de la landing
   * se vuelve un enlace "ver más"; sin slug, la tarjeta queda como siempre. El slug es el del
   * idioma del árbol: `web-profesional` en ES, `professional-website` en EN.
   */
  pageSlug?: string;
}

/**
 * One work/demo card — ONLY Nexora's own work (live demos + freelance).
 * `url` links to a live demo when one exists; `image` is an optional preview.
 * Never list past employers here (those belong in `about.experience`).
 */
export interface Work {
  title: string;
  clientType: string;
  result: string;
  url?: string;
  image?: string;
  /** Estado junto al tipo (p. ej. «En producción») para un producto propio en operación. */
  badge?: string;
  /** Texto del enlace cuando no es un demo (p. ej. «Ver proyecto»); por omisión `ui.viewDemo`. */
  linkLabel?: string;
}

/** La última casilla de servicios: el llamado para lo que no está en la lista. */
export interface ServicesCta {
  heading: string;
  label: string;
}

/** One step in the 4-step process. `step` is the display index ("01"…). */
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

/** One target industry. El orden del arreglo es editorial: de mayor a menor escala. */
export interface Niche {
  label: string;
}

/** A previous employer, framed as professional background — not a client. */
export interface Experience {
  company: string;
  role: string;
  period: string;
}

/**
 * An external profile link shown in About (portfolio, Fiverr, …) so visitors
 * can see who builds Nexora. `href` comes from `site.config.ts` (single source).
 */
export interface AboutLink {
  label: string;
  href: string;
  icon: IconKey;
}

/**
 * "Sobre Nexora" content. Framed as a studio — never a named individual — while
 * `experience` carries the real professional background that backs it.
 *
 * Sin productos propios desde el rediseño del 2026-10-01: Turnia se muestra como
 * un proyecto más en `works`, y lo que no está en operación no se anuncia.
 */
export interface About {
  heading: string;
  body: string;
  experience: Experience[];
  links: AboutLink[];
}

/** A trust pillar / key stat, shown as the strip under the hero (no prices). */
export interface Pillar {
  stat: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Labels for the quote-request form fields and submit button. */
export interface ContactForm {
  nameLabel: string;
  businessTypeLabel: string;
  needLabel: string;
  namePlaceholder: string;
  businessTypePlaceholder: string;
  needPlaceholder: string;
  submitLabel: string;
}

/**
 * Contact section content.
 * `prefillTemplate` is the WhatsApp message body for the quote form; tokens
 * `{name}`, `{businessType}`, `{need}` are replaced client-side at submit.
 * `whatsappPrefill` is the message for the standalone "message us" button.
 */
export interface Contact {
  heading: string;
  subheading: string;
  form: ContactForm;
  whatsappCtaLabel: string;
  /** El segundo canal: todo punto de contacto ofrece WhatsApp y correo. */
  emailCtaLabel: string;
  /** Título y línea de la franja de canales que cierra la sección de proyectos. */
  channelsHeading: string;
  channelsBody: string;
  whatsappPrefill: string;
  vcardLabel: string;
  prefillTemplate: string;
}

/** Footer copy. */
export interface Footer {
  tagline: string;
  rights: string;
  localSignal: string;
}

/** Small, reused interface strings (CTAs, toggles, a11y labels). */
export interface UiStrings {
  openMenu: string;
  closeMenu: string;
  switchLanguage: string;
  skipToContent: string;
  viewDemo: string;
  faqMoreQuestion: string;
  experienceLabel: string;
  /** Fase 12 · el "ver más" de una tarjeta de servicio con página propia (A5). */
  viewService: string;
  /** Fase 12 · la primera miga (C5) y el aria del bloque de migas. */
  breadcrumbHome: string;
  breadcrumbsLabel: string;
  /** Fase 12 · el enlace del footer a la política (decisión D). */
  privacyLink: string;
}

/** Headers for every titled section, keyed by section id. */
export interface SectionHeaders {
  services: SectionHeader;
  works: SectionHeader;
  process: SectionHeader;
  niches: SectionHeader;
  about: SectionHeader;
  faq: SectionHeader;
}

/**
 * El caso de una página de servicio (fase 12 · C4): problema → decisión → resultado, con el
 * demo enlazado al final. Es lo que convierte un demo en contenido — el demo muestra QUÉ se
 * construyó; el caso cuenta QUÉ problema resolvió.
 */
export interface CaseStudy {
  heading: string;
  problem: string;
  decision: string;
  result: string;
  demoLabel: string;
  demoUrl: string;
}

/**
 * Una página de servicio (fase 12 · A5): una URL por intención de búsqueda.
 *
 * Los slugs van EN EL IDIOMA de su árbol (`web-profesional` / `professional-website`): estas
 * páginas existen para rankear la consulta tal como se escribe, y un slug en inglés en la
 * página española regala esa señal. `esSlug`/`enSlug` viajan en las dos para que cada página
 * sepa su alternate hreflang sin adivinar.
 */
export interface ServicePage {
  slug: string;
  /** El slug del ESPEJO en el otro idioma, para el hreflang y el toggle. */
  altSlug: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  includesHeading: string;
  includes: string[];
  caseStudy: CaseStudy;
  faqHeading: string;
  faq: FaqItem[];
  ctaHeading: string;
  ctaLabel: string;
  /** El prefill de WhatsApp propio del servicio: llega diciendo qué quiere. */
  whatsappPrefill: string;
}

/** La página de gracias (fase 12 · C3): el momento medible de la conversión. */
export interface ThanksPage {
  metaTitle: string;
  heading: string;
  body: string;
  backLabel: string;
}

/** La política de privacidad (fase 12 · decisión D): GA4 no recolecta sin política publicada. */
export interface PrivacyPage {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  updated: string;
  /** Secciones tituladas; el cuerpo admite varios párrafos. */
  sections: { heading: string; body: string[] }[];
  contactLine: string;
}

/** La 404 propia (fase 12 · B1): con marca y salida, no un callejón. */
export interface NotFoundPage {
  heading: string;
  body: string;
  backLabel: string;
}

/** The full, locale-complete content tree. */
export interface SiteContent {
  meta: SiteMeta;
  nav: NavItem[];
  sections: SectionHeaders;
  hero: Hero;
  services: Service[];
  servicesCta: ServicesCta;
  works: Work[];
  process: ProcessStep[];
  niches: Niche[];
  about: About;
  pillars: Pillar[];
  faq: FaqItem[];
  contact: Contact;
  footer: Footer;
  ui: UiStrings;
  /** Fase 12: las páginas de servicio (A5) con sus casos (C4). */
  servicePages: ServicePage[];
  thanks: ThanksPage;
  privacy: PrivacyPage;
  notFound: NotFoundPage;
}
