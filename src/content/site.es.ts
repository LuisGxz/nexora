/**
 * Spanish content (default locale, Ecuador market).
 *
 * Why: every Spanish string the site renders lives here, typed against
 * `SiteContent` so it stays in lockstep with the English mirror. NO prices,
 * plans, amounts or tiers anywhere — by editorial rule, not just omission.
 * Past employers appear only under `about.experience` (background), never as
 * clients in `works`. Demo URLs come from `site.config.ts` (single source).
 *
 * Voice: speak as a studio ("nosotros" — never "yo", never a named person), lead
 * with the outcome the client gets, confident without exaggeration (see
 * `nexora-brand/brand-guidelines.md`).
 *
 * Audience is deliberately open: the reader may be an individual, a freelancer
 * or a company, so no string assumes "tu negocio" / "tu empresa". Address the
 * reader as "tú" and talk about the project, never about what they are — the
 * mixed audience is signalled implicitly (via `niches`), never stated.
 *
 * The city appears ONLY in `footer.tagline`; no other string says where Nexora
 * is based.
 */
import type { SiteContent } from './types';
import { demoPreviews, demoUrls, productUrls, social } from '../config/site.config';

export const siteEs: SiteContent = {
  meta: {
    title: 'Nexora · Estudio de Software | Webs, sistemas y apps a la medida',
    description:
      'Estudio de software. Páginas web, sistemas y aplicaciones a la medida: tu landing en pocos días y una fecha exacta para cada proyecto.',
    ogAlt: 'Nexora — Estudio de software',
  },

  nav: [
    { label: 'Servicios', anchor: 'servicios' },
    { label: 'Trabajos', anchor: 'demos' },
    { label: 'Proceso', anchor: 'proceso' },
    { label: 'Sobre Nexora', anchor: 'estudio' },
    { label: 'FAQ', anchor: 'faq' },
    { label: 'Contacto', anchor: 'contacto' },
  ],

  sections: {
    services: {
      eyebrow: 'Servicios',
      heading: 'Lo que construimos para ti',
      subheading: 'Sin plantillas genéricas. Cada proyecto se construye alrededor de un objetivo concreto.',
    },
    works: {
      eyebrow: 'Trabajos',
      heading: 'Demos y proyectos reales',
      subheading: 'Trabajo propio de Nexora. Míralo funcionando.',
    },
    process: {
      eyebrow: 'Proceso',
      heading: 'Cómo trabajamos',
      subheading: 'Método claro, de la primera idea a la entrega.',
    },
    niches: {
      eyebrow: 'Para quién',
      heading: 'Con quiénes trabajamos',
      subheading: 'Si no encuentras lo tuyo en la lista, escríbenos igual.',
    },
    about: {
      eyebrow: 'Sobre Nexora',
      heading: 'El equipo detrás de cada proyecto',
    },
    pillars: {
      eyebrow: 'Por qué Nexora',
      heading: 'Por qué confiar en nosotros',
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'Preguntas frecuentes',
    },
  },

  hero: {
    eyebrow: 'Estudio de software',
    headline: 'Páginas web, sistemas y aplicaciones hechas a tu medida.',
    subheadline:
      'Somos un estudio de software que construye webs, sistemas y aplicaciones a la medida. Tu landing puede estar lista en pocos días; para sistemas y apps te damos una fecha exacta en la propuesta, con método y avances que ves.',
    ctaPrimary: 'Cuéntanos tu proyecto',
    ctaSecondary: 'Ver trabajos',
  },

  services: [
    {
      icon: 'service-web',
      title: 'Web y landing profesional',
      benefit: 'Potenciamos tu presencia en las búsquedas de Google con un sitio rápido, claro y hecho para convertir visitas en clientes.',
    },
    {
      icon: 'service-qr-menu',
      title: 'Menú digital QR',
      benefit: 'Tu carta vive en línea y se actualiza al instante: cambias un precio y tus clientes lo ven en el siguiente escaneo.',
    },
    {
      icon: 'service-booking',
      title: 'Sistema de reservas',
      benefit: 'Un sistema que gestiona tus turnos automáticamente y recibe reservas 24/7, sin que tengas que contestar el teléfono.',
    },
    {
      icon: 'service-catalog',
      title: 'Catálogo + WhatsApp',
      benefit: 'Ordenamos todo tu catálogo en un solo enlace y llevamos cada pedido directo a tu WhatsApp.',
    },
    {
      icon: 'service-portfolio',
      title: 'Portafolio profesional',
      benefit: 'Mostramos tu trabajo con el nivel que tiene, para que cerrar nuevos clientes te cueste menos.',
    },
    {
      icon: 'service-memberships',
      title: 'Panel de membresías',
      benefit: 'Controlas pagos, vencimientos y accesos de tus socios desde un panel, en tiempo real.',
    },
    {
      icon: 'service-custom-apps',
      title: 'Apps y sistemas a medida',
      benefit: 'Diseñamos y desarrollamos el sistema exacto que tu operación necesita, integrado a la forma en que ya trabajas.',
    },
  ],

  works: [
    {
      title: 'Barbería con reservas online',
      clientType: 'Barbería',
      result: 'Reservas 24/7 sin contestar el teléfono.',
      url: demoUrls.barbershop,
      image: demoPreviews.barbershop,
    },
    {
      title: 'Menú digital QR para restaurante',
      clientType: 'Restaurante',
      result: 'Menú que se actualiza sin reimprimir nada.',
      url: demoUrls.restaurant,
      image: demoPreviews.restaurant,
    },
    {
      title: 'Agenda para consultorio',
      clientType: 'Consultorio médico',
      result: 'Pacientes que reservan solos su cita.',
      url: demoUrls.clinic,
      image: demoPreviews.clinic,
    },
    {
      title: 'Landing para evento',
      clientType: 'Organizador de eventos',
      result: 'Inscripciones y confirmaciones en un solo link.',
      url: demoUrls.event,
      image: demoPreviews.event,
    },
    {
      title: 'Sitio corporativo para PYME',
      clientType: 'Empresa de servicios',
      result: 'Presencia profesional en Google en pocos días.',
      url: demoUrls.corporate,
      image: demoPreviews.corporate,
    },
  ],

  process: [
    { step: '01', title: 'Contacto', description: 'Te comunicas con nosotros y nos compartes tus requerimientos.' },
    { step: '02', title: 'Propuesta', description: 'Te preparamos una propuesta con el alcance detallado y una fecha exacta de entrega.' },
    { step: '03', title: 'Desarrollo', description: 'Desarrollamos con avances visibles y una revisión contigo en cada hito.' },
    { step: '04', title: 'Entrega', description: 'Entregamos el proyecto funcionando, con dominio y accesos a tu nombre.' },
  ],

  niches: [
    { icon: 'service-booking', label: 'Barberías y peluquerías' },
    { icon: 'service-qr-menu', label: 'Restaurantes y cafeterías' },
    { icon: 'service-booking', label: 'Consultorios y clínicas' },
    { icon: 'service-memberships', label: 'Gimnasios y academias' },
    { icon: 'service-catalog', label: 'Tiendas y boutiques' },
    { icon: 'service-web', label: 'Eventos' },
    { icon: 'service-portfolio', label: 'Profesionales independientes' },
    { icon: 'service-custom-apps', label: 'Empresas y startups' },
  ],

  about: {
    heading: 'El equipo detrás de cada proyecto',
    body:
      'Nexora es un estudio de software que trabaja con clientes de cualquier parte del mundo. Construimos webs, sistemas y aplicaciones a la medida con un método claro: alcance definido, avances visibles y entregas que funcionan. Nuestro equipo cuenta con una amplia experiencia en el sector del desarrollo —banca, producto y software corriendo en producción— y esa trayectoria es la que respalda cada proyecto.',
    // Trayectoria profesional real del equipo, NO clientes de Nexora.
    // Orden: más reciente primero.
    experience: [
      { company: 'Fiverr', role: 'Desarrollo Freelance', period: '2021 — actualidad (5 años)' },
      { company: 'Relolink', role: 'Desarrollo Full-stack', period: 'abr. 2024 — actualidad' },
      { company: 'Banco de Machala', role: 'Arquitectura de Software', period: 'ago. 2023 — abr. 2024' },
      { company: 'Viamatica', role: 'Ingeniería de Software', period: 'feb. 2021 — abr. 2024' },
    ],
    productsIntro: 'Software que diseñamos, construimos y operamos nosotros mismos.',
    // Faktova no tiene sitio público todavía: va sin `url` y con `status`, para
    // que la tarjeta explique la ausencia del enlace en vez de omitir el producto.
    products: [
      {
        name: 'Turnia',
        description: 'Aplicación de reservas y agenda que implementamos para quienes trabajan con turnos y citas.',
        url: productUrls.turnia,
      },
      {
        name: 'Spektova',
        description: 'Plataforma de comercio electrónico para vender en línea, con catálogo y pedidos.',
        url: productUrls.spektova,
      },
      {
        name: 'Faktova',
        description: 'Sistema interno de facturación, enfocado en la operación a nivel nacional.',
        status: 'En desarrollo',
      },
    ],
    links: [
      { label: 'Portafolio', href: social.portfolio, icon: 'ui-github' },
      { label: 'LinkedIn', href: social.linkedin, icon: 'ui-external' },
      { label: 'Fiverr', href: social.fiverr, icon: 'ui-external' },
    ],
  },

  pillars: [
    { stat: '+5 años', label: 'de experiencia del equipo en desarrollo' },
    { stat: 'Productos propios', label: 'Turnia y Spektova en producción' },
    { stat: 'Entregas rápidas', label: 'tu web en días; sistemas con fecha exacta' },
  ],

  faq: [
    {
      question: '¿Cuánto tardan en entregar?',
      answer: 'La mayoría de landing pages y sitios salen en 3 a 5 días. Para sistemas y apps más grandes, te damos una fecha exacta en la propuesta.',
    },
    {
      question: '¿Cuánto cuesta?',
      answer: 'Cada proyecto es a medida. Comunícate con nosotros por WhatsApp con tus requerimientos y te preparamos una propuesta.',
    },
    {
      question: '¿Cómo son los pagos?',
      answer: 'Mitad para empezar y mitad antes de publicar. Sin sorpresas.',
    },
    {
      question: '¿Incluye mantenimiento?',
      answer: 'El primer mes de ajustes va incluido. Después puedes contratar mantenimiento mensual si lo necesitas.',
    },
    {
      question: '¿Quién pone el dominio?',
      answer: 'Lo gestionamos por ti o usamos el que ya tengas. El dominio y los accesos quedan a tu nombre.',
    },
    {
      question: '¿Cuántos cambios puedo pedir?',
      answer: 'Dos rondas de cambios incluidas durante el desarrollo. Suelen ser más que suficientes.',
    },
    {
      question: '¿Trabajan con clientes de otros países?',
      answer: 'Sí. Trabajamos con clientes en cualquier parte del mundo y coordinamos todo por WhatsApp, sin importar dónde estés.',
    },
  ],

  contact: {
    heading: 'Cuéntanos tu proyecto',
    subheading: 'Comunícate con nosotros por WhatsApp con tus requerimientos y te respondemos a la brevedad.',
    form: {
      nameLabel: 'Nombre',
      businessTypeLabel: '¿A qué te dedicas?',
      needLabel: '¿Qué necesitas?',
      namePlaceholder: '¿Con quién hablamos?',
      businessTypePlaceholder: 'Ej. Barbería, consultora, proyecto personal',
      needPlaceholder: 'Ej. Una web con reservas online',
      submitLabel: 'Enviar por WhatsApp',
    },
    whatsappCtaLabel: 'Escríbenos por WhatsApp',
    whatsappPrefill: 'Hola Nexora, quiero información sobre un proyecto.',
    vcardLabel: 'Guardar contacto',
    prefillTemplate: 'Hola, soy {name} ({businessType}). Necesito: {need}',
  },

  footer: {
    tagline: 'Estudio de software · Guayaquil, Ecuador',
    rights: '© 2026 Nexora Software. Todos los derechos reservados.',
    localSignal: 'RUC y factura disponibles.',
  },

  ui: {
    stickyWhatsapp: 'WhatsApp',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    switchLanguage: 'Cambiar a inglés',
    skipToContent: 'Saltar al contenido',
    viewDemo: 'Ver demo',
    faqMoreQuestion: '¿Otra pregunta?',
    experienceLabel: 'Trayectoria del equipo',
    productsLabel: 'Productos propios',
  },
};
