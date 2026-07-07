/**
 * English content (international market).
 *
 * Why: the EN mirror of `site.es.ts`, typed against the same `SiteContent` so
 * the two locales can never drift in shape. NO prices, plans, amounts or tiers.
 * Past employers appear only under `about.experience` (background), never as
 * clients in `works`. Demo URLs come from `site.config.ts` (single source).
 *
 * Voice mirrors the Spanish: owner-facing, pain-first, confident, no hype.
 */
import type { SiteContent } from './types';
import { demoPreviews, demoUrls, social } from '../config/site.config';

export const siteEn: SiteContent = {
  meta: {
    title: 'Nexora · Software Studio | Websites, systems and apps for your business',
    description:
      'Software studio in Guayaquil. Websites, systems and custom apps, built to measure: your landing in days and an exact date for every project.',
    ogAlt: 'Nexora — Software studio in Guayaquil',
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
      heading: 'What we build for your business',
      subheading: 'No generic templates. Every project solves a concrete pain.',
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
      heading: 'Businesses we work with',
      subheading: "If your niche isn't on the list, message me anyway.",
    },
    about: {
      eyebrow: 'About Nexora',
      heading: 'A software house with real experience',
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
    headline: 'Websites, systems and apps for your business, built to measure.',
    subheadline:
      "We're a software studio in Guayaquil. Your landing can be live in days; for systems and apps we give you an exact date in the proposal. Custom-built, with a clear method and visible progress.",
    ctaPrimary: 'Tell me about your project',
    ctaSecondary: 'See our work',
  },

  services: [
    { icon: 'service-web', title: 'Website & landing page', pain: "You're not on Google and your competitors are." },
    { icon: 'service-qr-menu', title: 'Digital QR menu', pain: 'You reprint the menu every time a price changes.' },
    { icon: 'service-booking', title: 'Booking system', pain: 'You lose hours answering "any slots free?".' },
    { icon: 'service-catalog', title: 'Catalog + WhatsApp', pain: 'You sell on Instagram and it\'s a mess.' },
    { icon: 'service-portfolio', title: 'Professional portfolio', pain: "Your work is good, but it doesn't look serious." },
    { icon: 'service-memberships', title: 'Membership dashboard', pain: "You don't know who paid or who's overdue." },
    { icon: 'service-custom-apps', title: 'Custom apps & systems', pain: "You need something no off-the-shelf tool offers." },
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
    { step: '01', title: 'Contact', description: 'Tell me what you need over WhatsApp. No commitment.' },
    { step: '02', title: 'Proposal', description: 'I send a custom proposal with scope and an exact date.' },
    { step: '03', title: 'Development', description: 'I build with visible progress; you review at each milestone.' },
    { step: '04', title: 'Delivery', description: 'I hand it over working, with domain and everything ready to use.' },
  ],

  niches: [
    { icon: 'service-booking', label: 'Barbershops & salons' },
    { icon: 'service-qr-menu', label: 'Restaurants & cafés' },
    { icon: 'service-booking', label: 'Clinics & medical offices' },
    { icon: 'service-memberships', label: 'Gyms & academies' },
    { icon: 'service-catalog', label: 'Shops & boutiques' },
    { icon: 'service-web', label: 'Events' },
    { icon: 'service-custom-apps', label: 'Companies & startups' },
  ],

  about: {
    heading: 'A software house with real experience',
    body:
      'Nexora is a software studio based in Guayaquil, working with businesses worldwide. We build custom websites, systems and apps, with method: clear scope, visible progress, and deliveries that work. Behind it is real experience in banking and product, with years of shipping software in production. Luis leads as principal developer; we work as a studio and talk about "our process".',
    // ⚠️ PENDING: confirm exact roles/periods with the owner. Listed as
    // professional background (where the developer has worked), NOT as clients.
    experience: [
      { company: 'Banco de Machala', role: 'Software development', period: '—' },
      { company: 'Viamatica', role: 'Software development', period: '—' },
      { company: 'Relolink', role: 'Product development', period: '—' },
    ],
    products: ['Faktova', 'Turnia', 'Spektova'],
    links: [
      { label: 'Portfolio', href: social.portfolio, icon: 'ui-github' },
      { label: 'Fiverr', href: social.fiverr, icon: 'ui-external' },
    ],
  },

  pillars: [
    { stat: '+5 years', label: 'building real software' },
    { stat: 'Own products', label: 'Faktova, Turnia and Spektova in production' },
    { stat: 'Fast delivery', label: 'your site in days; systems with an exact date' },
  ],

  faq: [
    {
      question: 'How long does delivery take?',
      answer: 'Most landing pages and sites ship in 3 to 5 days. For larger systems and apps, I give you an exact date in the proposal.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Every project is custom. Message me on WhatsApp with what you need and I\'ll put together a proposal, no commitment.',
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
      answer: 'I handle it for you or we use the one you already have. The domain and all access stay in your name.',
    },
    {
      question: 'How many changes can I request?',
      answer: 'Two rounds of changes included during development. They\'re usually more than enough.',
    },
    {
      question: 'Do you work with businesses outside Ecuador?',
      answer: 'Yes. I work with clients anywhere in the world; we coordinate everything over WhatsApp wherever you are.',
    },
  ],

  contact: {
    heading: 'Tell me about your project',
    subheading: 'Message me on WhatsApp and I reply personally. No endless forms.',
    form: {
      nameLabel: 'Your name',
      businessTypeLabel: 'Business type',
      needLabel: 'What do you need?',
      namePlaceholder: 'e.g. Maria',
      businessTypePlaceholder: 'e.g. Barbershop',
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
    experienceLabel: 'Experience',
    productsLabel: 'Own products',
  },
};
