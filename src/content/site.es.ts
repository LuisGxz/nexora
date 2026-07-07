/**
 * Spanish content (default locale, Ecuador market).
 *
 * Why: every Spanish string the site renders lives here, typed against
 * `SiteContent` so it stays in lockstep with the English mirror. NO prices,
 * plans, amounts or tiers anywhere — by editorial rule, not just omission.
 * Past employers appear only under `about.experience` (background), never as
 * clients in `works`. Demo URLs come from `site.config.ts` (single source).
 *
 * Voice: speak to the business owner, lead with the pain, confident without
 * exaggeration (see `nexora-brand/brand-guidelines.md`).
 */
import type { SiteContent } from './types';
import { demoPreviews, demoUrls, social } from '../config/site.config';

export const siteEs: SiteContent = {
  meta: {
    title: 'Nexora · Estudio de Software | Webs, sistemas y apps para tu negocio',
    description:
      'Estudio de software en Guayaquil. Páginas web, sistemas y aplicaciones a la medida: tu landing en pocos días y una fecha exacta para cada proyecto.',
    ogAlt: 'Nexora — Estudio de software en Guayaquil',
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
      heading: 'Lo que construimos para tu negocio',
      subheading: 'Sin plantillas genéricas. Cada proyecto resuelve un dolor concreto.',
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
      heading: 'Negocios con los que trabajamos',
      subheading: 'Si tu rubro no está en la lista, escríbeme igual.',
    },
    about: {
      eyebrow: 'Sobre Nexora',
      heading: 'Una casa de software con experiencia real',
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
    headline: 'Páginas web, sistemas y aplicaciones a la medida para tu negocio.',
    subheadline:
      'Somos un estudio de software en Guayaquil. Tu landing puede estar lista en pocos días; para sistemas y apps te damos una fecha exacta en la propuesta. A la medida, con método y avances que ves.',
    ctaPrimary: 'Cuéntame tu proyecto',
    ctaSecondary: 'Ver trabajos',
  },

  services: [
    { icon: 'service-web', title: 'Web y landing profesional', pain: 'No existes en Google y tu competencia sí.' },
    { icon: 'service-qr-menu', title: 'Menú digital QR', pain: 'Reimprimes el menú cada vez que cambia un precio.' },
    { icon: 'service-booking', title: 'Sistema de reservas', pain: 'Pierdes horas contestando "¿hay turno?".' },
    { icon: 'service-catalog', title: 'Catálogo + WhatsApp', pain: 'Vendes por Instagram y es un desorden.' },
    { icon: 'service-portfolio', title: 'Portafolio profesional', pain: 'Tu trabajo es bueno, pero no se ve serio.' },
    { icon: 'service-memberships', title: 'Panel de membresías', pain: 'No sabes quién pagó ni quién está vencido.' },
    { icon: 'service-custom-apps', title: 'Apps y sistemas a medida', pain: 'Necesitas algo que no existe llave en mano.' },
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
    { step: '01', title: 'Contacto', description: 'Me cuentas qué necesitas por WhatsApp. Sin compromiso.' },
    { step: '02', title: 'Propuesta', description: 'Te preparo una propuesta a medida con alcance y fecha exacta.' },
    { step: '03', title: 'Desarrollo', description: 'Construyo con avances visibles; revisas en cada hito.' },
    { step: '04', title: 'Entrega', description: 'Entrego funcionando, con dominio y todo listo para usar.' },
  ],

  niches: [
    { icon: 'service-booking', label: 'Barberías y peluquerías' },
    { icon: 'service-qr-menu', label: 'Restaurantes y cafeterías' },
    { icon: 'service-booking', label: 'Consultorios y clínicas' },
    { icon: 'service-memberships', label: 'Gimnasios y academias' },
    { icon: 'service-catalog', label: 'Tiendas y boutiques' },
    { icon: 'service-web', label: 'Eventos' },
    { icon: 'service-custom-apps', label: 'Empresas y startups' },
  ],

  about: {
    heading: 'Una casa de software con experiencia real',
    body:
      'Nexora es un estudio de software con base en Guayaquil que trabaja con negocios de todo el mundo. Construimos webs, sistemas y aplicaciones a la medida, con método: alcance claro, avances visibles y entregas que funcionan. Detrás hay experiencia real en banca y producto, con años desarrollando software en producción. Lo lidera Luis como desarrollador principal; trabajamos como estudio y hablamos de "nuestro proceso".',
    // ⚠️ PENDING: confirm exact roles/periods with the owner. Listed as
    // professional background (where the developer has worked), NOT as clients.
    experience: [
      { company: 'Banco de Machala', role: 'Desarrollo de software', period: '—' },
      { company: 'Viamatica', role: 'Desarrollo de software', period: '—' },
      { company: 'Relolink', role: 'Desarrollo de producto', period: '—' },
    ],
    products: ['Faktova', 'Turnia', 'Spektova'],
    links: [
      { label: 'Portafolio', href: social.portfolio, icon: 'ui-github' },
      { label: 'Fiverr', href: social.fiverr, icon: 'ui-external' },
    ],
  },

  pillars: [
    { stat: '+5 años', label: 'construyendo software de verdad' },
    { stat: 'Productos propios', label: 'Faktova, Turnia y Spektova en producción' },
    { stat: 'Entregas rápidas', label: 'tu web en días; sistemas con fecha exacta' },
  ],

  faq: [
    {
      question: '¿Cuánto tardas en entregar?',
      answer: 'La mayoría de landing pages y sitios salen en 3 a 5 días. Para sistemas y apps más grandes, te doy una fecha exacta en la propuesta.',
    },
    {
      question: '¿Cuánto cuesta?',
      answer: 'Cada proyecto es a medida. Escríbeme por WhatsApp con lo que necesitas y te preparo una propuesta, sin compromiso.',
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
      answer: 'Lo gestiono por ti o usamos el que ya tengas. El dominio y los accesos quedan a tu nombre.',
    },
    {
      question: '¿Cuántos cambios puedo pedir?',
      answer: 'Dos rondas de cambios incluidas durante el desarrollo. Suelen ser más que suficientes.',
    },
    {
      question: '¿Trabajas con negocios fuera de Ecuador?',
      answer: 'Sí. Trabajo con clientes en cualquier parte del mundo; coordinamos todo por WhatsApp sin importar dónde estés.',
    },
  ],

  contact: {
    heading: 'Cuéntame tu proyecto',
    subheading: 'Escríbeme por WhatsApp y te respondo personalmente. Sin formularios eternos.',
    form: {
      nameLabel: 'Tu nombre',
      businessTypeLabel: 'Tipo de negocio',
      needLabel: '¿Qué necesitas?',
      namePlaceholder: 'Ej. María',
      businessTypePlaceholder: 'Ej. Barbería',
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
    experienceLabel: 'Experiencia',
    productsLabel: 'Productos propios',
  },
};
