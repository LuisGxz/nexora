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

export interface Hero {
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

/** One service card: icon + title + the pain it removes. No price. */
export interface Service {
  icon: IconKey;
  title: string;
  pain: string;
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
}

/** One step in the 4-step process. `step` is the display index ("01"…). */
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

/** One target industry: icon + label. */
export interface Niche {
  icon: IconKey;
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

export interface About {
  heading: string;
  body: string;
  experience: Experience[];
  products: string[];
  links: AboutLink[];
}

/** A trust pillar / key stat for "Por qué Nexora" (repurposed §07, no prices). */
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
  stickyWhatsapp: string;
  openMenu: string;
  closeMenu: string;
  switchLanguage: string;
  skipToContent: string;
  viewDemo: string;
  faqMoreQuestion: string;
  experienceLabel: string;
  productsLabel: string;
}

/** Headers for every titled section, keyed by section id. */
export interface SectionHeaders {
  services: SectionHeader;
  works: SectionHeader;
  process: SectionHeader;
  niches: SectionHeader;
  about: SectionHeader;
  pillars: SectionHeader;
  faq: SectionHeader;
}

/** The full, locale-complete content tree. */
export interface SiteContent {
  meta: SiteMeta;
  nav: NavItem[];
  sections: SectionHeaders;
  hero: Hero;
  services: Service[];
  works: Work[];
  process: ProcessStep[];
  niches: Niche[];
  about: About;
  pillars: Pillar[];
  faq: FaqItem[];
  contact: Contact;
  footer: Footer;
  ui: UiStrings;
}
