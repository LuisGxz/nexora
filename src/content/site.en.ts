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
      pageSlug: 'professional-website',
    },
    {
      icon: 'service-qr-menu',
      title: 'Digital QR menu',
      benefit: 'Your menu lives online and updates instantly: change a price and customers see it on the next scan.',
      pageSlug: 'qr-digital-menu',
    },
    {
      icon: 'service-booking',
      title: 'Booking system',
      benefit: 'A system that manages your slots automatically and takes bookings 24/7, without you answering the phone.',
      pageSlug: 'booking-system',
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
      pageSlug: 'custom-software',
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
    // C1 (fase 12): promesa concreta, espejo de site.es.ts.
    subheading: 'Get in touch on WhatsApp with your requirements and we reply within 24 business hours.',
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
    viewService: 'See service',
    breadcrumbHome: 'Home',
    breadcrumbsLabel: 'You are here',
    privacyLink: 'Privacy',
  },

  // ── Fase 12 · A5 + C4 · Service pages, each with its case study ───────────────
  servicePages: [
    {
      slug: 'professional-website',
      altSlug: 'web-profesional',
      metaTitle: 'Professional website design | Nexora',
      metaDescription:
        'Professional website design and development: fast, clear sites built to turn visits into customers. Your website ready in days, with the domain in your name.',
      heading: 'A professional website that works for you',
      intro:
        'A fast, clear site is the difference between existing on Google and actually being found. We design and build custom websites and landing pages — no generic templates — made so whoever visits understands what you do and reaches out.',
      includesHeading: "What's included",
      includes: [
        'Custom design, aligned with your identity and your goal.',
        'Search-ready from day one: titles, descriptions and structured data.',
        'Fast loading and a design that works on phones and desktops alike.',
        'Domain and access in your name, always.',
        'One month of adjustments included after launch.',
      ],
      caseStudy: {
        heading: 'A case: a professional presence for an SMB',
        problem:
          "A services company didn't show up on Google: its only presence was a social media page, and potential clients searching its name found nothing that inspired trust.",
        decision:
          'We built a clear corporate site: what the company does, for whom, and how to reach it — with the technical structure Google expects and nothing in the way of the answer.',
        result:
          'A professional online presence in days, ready to surface for brand searches and to back every quote with a serious link.',
        demoLabel: 'See the corporate site demo',
        demoUrl: demoUrls.corporate,
      },
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'How long does a website take?',
          answer: 'Most landing pages and sites ship in 3 to 5 days. If your project needs more pages or integrations, we give you an exact date in the proposal.',
        },
        {
          question: 'Can I update it myself afterwards?',
          answer: 'Yes. We deliver the site ready for you to request changes or make them yourself; the first month of adjustments is included.',
        },
        {
          question: 'Does it include domain and hosting?',
          answer: 'We manage both for you or use the ones you already have. Wherever they live, the access is yours.',
        },
      ],
      ctaHeading: 'Shall we talk about your website?',
      ctaLabel: 'Quote my website',
      whatsappPrefill: 'Hi Nexora, I want a professional website.',
    },
    {
      slug: 'booking-system',
      altSlug: 'sistema-de-reservas',
      metaTitle: 'Online booking system | Nexora',
      metaDescription:
        'Online booking system for appointments: your customers book on their own 24/7, with automatic confirmations and reminders. No more answering the phone.',
      heading: 'Online bookings that handle themselves',
      intro:
        'Every phone call to schedule an appointment is time taken away from the person in the chair. A booking system takes appointments at any hour, confirms on its own and reminds on its own — and whoever books only ever sees the slots that are truly free.',
      includesHeading: "What's included",
      includes: [
        'Your own booking page: service, professional and time — no accounts or downloads required.',
        'Automatic confirmations and reminders by email.',
        'A manageable diary: hours, services and team run from one dashboard.',
        'No double bookings: the system guarantees the same slot is never sold twice.',
        'Backed by Turnia, our own booking product running in production.',
      ],
      caseStudy: {
        heading: 'A case: the barbershop that stopped answering the phone',
        problem:
          'A barbershop lost bookings every time the team was busy cutting: the phone rang, nobody answered, and that appointment went somewhere else.',
        decision:
          'We published its online booking page: customers pick barber, service and time from their phone, and the diary is managed from one simple dashboard.',
        result:
          'Bookings coming in 24/7 without interrupting the work, and a diary that fills itself — outside opening hours too.',
        demoLabel: 'See the barbershop booking demo',
        demoUrl: demoUrls.barbershop,
      },
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'Do my customers need to create an account?',
          answer: 'No. They book with their name and phone, and get a confirmation email with everything they need to change or cancel their appointment.',
        },
        {
          question: 'Does it work for clinics, spas or gyms?',
          answer: 'Yes. It fits any appointment-based operation: barbershops, medical offices, spas, academies and more.',
        },
        {
          question: 'What if two people want the same slot?',
          answer: 'The system prevents it: the moment someone takes a slot, it stops being available to everyone else.',
        },
      ],
      ctaHeading: 'Want your diary filling itself this month?',
      ctaLabel: 'Quote my booking system',
      whatsappPrefill: 'Hi Nexora, I want an online booking system.',
    },
    {
      slug: 'qr-digital-menu',
      altSlug: 'menu-digital-qr',
      metaTitle: 'Digital QR menu for restaurants | Nexora',
      metaDescription:
        'Digital menu with QR code: your menu online, always current, nothing to reprint. Change a dish or a price and it shows instantly.',
      heading: 'Your menu, always current — nothing to reprint',
      intro:
        "Reprinting the menu over a price change is paying twice for the same mistake. With a digital QR menu the menu lives online: it's scanned from the table, loads fast, and any change is published instantly.",
      includesHeading: "What's included",
      includes: [
        'An online menu with your identity: categories, photos, prices and descriptions.',
        'A QR code ready to print for tables, counter or packaging.',
        'Instant updates: change a dish and it shows on the next scan.',
        'Fast loading built for phones and for the signal inside a venue.',
      ],
      caseStudy: {
        heading: 'A case: the restaurant that stopped reprinting',
        problem:
          'A restaurant adjusted prices and dishes every season, and every adjustment meant reprinting the full set of menus — with the cost and the waiting days that come with it.',
        decision:
          'We moved the menu to a digital QR menu: one online source, manageable without technical skills, with the photos and ordering the venue already used.',
        result:
          'Changes published in minutes and zero reprints since: the menu at the table always matches the one in the kitchen.',
        demoLabel: 'See the QR menu demo',
        demoUrl: demoUrls.restaurant,
      },
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'Can I change prices and dishes myself?',
          answer: 'Yes. The menu is managed from a simple panel; change what you need and it publishes instantly.',
        },
        {
          question: 'Does it work with poor signal inside the venue?',
          answer: 'The menu is optimized to load fast even on slow connections — the typical case inside a venue.',
        },
        {
          question: 'Does it also work for cafés or food trucks?',
          answer: 'Yes. Any business with a menu or product catalog can use it — the QR goes wherever your customer is.',
        },
      ],
      ctaHeading: 'Shall we keep the menu always current?',
      ctaLabel: 'Quote my digital menu',
      whatsappPrefill: 'Hi Nexora, I want a digital QR menu.',
    },
    {
      slug: 'custom-software',
      altSlug: 'software-a-medida',
      metaTitle: 'Custom software: apps & systems | Nexora',
      metaDescription:
        'Custom software development: systems, dashboards and applications built around your operation, with a defined scope and an exact delivery date.',
      heading: 'The exact system your operation needs',
      intro:
        "When spreadsheets and generic tools fall short, the next step isn't adapting to someone else's software: it's building your own. We design and build systems, dashboards and applications around the way you already work.",
      includesHeading: "What's included",
      includes: [
        'Mapping the real process: we understand the operation before proposing screens.',
        'A proposal with a detailed scope and an exact delivery date.',
        'Development with visible progress and a review with you at every milestone.',
        'Delivered working, with access and code in your name.',
        'The experience of our own products — Turnia and Spektova — running in production.',
      ],
      caseStudy: {
        heading: "A case: the medical office's diary",
        problem:
          'A medical office coordinated appointments by phone and notebook: unfilled gaps, patients with no reminder, and a diary only one person knew how to read.',
        decision:
          "We built an online diary shaped around the office's flow: patients book on their own, the team sees the day at a glance, and reminders go out without anyone sending them.",
        result:
          'Fewer no-shows, a diary the whole team can read, and a front desk that welcomes patients instead of chasing them.',
        demoLabel: 'See the medical office demo',
        demoUrl: demoUrls.clinic,
      },
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'How do you know how long it will take?',
          answer: "First we understand the scope; then we write it into a proposal with an exact date. Without a defined scope we don't promise dates — which is why we keep them.",
        },
        {
          question: 'Can I start small?',
          answer: 'Yes, and it is usually the right call: a first module that solves the most expensive pain, then grow from there with the system already in use.',
        },
        {
          question: 'Does the code stay in my name?',
          answer: 'Yes. Code, domain and access stay in your name — the project is yours, on paper too.',
        },
      ],
      ctaHeading: 'Shall we talk about your operation?',
      ctaLabel: 'Quote my system',
      whatsappPrefill: 'Hi Nexora, I need a custom system.',
    },
  ],

  // ── Fase 12 · C3 · Thank-you page ─────────────────────────────────────────────
  thanks: {
    metaTitle: 'Thank you | Nexora',
    heading: 'Thanks for reaching out!',
    body:
      'Your message is on its way via WhatsApp. We reply within 24 business hours — in the meantime, feel free to keep browsing our work.',
    backLabel: 'Back to home',
  },

  // ── Fase 12 · decisión D · Privacy policy ─────────────────────────────────────
  privacy: {
    metaTitle: 'Privacy policy | Nexora',
    metaDescription:
      'Nexora Software privacy policy: what data this site collects, what it is used for, and how to exercise your rights.',
    heading: 'Privacy policy',
    updated: 'Last updated: August 15, 2026',
    sections: [
      {
        heading: 'Who we are',
        body: [
          'This site belongs to Nexora Software, a software studio based in Guayaquil, Ecuador. You can reach us at hola@nexoradevs.com.',
        ],
      },
      {
        heading: 'What data we collect',
        body: [
          'This site has no user accounts and no forms that store data on our servers. When you use the contact form, the message is composed on your own device and sent through WhatsApp from your app: we only receive what you choose to send us in that chat.',
          'We use Google Analytics 4 to measure visits in aggregate: which pages are viewed and from what kind of device. This measurement uses anonymous identifiers and we do not use it to identify you.',
        ],
      },
      {
        heading: 'What we use it for',
        body: [
          'Contact details you send us via WhatsApp or email are used only to reply and prepare your proposal. Visit measurement is used only to improve the site.',
          'We do not sell or share your data with third parties for advertising.',
        ],
      },
      {
        heading: 'Third-party services',
        body: [
          'This site is hosted on Vercel and uses Google Analytics (measurement) and Google Fonts (typography). WhatsApp processes the messages you choose to send us through that channel under its own policies.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          "You can request access, correction or deletion of the data you've sent us by writing to hola@nexoradevs.com. We respond within the timeframes set by Ecuador's Personal Data Protection Law.",
        ],
      },
    ],
    contactLine: 'Questions about this policy? Write to hola@nexoradevs.com.',
  },

  // ── Fase 12 · B1 · Custom 404 ─────────────────────────────────────────────────
  notFound: {
    heading: "This page doesn't exist",
    body: "The link may be mistyped or the page is gone. What is here: our work, our process and our contact — all on the home page.",
    backLabel: 'Go to home',
  },
};
