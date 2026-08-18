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
      pageSlug: 'web-profesional',
    },
    {
      icon: 'service-qr-menu',
      title: 'Menú digital QR',
      benefit: 'Tu carta vive en línea y se actualiza al instante: cambias un precio y tus clientes lo ven en el siguiente escaneo.',
      pageSlug: 'menu-digital-qr',
    },
    {
      icon: 'service-booking',
      title: 'Sistema de reservas',
      benefit: 'Un sistema que gestiona tus turnos automáticamente y recibe reservas 24/7, sin que tengas que contestar el teléfono.',
      pageSlug: 'sistema-de-reservas',
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
      pageSlug: 'software-a-medida',
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
    // C1 (fase 12): promesa CONCRETA — "a la brevedad" no promete nada. El plazo es el S6 del
    // plan del estudio y tiene que poder cumplirse; si cambia, cambia acá y en site.en.ts.
    subheading: 'Comunícate con nosotros por WhatsApp con tus requerimientos y te respondemos en menos de 24 horas hábiles.',
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
    viewService: 'Ver servicio',
    breadcrumbHome: 'Inicio',
    breadcrumbsLabel: 'Dónde estás',
    privacyLink: 'Privacidad',
  },

  // ── Fase 12 · A5 + C4 · Las páginas de servicio, cada una con su caso ─────────
  // Una URL por intención de búsqueda; el caso cuenta problema → decisión →
  // resultado y enlaza el demo al final. Slugs en español a propósito: la página
  // existe para rankear la consulta tal como se escribe.
  servicePages: [
    {
      slug: 'web-profesional',
      altSlug: 'professional-website',
      metaTitle: 'Página web profesional | Nexora',
      metaDescription:
        'Diseño y desarrollo de páginas web profesionales: rápidas, claras y hechas para convertir visitas en clientes. Tu web lista en días, con dominio a tu nombre.',
      heading: 'Una página web profesional que trabaja por ti',
      intro:
        'Un sitio rápido y claro es la diferencia entre aparecer en Google y que te encuentren de verdad. Diseñamos y desarrollamos webs y landings a la medida — sin plantillas genéricas — pensadas para que quien te visita entienda qué haces y te escriba.',
      includesHeading: 'Qué incluye',
      includes: [
        'Diseño a la medida, alineado a tu identidad y a tu objetivo.',
        'Optimización para buscadores desde el primer día: títulos, descripciones y datos estructurados.',
        'Carga rápida y diseño que se ve bien en teléfono y en computadora.',
        'Dominio y accesos a tu nombre, siempre.',
        'Un mes de ajustes incluido después de publicar.',
      ],
      caseStudy: {
        heading: 'Un caso: presencia profesional para una PYME',
        problem:
          'Una empresa de servicios no aparecía en Google: su presencia era una página de redes sociales, y los clientes potenciales que la buscaban por nombre no encontraban nada que inspirara confianza.',
        decision:
          'Construimos un sitio corporativo claro: qué hace la empresa, para quién y cómo contactarla, con la estructura técnica que Google espera — sin adornos que estorben la respuesta.',
        result:
          'Presencia profesional en línea en pocos días, lista para aparecer en las búsquedas de su marca y respaldar cada cotización con un enlace serio.',
        demoLabel: 'Ver el demo de sitio corporativo',
        demoUrl: demoUrls.corporate,
      },
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Cuánto tarda una página web?',
          answer: 'La mayoría de landings y sitios salen en 3 a 5 días. Si tu proyecto necesita más páginas o integraciones, te damos una fecha exacta en la propuesta.',
        },
        {
          question: '¿Puedo actualizarla yo después?',
          answer: 'Sí. Entregamos el sitio con lo necesario para que puedas pedir cambios o hacerlos tú; el primer mes de ajustes va incluido.',
        },
        {
          question: '¿Incluye el dominio y el hosting?',
          answer: 'Gestionamos ambos por ti o usamos los que ya tengas. Queden con quien queden, los accesos son tuyos.',
        },
      ],
      ctaHeading: '¿Hablamos de tu web?',
      ctaLabel: 'Cotizar mi página web',
      whatsappPrefill: 'Hola Nexora, quiero una página web profesional.',
    },
    {
      slug: 'sistema-de-reservas',
      altSlug: 'booking-system',
      metaTitle: 'Sistema de reservas online | Nexora',
      metaDescription:
        'Sistema de reservas online para citas y turnos: tus clientes reservan solos 24/7, con confirmaciones y recordatorios automáticos. Sin contestar el teléfono.',
      heading: 'Reservas online que se atienden solas',
      intro:
        'Cada llamada para agendar una cita es tiempo que no se dedica a atender. Un sistema de reservas recibe las citas a cualquier hora, confirma solo y recuerda solo — y quien agenda ve únicamente los horarios que de verdad están libres.',
      includesHeading: 'Qué incluye',
      includes: [
        'Página de reservas propia: servicio, profesional y horario, sin exigir cuentas ni descargas.',
        'Confirmaciones y recordatorios automáticos por correo.',
        'Agenda administrable: horarios, servicios y equipo se gestionan desde un panel.',
        'Sin dobles reservas: el sistema garantiza que un mismo cupo no se venda dos veces.',
        'Respaldado por Turnia, nuestro producto propio de reservas corriendo en producción.',
      ],
      caseStudy: {
        heading: 'Un caso: la barbería que dejó de contestar el teléfono',
        problem:
          'Una barbería perdía reservas cada vez que el equipo estaba ocupado atendiendo: el teléfono sonaba, nadie contestaba, y esa cita se iba a otro lado.',
        decision:
          'Publicamos su página de reservas en línea: los clientes eligen barbero, servicio y horario desde el celular, y la agenda se administra desde un panel simple.',
        result:
          'Reservas entrando 24/7 sin interrumpir el trabajo, y una agenda que se llena sola — también fuera del horario de atención.',
        demoLabel: 'Ver el demo de barbería con reservas',
        demoUrl: demoUrls.barbershop,
      },
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Mis clientes tienen que crear una cuenta?',
          answer: 'No. Reservan con su nombre y su teléfono, y reciben la confirmación por correo con todo lo necesario para cambiar o cancelar su cita.',
        },
        {
          question: '¿Sirve para consultorios, spas o gimnasios?',
          answer: 'Sí. Funciona para cualquier operación de citas y turnos: barberías, consultorios, spas, academias y más.',
        },
        {
          question: '¿Qué pasa si dos personas quieren el mismo horario?',
          answer: 'El sistema lo impide: cuando alguien toma un cupo, deja de estar disponible para el resto en ese mismo instante.',
        },
      ],
      ctaHeading: '¿Tu agenda se llena sola desde este mes?',
      ctaLabel: 'Cotizar mi sistema de reservas',
      whatsappPrefill: 'Hola Nexora, quiero un sistema de reservas online.',
    },
    {
      slug: 'menu-digital-qr',
      altSlug: 'qr-digital-menu',
      metaTitle: 'Menú digital QR para restaurantes | Nexora',
      metaDescription:
        'Menú digital con código QR: tu carta en línea, siempre actualizada, sin reimprimir nada. Cambias un plato o un precio y se ve al instante.',
      heading: 'Tu carta, siempre al día y sin reimprimir',
      intro:
        'Reimprimir la carta por un cambio de precio es pagar dos veces el mismo error. Con un menú digital QR la carta vive en línea: se escanea desde la mesa, carga rápido, y cualquier cambio se publica al instante.',
      includesHeading: 'Qué incluye',
      includes: [
        'Carta en línea con tu identidad: categorías, fotos, precios y descripciones.',
        'Código QR listo para imprimir en mesas, mostrador o empaques.',
        'Actualizaciones al instante: cambias un plato y se ve en el siguiente escaneo.',
        'Carga rápida pensada para el celular y para la señal del local.',
      ],
      caseStudy: {
        heading: 'Un caso: el restaurante que dejó de reimprimir',
        problem:
          'Un restaurante ajustaba precios y platos cada temporada, y cada ajuste era una reimpresión completa de cartas — con el costo y los días de espera de por medio.',
        decision:
          'Llevamos la carta a un menú digital con QR: una sola fuente en línea, administrable sin conocimientos técnicos, con las fotos y el orden que el local ya usaba.',
        result:
          'Cambios publicados en minutos y cero reimpresiones desde entonces: la carta de la mesa siempre coincide con la de la cocina.',
        demoLabel: 'Ver el demo de menú QR',
        demoUrl: demoUrls.restaurant,
      },
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Puedo cambiar precios y platos yo?',
          answer: 'Sí. La carta se administra desde un panel simple; cambias lo que necesites y queda publicado al instante.',
        },
        {
          question: '¿Funciona sin buena señal en el local?',
          answer: 'El menú está optimizado para cargar rápido incluso con conexiones lentas, que es el caso típico dentro de un local.',
        },
        {
          question: '¿Sirve también para cafeterías o food trucks?',
          answer: 'Sí. Cualquier negocio con carta o catálogo de productos puede usarlo — el QR va donde esté tu cliente.',
        },
      ],
      ctaHeading: '¿Dejamos la carta siempre al día?',
      ctaLabel: 'Cotizar mi menú digital',
      whatsappPrefill: 'Hola Nexora, quiero un menú digital QR.',
    },
    {
      slug: 'software-a-medida',
      altSlug: 'custom-software',
      metaTitle: 'Software a medida: apps y sistemas | Nexora',
      metaDescription:
        'Desarrollo de software a medida: sistemas, paneles y aplicaciones construidos alrededor de tu operación, con alcance definido y fecha exacta de entrega.',
      heading: 'El sistema exacto que tu operación necesita',
      intro:
        'Cuando las hojas de cálculo y las herramientas genéricas se quedan cortas, lo que sigue no es adaptarse a un software ajeno: es construir el propio. Diseñamos y desarrollamos sistemas, paneles y aplicaciones alrededor de la forma en que ya trabajas.',
      includesHeading: 'Qué incluye',
      includes: [
        'Levantamiento del proceso real: entendemos la operación antes de proponer pantallas.',
        'Propuesta con alcance detallado y fecha exacta de entrega.',
        'Desarrollo con avances visibles y una revisión contigo en cada hito.',
        'Entrega funcionando, con accesos y código a tu nombre.',
        'La experiencia de nuestros productos propios — Turnia y Spektova — corriendo en producción.',
      ],
      caseStudy: {
        heading: 'Un caso: la agenda del consultorio',
        problem:
          'Un consultorio coordinaba sus citas por teléfono y cuaderno: huecos sin llenar, pacientes sin recordatorio y una agenda que solo una persona sabía leer.',
        decision:
          'Construimos una agenda en línea a la medida del flujo del consultorio: los pacientes reservan solos, el equipo ve el día de un vistazo y los recordatorios salen sin que nadie los mande.',
        result:
          'Menos ausencias, una agenda legible para todo el equipo, y la recepción dedicada a recibir pacientes en vez de a perseguirlos.',
        demoLabel: 'Ver el demo de agenda para consultorio',
        demoUrl: demoUrls.clinic,
      },
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Cómo saben cuánto va a tardar?',
          answer: 'Primero entendemos el alcance; después lo escribimos en una propuesta con fecha exacta. Sin alcance definido no prometemos fechas — y por eso las cumplimos.',
        },
        {
          question: '¿Puedo empezar por algo chico?',
          answer: 'Sí, y suele ser lo recomendable: un primer módulo que resuelva el dolor más caro, y crecer desde ahí con el sistema ya en uso.',
        },
        {
          question: '¿El código queda a mi nombre?',
          answer: 'Sí. Código, dominio y accesos quedan a tu nombre — el proyecto es tuyo, también en los papeles.',
        },
      ],
      ctaHeading: '¿Conversamos sobre tu operación?',
      ctaLabel: 'Cotizar mi sistema',
      whatsappPrefill: 'Hola Nexora, necesito un sistema a medida.',
    },
  ],

  // ── Fase 12 · C3 · La página de gracias: el momento medible de la conversión ──
  thanks: {
    metaTitle: 'Gracias | Nexora',
    heading: '¡Gracias por escribirnos!',
    body:
      'Tu mensaje ya está en camino por WhatsApp. Te respondemos en menos de 24 horas hábiles — mientras tanto, puedes seguir mirando nuestros trabajos.',
    backLabel: 'Volver al inicio',
  },

  // ── Fase 12 · decisión D · Privacidad: GA4 no recolecta sin política publicada ─
  privacy: {
    metaTitle: 'Política de privacidad | Nexora',
    metaDescription:
      'Política de privacidad de Nexora Software: qué datos se recogen en este sitio, para qué se usan y cómo ejercer tus derechos.',
    heading: 'Política de privacidad',
    updated: 'Última actualización: 17 de agosto de 2026',
    sections: [
      {
        heading: 'Quiénes somos',
        body: [
          'Este sitio pertenece a Nexora Software, un estudio de software con base en Guayaquil, Ecuador. Puedes contactarnos en hola@nexoradevs.com.',
        ],
      },
      {
        heading: 'Qué datos recogemos',
        body: [
          'Este sitio no tiene cuentas de usuario ni formularios que guarden datos en nuestros servidores. Cuando usas el formulario de contacto, el mensaje se arma en tu propio dispositivo y se envía por WhatsApp desde tu aplicación: nosotros recibimos únicamente lo que decides enviarnos por ese chat.',
          'Usamos Google Analytics 4 para medir visitas de forma agregada: qué páginas se ven y desde qué tipo de dispositivo. Esta medición usa cookies con identificadores seudónimos y no la usamos para identificarte.',
        ],
      },
      {
        heading: 'Para qué los usamos',
        body: [
          'Los datos de contacto que nos envías por WhatsApp o correo se usan solo para responderte y preparar tu propuesta. La medición de visitas se usa solo para mejorar el sitio.',
          'No vendemos ni compartimos tus datos con terceros para publicidad.',
        ],
      },
      {
        heading: 'Servicios de terceros',
        body: [
          'Este sitio se aloja en Vercel y usa Google Analytics (medición) y Google Fonts (tipografías). WhatsApp procesa los mensajes que decides enviarnos por ese canal según sus propias políticas.',
          'Estos proveedores operan desde Estados Unidos, por lo que los datos de medición se procesan fuera del Ecuador con las salvaguardas contractuales de cada uno.',
        ],
      },
      {
        heading: 'Tus derechos',
        body: [
          'Puedes pedirnos acceso, corrección o eliminación de los datos que nos hayas enviado escribiendo a hola@nexoradevs.com. Respondemos dentro de los plazos que establece la Ley Orgánica de Protección de Datos Personales del Ecuador.',
        ],
      },
    ],
    contactLine: '¿Dudas sobre esta política? Escríbenos a hola@nexoradevs.com.',
  },

  // ── Fase 12 · B1 · La 404 propia: con marca y salida, no un callejón ──────────
  notFound: {
    heading: 'Esta página no existe',
    body: 'El enlace puede estar mal escrito o la página ya no está. Lo que sí está: nuestros trabajos, el proceso y el contacto — todo en el inicio.',
    backLabel: 'Ir al inicio',
  },
};
