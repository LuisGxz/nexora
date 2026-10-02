/**
 * English content (international market).
 *
 * Why: the EN mirror of `site.es.ts`, typed against the same `SiteContent` so
 * the two locales can never drift in shape. NO prices, plans, amounts or tiers.
 * Past employers appear only under `about.experience` (background), never as
 * clients in `works`. Demo URLs come from `site.config.ts` (single source).
 *
 * Voice mirrors the Spanish (2026-10-01 redesign): formal, platform-to-user,
 * spoken as a studio ("we" or impersonal — never "I", never a named person).
 * The copy states what is offered: no comparisons ("not X but Y", "no
 * templates") and no promised turnaround ("in days") — the delivery date is set
 * in the proposal.
 *
 * Audience is deliberately open: the reader may be an individual, a freelancer
 * or a company, so no string assumes "your business". The copy talks about the
 * project, never about what the reader is — the mixed audience is signalled
 * implicitly (via `niches`), never stated.
 *
 * The city appears ONLY in `footer.tagline`; no other string says where Nexora
 * is based.
 */
import type { SiteContent } from './types';
import { demoPreviews, demoUrls, productUrls, social } from '../config/site.config';

export const siteEn: SiteContent = {
  meta: {
    title: 'Nexora · Software studio | Website, system and application development',
    description:
      'Software studio. Design and development of custom websites, systems and applications, with scope and delivery date set in the proposal.',
    ogAlt: 'Nexora — Software studio',
  },

  nav: [
    { label: 'Services', anchor: 'servicios' },
    { label: 'Projects', anchor: 'demos' },
    { label: 'Process', anchor: 'proceso' },
    { label: 'Background', anchor: 'estudio' },
    { label: 'FAQ', anchor: 'faq' },
  ],

  sections: {
    services: {
      eyebrow: 'Services',
      heading: 'What we develop',
    },
    works: {
      eyebrow: 'Projects',
      heading: 'Live demos and real projects',
      subheading: 'Projects developed by Nexora, available for review.',
    },
    process: {
      eyebrow: 'Process',
      heading: 'How we work',
    },
    niches: {
      eyebrow: 'Sectors',
      heading: 'Who we work with',
    },
    about: {
      eyebrow: 'About Nexora',
      heading: 'A track record in software development',
    },
    faq: {
      eyebrow: 'Enquiries',
      heading: 'Frequently asked questions',
    },
  },

  hero: {
    eyebrow: 'Software studio',
    headline: 'Website, system and application development.',
    subheadline:
      'Nexora is a software studio that designs and develops custom websites, systems and applications. Every project is defined from its requirements and delivered on the date set in the proposal.',
    ctaPrimary: 'Contact us',
    ctaSecondary: 'View projects',
    proposalEyebrow: 'Proposal',
    proposalHeading: 'What is delivered in writing',
    proposalItems: [
      'Requirements gathering',
      'Project flows and scope',
      'Delivery date',
      'Progress review at every milestone',
      'Two rounds of changes included',
      'First month of adjustments included',
      "Domain and access in the client's name",
    ],
  },

  services: [
    {
      title: 'Website & landing page',
      benefit: 'Fast, clear sites, optimized for search engines and built to turn visits into customers.',
      pageSlug: 'professional-website',
    },
    {
      title: 'Digital QR menu',
      benefit: 'An online menu that updates instantly and is opened from a QR code.',
      pageSlug: 'qr-digital-menu',
    },
    {
      title: 'Booking system',
      benefit: 'Automatic slot management and bookings received 24 hours a day.',
      pageSlug: 'booking-system',
    },
    {
      title: 'Catalog + WhatsApp',
      benefit: 'The full catalog behind a single link, with orders arriving directly on WhatsApp.',
    },
    {
      title: 'Professional portfolio',
      benefit: 'Professional work presented at the level it requires.',
    },
    {
      title: 'Membership dashboard',
      benefit: 'Payments, renewals and member access managed in real time.',
    },
    {
      title: 'Custom apps & systems',
      benefit: 'Design and development of the system the operation requires, fitted to the way it works.',
      pageSlug: 'custom-software',
    },
  ],

  servicesCta: {
    heading: 'Need a custom development?',
    label: 'Contact us',
  },

  // Turnia goes first: it is the only own product in operation and is presented
  // as one more project, not in a separate "products" block.
  works: [
    {
      title: 'Turnia',
      clientType: 'Own product',
      badge: 'In production',
      result: 'Booking and scheduling platform for businesses that work by appointment.',
      url: productUrls.turnia,
      image: demoPreviews.turnia,
      linkLabel: 'View project',
    },
    {
      title: 'Barbershop with online booking',
      clientType: 'Barbershop',
      result: 'Bookings 24 hours a day, with no phone handling.',
      url: demoUrls.barbershop,
      image: demoPreviews.barbershop,
    },
    {
      title: 'Digital QR menu for a restaurant',
      clientType: 'Restaurant',
      result: 'A menu that updates with no reprinting.',
      url: demoUrls.restaurant,
      image: demoPreviews.restaurant,
    },
    {
      title: 'Scheduling for a medical office',
      clientType: 'Medical office',
      result: 'Patients book their appointments online.',
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
      result: 'A professional presence on search engines.',
      url: demoUrls.corporate,
      image: demoPreviews.corporate,
    },
  ],

  process: [
    { step: '01', title: 'Contact', description: 'The project need is received.' },
    { step: '02', title: 'Proposal', description: 'Requirements, flows, scope and delivery date.' },
    { step: '03', title: 'Development', description: 'Visible progress and a review at every milestone.' },
    { step: '04', title: 'Delivery', description: "A working project, with domain and access in the client's name." },
  ],

  // Editorial order: from larger to smaller scale.
  niches: [
    { label: 'Companies & startups' },
    { label: 'Clinics & medical offices' },
    { label: 'Events' },
    { label: 'Gyms & academies' },
    { label: 'Restaurants & cafés' },
    { label: 'Shops & boutiques' },
    { label: 'Barbershops & salons' },
    { label: 'Independent professionals' },
  ],

  about: {
    heading: 'A track record in software development',
    body:
      "Nexora works with clients in any country. The studio's knowledge comes from years of development in banking, product and software running in production, and it backs every project delivered.",
    // Real professional background of the team, NOT Nexora clients.
    // Ordered most recent first.
    experience: [
      { company: 'Fiverr', role: 'Freelance development', period: '2021 — present' },
      { company: 'Relolink', role: 'Full-stack development', period: 'Apr 2024 — present' },
      { company: 'Banco de Machala', role: 'Software architecture', period: 'Aug 2023 — Apr 2024' },
      { company: 'Viamatica', role: 'Software engineering', period: 'Feb 2021 — Apr 2024' },
    ],
    links: [
      { label: 'Portfolio', href: social.portfolio, icon: 'ui-github' },
      { label: 'LinkedIn', href: social.linkedin, icon: 'ui-external' },
      { label: 'Fiverr', href: social.fiverr, icon: 'ui-external' },
    ],
  },

  pillars: [
    { stat: '+5 years', label: 'of experience in software development' },
    { stat: 'Defined process', label: 'requirements, proposal, development and delivery' },
    { stat: 'Delivery date', label: 'set in writing in every proposal' },
  ],

  faq: [
    {
      question: 'What is the delivery time?',
      answer: 'The delivery date is set in the proposal, according to the requirements of each project.',
    },
    {
      question: 'What does a project cost?',
      answer: 'Every project is quoted individually. A proposal is prepared from the requirements received by WhatsApp or email.',
    },
    {
      question: 'How are payments made?',
      answer: 'Half when the project starts and half before launch.',
    },
    {
      question: 'Is maintenance included?',
      answer: 'The first month of adjustments is included. Monthly maintenance can be contracted afterwards.',
    },
    {
      question: 'Whose name is the domain registered in?',
      answer: "Nexora manages the domain or uses the one the client already has. The domain and all access remain in the client's name.",
    },
    {
      question: 'How many changes can be requested?',
      answer: 'Development includes two rounds of changes.',
    },
    {
      question: 'Do you work with clients in other countries?',
      answer: 'Yes. Nexora works with clients in any country and coordinates every project by WhatsApp or email.',
    },
  ],

  contact: {
    heading: 'Contact us',
    // C1 (fase 12): promesa concreta, espejo de site.es.ts.
    subheading:
      'Write to us on WhatsApp or by email with the requirements of your project. We reply within 24 business hours.',
    form: {
      nameLabel: 'Name',
      businessTypeLabel: 'Activity or company',
      needLabel: 'Requirement',
      namePlaceholder: 'First and last name',
      businessTypePlaceholder: 'Sector or company name',
      needPlaceholder: 'Brief description of the project',
      submitLabel: 'Send on WhatsApp',
    },
    whatsappCtaLabel: 'WhatsApp',
    emailCtaLabel: 'Email',
    channelsHeading: 'Write to us',
    channelsBody: 'Enquiries are answered on WhatsApp and by email.',
    whatsappPrefill: 'Hello Nexora, I am requesting information about a project.',
    vcardLabel: 'Save contact',
    prefillTemplate: 'Hello, I am {name} ({businessType}). Requirement: {need}',
  },

  footer: {
    tagline: 'Software studio · Guayaquil, Ecuador',
    rights: '© 2026 Nexora Software. All rights reserved.',
    localSignal: 'Invoicing available (Ecuador RUC).',
  },

  ui: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Switch to Spanish',
    skipToContent: 'Skip to content',
    viewDemo: 'View demo',
    faqMoreQuestion: 'Another enquiry? Contact us',
    experienceLabel: 'Background',
    viewService: 'View service',
    breadcrumbHome: 'Home',
    breadcrumbsLabel: 'Location in the site',
    privacyLink: 'Privacy',
  },

  // ── Fase 12 · A5 + C4 · Service pages, each with its case study ───────────────
  servicePages: [
    {
      slug: 'professional-website',
      altSlug: 'web-profesional',
      metaTitle: 'Professional website design | Nexora',
      metaDescription:
        "Professional website design and development: fast, clear sites built to turn visits into customers, with the domain in the client's name.",
      heading: 'Professional websites',
      intro:
        'Nexora designs and develops custom websites and landing pages, fast and clear, so that visitors understand the offer and get in touch.',
      includesHeading: "What's included",
      includes: [
        "Custom design, aligned with the project's identity and goal.",
        'Search-ready from day one: titles, descriptions and structured data.',
        'Fast loading and a design adapted to phones and desktops.',
        "Domain and access in the client's name.",
        'One month of adjustments included after launch.',
      ],
      caseStudy: {
        heading: 'Case: a professional presence for an SMB',
        problem:
          'A services company did not appear on Google: its only presence was a social media page, and those searching for it by name found no site to back the company.',
        decision:
          'A clear corporate site was built: what the company does, for whom, and how to reach it, with the technical structure search engines require.',
        result:
          'A professional online presence, ready to appear in brand searches and to back every quote with its own link.',
        demoLabel: 'See the corporate site demo',
        demoUrl: demoUrls.corporate,
      },
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'What is the delivery time for a website?',
          answer: 'The delivery date is set in the proposal, according to the number of pages and integrations in the project.',
        },
        {
          question: 'Can the site be updated after delivery?',
          answer: 'Yes. The site is delivered ready for changes to be requested or made directly; the first month of adjustments is included.',
        },
        {
          question: 'Does it include domain and hosting?',
          answer: "Nexora manages both or uses the ones the client already has. In every case, access remains in the client's name.",
        },
      ],
      ctaHeading: 'Request the proposal for your website',
      ctaLabel: 'Request a proposal',
      whatsappPrefill: 'Hello Nexora, I am requesting information about a professional website.',
    },
    {
      slug: 'booking-system',
      altSlug: 'sistema-de-reservas',
      metaTitle: 'Online booking system | Nexora',
      metaDescription:
        'Online booking system for appointments: bookings received 24 hours a day, with automatic confirmations and reminders.',
      heading: 'Online booking system',
      intro:
        'The system receives bookings at any hour, confirms them and sends reminders automatically. Whoever books sees only the available slots.',
      includesHeading: "What's included",
      includes: [
        'A dedicated booking page: service, professional and time, with no accounts or downloads.',
        'Automatic confirmations and reminders by email.',
        'A manageable diary: hours, services and team are run from one dashboard.',
        'Slot control: the same time is never booked twice.',
        "Backed by Turnia, Nexora's booking platform, in production.",
      ],
      caseStudy: {
        heading: 'Case: a barbershop with online booking',
        problem:
          'A barbershop lost bookings when the team was busy with customers: calls went unanswered.',
        decision:
          'Its online booking page was published: customers choose barber, service and time from their phone, and the diary is managed from a dashboard.',
        result:
          'Bookings 24 hours a day, with no interruption to the work, outside opening hours too.',
        demoLabel: 'See the barbershop booking demo',
        demoUrl: demoUrls.barbershop,
      },
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'Do customers need to create an account?',
          answer: 'No. They book with their name and phone, and receive a confirmation email with everything needed to change or cancel the appointment.',
        },
        {
          question: 'Is it suitable for clinics, spas or gyms?',
          answer: 'Yes. It works for any appointment-based operation: barbershops, medical offices, spas, academies and others.',
        },
        {
          question: 'What happens if two people request the same slot?',
          answer: 'The system prevents it: once a slot is booked, it stops being available to everyone else at that same moment.',
        },
      ],
      ctaHeading: 'Request the proposal for your booking system',
      ctaLabel: 'Request a proposal',
      whatsappPrefill: 'Hello Nexora, I am requesting information about an online booking system.',
    },
    {
      slug: 'qr-digital-menu',
      altSlug: 'menu-digital-qr',
      metaTitle: 'Digital QR menu for restaurants | Nexora',
      metaDescription:
        'Digital menu with QR code: the menu online, always current. Every change of dish or price is published instantly.',
      heading: 'Digital menu with QR code',
      intro:
        'The menu is published online, opened from a QR code at the table, and any change is visible instantly.',
      includesHeading: "What's included",
      includes: [
        "An online menu with the venue's identity: categories, photos, prices and descriptions.",
        'A QR code ready to print for tables, counter or packaging.',
        'Immediate updates: every change shows on the next scan.',
        'Fast loading, optimized for phones and for the signal inside a venue.',
      ],
      caseStudy: {
        heading: 'Case: a restaurant with a digital menu',
        problem:
          'A restaurant adjusted prices and dishes every season, and every adjustment meant reprinting all the menus.',
        decision:
          'The menu was moved to a digital QR menu: one online source, manageable without technical skills, with the photos and ordering the venue already used.',
        result:
          'Changes published in minutes and a menu that always matches the one in the kitchen.',
        demoLabel: 'See the QR menu demo',
        demoUrl: demoUrls.restaurant,
      },
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'Can the venue change prices and dishes?',
          answer: 'Yes. The menu is managed from a panel; every change is published instantly.',
        },
        {
          question: 'Does it work with limited signal inside the venue?',
          answer: 'The menu is optimized to load quickly on slow connections as well.',
        },
        {
          question: 'Is it suitable for cafés or food trucks?',
          answer: 'Yes. Any business with a menu or product catalog can use it.',
        },
      ],
      ctaHeading: 'Request the proposal for your digital menu',
      ctaLabel: 'Request a proposal',
      whatsappPrefill: 'Hello Nexora, I am requesting information about a digital QR menu.',
    },
    {
      slug: 'custom-software',
      altSlug: 'software-a-medida',
      metaTitle: 'Custom software: apps & systems | Nexora',
      metaDescription:
        'Custom software development: systems, dashboards and applications built around the operation, with a defined scope and a delivery date.',
      heading: 'Custom software: systems and applications',
      intro:
        "Nexora designs and develops systems, dashboards and applications built around each client's operation and the way it works.",
      includesHeading: "What's included",
      includes: [
        'Process mapping: the operation is analysed before any screen is defined.',
        'A proposal with requirements, flows, scope and delivery date.',
        'Development with visible progress and a review at every milestone.',
        "Delivered working, with access and code in the client's name.",
        "The backing of Turnia, Nexora's own product in production.",
      ],
      caseStudy: {
        heading: 'Case: scheduling for a medical office',
        problem:
          'A medical office coordinated appointments by phone and notebook: unfilled slots, patients with no reminder, and a diary only one person could read.',
        decision:
          "An online diary was built around the office's flow: patients book online, the team sees the full day, and reminders are sent automatically.",
        result:
          'Fewer no-shows and a diary the whole team can read.',
        demoLabel: 'See the medical office demo',
        demoUrl: demoUrls.clinic,
      },
      faqHeading: 'Frequently asked questions',
      faq: [
        {
          question: 'How is the timeline determined?',
          answer: 'The scope is defined first; it is then documented in a proposal with a delivery date.',
        },
        {
          question: 'Is it possible to start with a reduced scope?',
          answer: 'Yes. It is common to start with a first module and extend the system once it is in use.',
        },
        {
          question: "Does the code remain in the client's name?",
          answer: "Yes. Code, domain and access remain in the client's name.",
        },
      ],
      ctaHeading: 'Request the proposal for your system',
      ctaLabel: 'Request a proposal',
      whatsappPrefill: 'Hello Nexora, I am requesting information about a custom system.',
    },
  ],

  // ── Fase 12 · C3 · Thank-you page ─────────────────────────────────────────────
  thanks: {
    metaTitle: 'Thank you | Nexora',
    heading: 'Thank you for writing to us',
    body: 'Your message was sent on WhatsApp. We reply within 24 business hours.',
    backLabel: 'Back to home',
  },

  // ── Fase 12 · decisión D · Privacy policy ─────────────────────────────────────
  privacy: {
    metaTitle: 'Privacy policy | Nexora',
    metaDescription:
      'Nexora Software privacy policy: what data this site collects, what it is used for, and how to exercise your rights.',
    heading: 'Privacy policy',
    updated: 'Last updated: August 17, 2026',
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
          'We use Google Analytics 4 to measure visits in aggregate: which pages are viewed and from what kind of device. This measurement uses cookies with pseudonymous identifiers and we do not use it to identify you.',
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
          'These providers operate from the United States, so measurement data is processed outside Ecuador under each provider’s contractual safeguards.',
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
    heading: 'This page does not exist',
    body: 'The link may be mistyped or the page is no longer available. Services, projects and contact details are on the home page.',
    backLabel: 'Go to home',
  },
};
