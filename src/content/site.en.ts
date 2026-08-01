/**
 * English content (international market).
 *
 * Why: the EN mirror of `site.es.ts`, typed against the same `SiteContent` so
 * the two locales can never drift in shape. NO prices, plans, amounts or tiers.
 * Past employers appear only under `about.experience` (background), never as
 * clients in `works`. Demo URLs come from `site.config.ts` (single source).
 *
 * Voice mirrors the Spanish: outcome-first, spoken as a studio ("we" — never
 * "I", never a named person), confident, no hype.
 *
 * Audience is deliberately open: the reader may be an individual, a freelancer
 * or a company, so no string assumes "your business". Address the reader as
 * "you" and talk about the project, never about what they are — the mixed
 * audience is signalled implicitly (via `niches`), never stated.
 *
 * The city appears ONLY in `footer.tagline`; no other string says where Nexora
 * is based.
 */
import type { SiteContent } from './types';
import { demoPreviews, demoUrls, productUrls, social } from '../config/site.config';

export const siteEn: SiteContent = {
  meta: {
    title: 'Nexora · Software Studio | Websites, systems and apps built to measure',
    description:
      'Software studio. Websites, systems and custom apps, built to measure: your landing in days and an exact date for every project.',
    ogAlt: 'Nexora — Software studio',
  },

  nav: [
    { label: 'Services', anchor: 'servicios' },
    { label: 'Work', anchor: 'demos' },
    { label: 'Process', anchor: 'proceso' },
    { label: 'About', anchor: 'estudio' },
    { label: 'FAQ', anchor: 'faq' },
    { label: 'Contact', anchor: 'contacto' },
  ],

  sections: {
    services: {
      eyebrow: 'Services',
      heading: 'What we build for you',
      subheading: 'No generic templates. Every project is built around a concrete goal.',
    },
    works: {
      eyebrow: 'Work',
      heading: 'Live demos and real projects',
      subheading: "Nexora's own work. See it running.",
    },
    process: {
      eyebrow: 'Process',
      heading: 'How we work',
      subheading: 'A clear method, from first idea to delivery.',
    },
    niches: {
      eyebrow: "Who it's for",
      heading: 'Who we work with',
      subheading: "If you don't find yours on the list, message us anyway.",
    },
    about: {
      eyebrow: 'About Nexora',
      heading: 'The team behind every project',
    },
    pillars: {
      eyebrow: 'Why Nexora',
      heading: 'Why trust us',
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'Frequently asked questions',
    },
  },

  hero: {
    eyebrow: 'Software studio',
    headline: 'Websites, systems and apps, built to your measure.',
    subheadline:
      "We're a software studio building custom websites, systems and apps. Your landing can be live in days; for systems and apps we give you an exact date in the proposal, with a clear method and visible progress.",
    ctaPrimary: 'Tell us about your project',
    ctaSecondary: 'See our work',
  },

  services: [
    {
      icon: 'service-web',
      title: 'Website & landing page',
      benefit: 'We lift your presence in Google searches with a fast, clear site built to turn visits into customers.',
    },
    {
      icon: 'service-qr-menu',
      title: 'Digital QR menu',
      benefit: 'Your menu lives online and updates instantly: change a price and customers see it on the next scan.',
    },
    {
      icon: 'service-booking',
      title: 'Booking system',
      benefit: 'A system that manages your slots automatically and takes bookings 24/7, without you answering the phone.',
    },
    {
      icon: 'service-catalog',
      title: 'Catalog + WhatsApp',
      benefit: 'We put your whole catalog behind a single link and send every order straight to your WhatsApp.',
    },
    {
      icon: 'service-portfolio',
      title: 'Professional portfolio',
      benefit: 'We present your work at the level it deserves, so winning new clients takes less effort.',
    },
    {
      icon: 'service-memberships',
      title: 'Membership dashboard',
      benefit: 'Track payments, renewals and member access from a single dashboard, in real time.',
    },
    {
      icon: 'service-custom-apps',
      title: 'Custom apps & systems',
      benefit: 'We design and build the exact system your operation needs, fitted to the way you already work.',
    },
  ],

  works: [
    {
      title: 'Barbershop with online booking',
      clientType: 'Barbershop',
      result: 'Bookings 24/7 without answering the phone.',
      url: demoUrls.barbershop,
      image: demoPreviews.barbershop,
    },
    {
      title: 'Digital QR menu for a restaurant',
      clientType: 'Restaurant',
      result: 'A menu you update without reprinting anything.',
      url: demoUrls.restaurant,
      image: demoPreviews.restaurant,
    },
    {
      title: 'Scheduling for a medical office',
      clientType: 'Medical office',
      result: 'Patients book their own appointments.',
      url: demoUrls.clinic,
      image: demoPreviews.clinic,
    },
    {
      title: 'Landing page for an event',
      clientType: 'Event organizer',
      result: 'Sign-ups and confirmations in a single link.',
      url: demoUrls.event,
      image: demoPreviews.event,
    },
    {
      title: 'Corporate site for an SMB',
      clientType: 'Services company',
      result: 'A professional presence on Google in days.',
      url: demoUrls.corporate,
      image: demoPreviews.corporate,
    },
  ],

  process: [
    { step: '01', title: 'Contact', description: 'You get in touch with us and share your requirements.' },
    { step: '02', title: 'Proposal', description: 'We prepare a proposal with detailed scope and an exact delivery date.' },
    { step: '03', title: 'Development', description: 'We build with visible progress and a review with you at every milestone.' },
    { step: '04', title: 'Delivery', description: 'We hand the project over working, with domain and access in your name.' },
  ],

  niches: [
    { icon: 'service-booking', label: 'Barbershops & salons' },
    { icon: 'service-qr-menu', label: 'Restaurants & cafés' },
    { icon: 'service-booking', label: 'Clinics & medical offices' },
    { icon: 'service-memberships', label: 'Gyms & academies' },
    { icon: 'service-catalog', label: 'Shops & boutiques' },
    { icon: 'service-web', label: 'Events' },
    { icon: 'service-portfolio', label: 'Independent professionals' },
    { icon: 'service-custom-apps', label: 'Companies & startups' },
  ],

  about: {
    heading: 'The team behind every project',
    body:
      'Nexora is a software studio working with clients anywhere in the world. We build custom websites, systems and apps with a clear method: defined scope, visible progress, and deliveries that work. Our team brings extensive experience across the software industry — banking, product, and software running in production — and that track record is what backs every project.',
    // Real professional background of the team, NOT Nexora clients.
    // Ordered most recent first.
    experience: [
      { company: 'Fiverr', role: 'Freelance development', period: '2021 — present (5 years)' },
      { company: 'Relolink', role: 'Full-stack development', period: 'Apr 2024 — present' },
      { company: 'Banco de Machala', role: 'Software architecture', period: 'Aug 2023 — Apr 2024' },
      { company: 'Viamatica', role: 'Software engineering', period: 'Feb 2021 — Apr 2024' },
    ],
    productsIntro: 'Software we design, build and run ourselves.',
    // Faktova has no public site yet: it ships without `url` and with a `status`,
    // so the card explains the missing link instead of dropping the product.
    products: [
      {
        name: 'Turnia',
        description: 'Booking and scheduling app we deploy for anyone who works by appointment.',
        url: productUrls.turnia,
      },
      {
        name: 'Spektova',
        description: 'E-commerce platform for selling online, with catalog and orders.',
        url: productUrls.spektova,
      },
      {
        name: 'Faktova',
        description: 'Internal invoicing system, focused on nationwide operations.',
        status: 'In development',
      },
    ],
    links: [
      { label: 'Portfolio', href: social.portfolio, icon: 'ui-github' },
      { label: 'LinkedIn', href: social.linkedin, icon: 'ui-external' },
      { label: 'Fiverr', href: social.fiverr, icon: 'ui-external' },
    ],
  },

  pillars: [
    { stat: '+5 years', label: 'of team experience in software development' },
    { stat: 'Own products', label: 'Turnia and Spektova in production' },
    { stat: 'Fast delivery', label: 'your site in days; systems with an exact date' },
  ],

  faq: [
    {
      question: 'How long does delivery take?',
      answer: 'Most landing pages and sites ship in 3 to 5 days. For larger systems and apps, we give you an exact date in the proposal.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Every project is custom. Get in touch on WhatsApp with your requirements and we put together a proposal.',
    },
    {
      question: 'How do payments work?',
      answer: 'Half to start and half before launch. No surprises.',
    },
    {
      question: 'Is maintenance included?',
      answer: 'The first month of adjustments is included. After that you can add monthly maintenance if you need it.',
    },
    {
      question: 'Who provides the domain?',
      answer: 'We handle it for you or we use the one you already have. The domain and all access stay in your name.',
    },
    {
      question: 'How many changes can I request?',
      answer: 'Two rounds of changes included during development. They\'re usually more than enough.',
    },
    {
      question: 'Do you work with clients in other countries?',
      answer: 'Yes. We work with clients anywhere in the world and coordinate everything over WhatsApp, wherever you are.',
    },
  ],

  contact: {
    heading: 'Tell us about your project',
    subheading: 'Get in touch on WhatsApp with your requirements and we reply shortly.',
    form: {
      nameLabel: 'Name',
      businessTypeLabel: 'What do you do?',
      needLabel: 'What do you need?',
      namePlaceholder: 'Who are we speaking with?',
      businessTypePlaceholder: 'e.g. Barbershop, consultancy, personal project',
      needPlaceholder: 'e.g. A website with online booking',
      submitLabel: 'Send on WhatsApp',
    },
    whatsappCtaLabel: 'Message us on WhatsApp',
    whatsappPrefill: "Hi Nexora, I'd like info about a project.",
    vcardLabel: 'Save contact',
    prefillTemplate: 'Hi, I\'m {name} ({businessType}). I need: {need}',
  },

  footer: {
    tagline: 'Software studio · Guayaquil, Ecuador',
    rights: '© 2026 Nexora Software. All rights reserved.',
    localSignal: 'Invoicing available (Ecuador RUC).',
  },

  ui: {
    stickyWhatsapp: 'WhatsApp',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Switch to Spanish',
    skipToContent: 'Skip to content',
    viewDemo: 'View demo',
    faqMoreQuestion: 'Another question?',
    experienceLabel: 'Team background',
    productsLabel: 'Own products',
  },
};
