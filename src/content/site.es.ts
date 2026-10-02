/**
 * Spanish content (default locale, Ecuador market).
 *
 * Why: every Spanish string the site renders lives here, typed against
 * `SiteContent` so it stays in lockstep with the English mirror. NO prices,
 * plans, amounts or tiers anywhere — by editorial rule, not just omission.
 * Past employers appear only under `about.experience` (background), never as
 * clients in `works`. Demo URLs come from `site.config.ts` (single source).
 *
 * Voz (rediseño 2026-10-01): formal, de plataforma a usuario. Se habla como
 * estudio ("nosotros" o impersonal — nunca "yo", nunca una persona con nombre)
 * y al lector de **usted** ("Contáctenos", "su proyecto"), nunca de tú. El texto
 * dice lo que se ofrece: sin comparaciones ("no es X, sino Y", "sin plantillas")
 * y sin prometer plazos ("en pocos días") — la fecha se establece en la propuesta.
 *
 * Audience is deliberately open: the reader may be an individual, a freelancer
 * or a company, so no string assumes "su negocio" / "su empresa". Se habla del
 * proyecto, nunca de lo que el lector es — the mixed audience is signalled
 * implicitly (via `niches`), never stated.
 *
 * The city appears ONLY in `footer.tagline`; no other string says where Nexora
 * is based.
 */
import type { SiteContent } from './types';
import { demoPreviews, demoUrls, productUrls, social } from '../config/site.config';

export const siteEs: SiteContent = {
  meta: {
    title: 'Nexora · Estudio de software | Desarrollo de páginas web, sistemas y aplicaciones',
    description:
      'Estudio de software. Diseño y desarrollo de páginas web, sistemas y aplicaciones a medida, con alcance y fecha de entrega establecidos en la propuesta.',
    ogAlt: 'Nexora — Estudio de software',
  },

  nav: [
    { label: 'Servicios', anchor: 'servicios' },
    { label: 'Proyectos', anchor: 'demos' },
    { label: 'Proceso', anchor: 'proceso' },
    { label: 'Trayectoria', anchor: 'estudio' },
    { label: 'Preguntas frecuentes', anchor: 'faq' },
  ],

  sections: {
    services: {
      eyebrow: 'Servicios',
      heading: 'Lo que desarrollamos',
    },
    works: {
      eyebrow: 'Proyectos',
      heading: 'Demos y proyectos reales',
      subheading: 'Proyectos desarrollados por Nexora, disponibles para su consulta.',
    },
    process: {
      eyebrow: 'Proceso',
      heading: 'Cómo trabajamos',
    },
    niches: {
      eyebrow: 'Sectores',
      heading: 'Con quiénes trabajamos',
    },
    about: {
      eyebrow: 'Sobre Nexora',
      heading: 'Trayectoria en desarrollo de software',
    },
    faq: {
      eyebrow: 'Consultas',
      heading: 'Preguntas frecuentes',
    },
  },

  hero: {
    eyebrow: 'Estudio de software',
    headline: 'Desarrollo de páginas web, sistemas y aplicaciones.',
    subheadline:
      'Nexora es un estudio de software que diseña y desarrolla páginas web, sistemas y aplicaciones a medida. Cada proyecto se define a partir de sus requerimientos y se entrega en la fecha establecida en la propuesta.',
    ctaPrimary: 'Contáctenos',
    ctaSecondary: 'Ver proyectos',
    proposalEyebrow: 'Propuesta',
    proposalHeading: 'Lo que se entrega por escrito',
    proposalItems: [
      'Levantamiento de requerimientos',
      'Flujos y alcance del proyecto',
      'Fecha de entrega',
      'Revisión de avances en cada hito',
      'Dos rondas de cambios incluidas',
      'Primer mes de ajustes incluido',
      'Dominio y accesos a nombre del cliente',
    ],
  },

  services: [
    {
      title: 'Web y landing profesional',
      benefit: 'Sitios rápidos y claros, optimizados para buscadores y orientados a convertir visitas en clientes.',
      pageSlug: 'web-profesional',
    },
    {
      title: 'Menú digital QR',
      benefit: 'Carta en línea que se actualiza al instante y se consulta desde un código QR.',
      pageSlug: 'menu-digital-qr',
    },
    {
      title: 'Sistema de reservas',
      benefit: 'Gestión automática de turnos y recepción de reservas las 24 horas.',
      pageSlug: 'sistema-de-reservas',
    },
    {
      title: 'Catálogo + WhatsApp',
      benefit: 'Catálogo completo en un solo enlace, con pedidos que llegan directamente a WhatsApp.',
    },
    {
      title: 'Portafolio profesional',
      benefit: 'Presentación del trabajo profesional con el nivel que requiere.',
    },
    {
      title: 'Panel de membresías',
      benefit: 'Control de pagos, vencimientos y accesos de socios en tiempo real.',
    },
    {
      title: 'Apps y sistemas a medida',
      benefit: 'Diseño y desarrollo del sistema que la operación requiere, integrado a su forma de trabajo.',
      pageSlug: 'software-a-medida',
    },
  ],

  servicesCta: {
    heading: '¿Necesita un desarrollo a medida?',
    label: 'Contáctenos',
  },

  // Turnia va primero: es el único producto propio en operación y se presenta como
  // un proyecto más, no en un bloque aparte de "productos".
  works: [
    {
      title: 'Turnia',
      clientType: 'Producto propio',
      badge: 'En producción',
      result: 'Plataforma de reservas y agenda para negocios que trabajan con turnos y citas.',
      url: productUrls.turnia,
      image: demoPreviews.turnia,
      linkLabel: 'Ver proyecto',
    },
    {
      title: 'Barbería con reservas en línea',
      clientType: 'Barbería',
      result: 'Reservas las 24 horas, sin atención telefónica.',
      url: demoUrls.barbershop,
      image: demoPreviews.barbershop,
    },
    {
      title: 'Menú digital QR para restaurante',
      clientType: 'Restaurante',
      result: 'Menú que se actualiza sin reimpresiones.',
      url: demoUrls.restaurant,
      image: demoPreviews.restaurant,
    },
    {
      title: 'Agenda para consultorio',
      clientType: 'Consultorio médico',
      result: 'Pacientes que reservan su cita en línea.',
      url: demoUrls.clinic,
      image: demoPreviews.clinic,
    },
    {
      title: 'Landing para evento',
      clientType: 'Organizador de eventos',
      result: 'Inscripciones y confirmaciones en un solo enlace.',
      url: demoUrls.event,
      image: demoPreviews.event,
    },
    {
      title: 'Sitio corporativo para PYME',
      clientType: 'Empresa de servicios',
      result: 'Presencia profesional en buscadores.',
      url: demoUrls.corporate,
      image: demoPreviews.corporate,
    },
  ],

  process: [
    { step: '01', title: 'Contacto', description: 'Recepción de la necesidad del proyecto.' },
    { step: '02', title: 'Propuesta', description: 'Requerimientos, flujos, alcance y fecha de entrega.' },
    { step: '03', title: 'Desarrollo', description: 'Avances visibles y revisión en cada hito.' },
    { step: '04', title: 'Entrega', description: 'Proyecto en funcionamiento, con dominio y accesos a nombre del cliente.' },
  ],

  // Orden editorial: de mayor a menor escala.
  niches: [
    { label: 'Empresas y startups' },
    { label: 'Consultorios y clínicas' },
    { label: 'Eventos' },
    { label: 'Gimnasios y academias' },
    { label: 'Restaurantes y cafeterías' },
    { label: 'Tiendas y boutiques' },
    { label: 'Barberías y peluquerías' },
    { label: 'Profesionales independientes' },
  ],

  about: {
    heading: 'Trayectoria en desarrollo de software',
    body:
      'Nexora trabaja con clientes de cualquier país. El conocimiento del estudio proviene de años de desarrollo en banca, producto y software en producción, y respalda cada proyecto que se entrega.',
    // Trayectoria profesional real del equipo, NO clientes de Nexora.
    // Orden: más reciente primero.
    experience: [
      { company: 'Fiverr', role: 'Desarrollo freelance', period: '2021 — actualidad' },
      { company: 'Relolink', role: 'Desarrollo full-stack', period: 'abr. 2024 — actualidad' },
      { company: 'Banco de Machala', role: 'Arquitectura de software', period: 'ago. 2023 — abr. 2024' },
      { company: 'Viamatica', role: 'Ingeniería de software', period: 'feb. 2021 — abr. 2024' },
    ],
    links: [
      { label: 'Portafolio', href: social.portfolio, icon: 'ui-github' },
      { label: 'LinkedIn', href: social.linkedin, icon: 'ui-external' },
      { label: 'Fiverr', href: social.fiverr, icon: 'ui-external' },
    ],
  },

  pillars: [
    { stat: '+5 años', label: 'de experiencia en desarrollo de software' },
    { stat: 'Proceso definido', label: 'requerimientos, propuesta, desarrollo y entrega' },
    { stat: 'Fecha de entrega', label: 'establecida por escrito en cada propuesta' },
  ],

  faq: [
    {
      question: '¿Cuál es el tiempo de entrega?',
      answer: 'La fecha de entrega se establece en la propuesta, de acuerdo con los requerimientos de cada proyecto.',
    },
    {
      question: '¿Cuál es el costo de un proyecto?',
      answer: 'Cada proyecto se cotiza a medida. Con los requerimientos recibidos por WhatsApp o por correo se prepara una propuesta.',
    },
    {
      question: '¿Cómo se realizan los pagos?',
      answer: 'La mitad al iniciar el proyecto y la mitad antes de la publicación.',
    },
    {
      question: '¿El servicio incluye mantenimiento?',
      answer: 'El primer mes de ajustes está incluido. Después es posible contratar mantenimiento mensual.',
    },
    {
      question: '¿A nombre de quién queda el dominio?',
      answer: 'Nexora gestiona el dominio o utiliza el que el cliente ya tenga. El dominio y los accesos quedan a nombre del cliente.',
    },
    {
      question: '¿Cuántos cambios se pueden solicitar?',
      answer: 'El desarrollo incluye dos rondas de cambios.',
    },
    {
      question: '¿Trabajan con clientes de otros países?',
      answer: 'Sí. Nexora trabaja con clientes de cualquier país y coordina cada proyecto por WhatsApp o por correo.',
    },
  ],

  contact: {
    heading: 'Contáctenos',
    // C1 (fase 12): promesa CONCRETA — "a la brevedad" no promete nada. El plazo es el S6 del
    // plan del estudio y tiene que poder cumplirse; si cambia, cambia acá y en site.en.ts.
    subheading:
      'Escríbanos por WhatsApp o por correo electrónico con los requerimientos de su proyecto. Respondemos en menos de 24 horas hábiles.',
    form: {
      nameLabel: 'Nombre',
      businessTypeLabel: 'Actividad o empresa',
      needLabel: 'Requerimiento',
      namePlaceholder: 'Nombre y apellido',
      businessTypePlaceholder: 'Sector o nombre de la empresa',
      needPlaceholder: 'Descripción breve del proyecto',
      submitLabel: 'Enviar por WhatsApp',
    },
    whatsappCtaLabel: 'WhatsApp',
    emailCtaLabel: 'Correo electrónico',
    channelsHeading: 'Escríbanos',
    channelsBody: 'Atendemos consultas por WhatsApp y por correo electrónico.',
    whatsappPrefill: 'Hola Nexora, solicito información sobre un proyecto.',
    vcardLabel: 'Guardar contacto',
    prefillTemplate: 'Hola, soy {name} ({businessType}). Requerimiento: {need}',
  },

  footer: {
    tagline: 'Estudio de software · Guayaquil, Ecuador',
    rights: '© 2026 Nexora Software. Todos los derechos reservados.',
    localSignal: 'RUC y factura disponibles.',
  },

  ui: {
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    switchLanguage: 'Cambiar a inglés',
    skipToContent: 'Saltar al contenido',
    viewDemo: 'Ver demo',
    faqMoreQuestion: '¿Tiene otra consulta? Contáctenos',
    experienceLabel: 'Trayectoria',
    viewService: 'Ver servicio',
    breadcrumbHome: 'Inicio',
    breadcrumbsLabel: 'Ubicación en el sitio',
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
        'Diseño y desarrollo de páginas web profesionales: rápidas, claras y orientadas a convertir visitas en clientes, con dominio a nombre del cliente.',
      heading: 'Páginas web profesionales',
      intro:
        'Nexora diseña y desarrolla sitios web y landings a medida, rápidos y claros, para que el visitante comprenda la oferta y se ponga en contacto.',
      includesHeading: 'Qué incluye',
      includes: [
        'Diseño a medida, alineado a la identidad y al objetivo del proyecto.',
        'Optimización para buscadores desde el primer día: títulos, descripciones y datos estructurados.',
        'Carga rápida y diseño adaptado a teléfono y computadora.',
        'Dominio y accesos a nombre del cliente.',
        'Un mes de ajustes incluido después de la publicación.',
      ],
      caseStudy: {
        heading: 'Caso: presencia profesional para una PYME',
        problem:
          'Una empresa de servicios no aparecía en Google: su única presencia era una página en redes sociales, y quienes la buscaban por su nombre no encontraban un sitio que la respaldara.',
        decision:
          'Se construyó un sitio corporativo claro: qué hace la empresa, para quién y cómo contactarla, con la estructura técnica que requieren los buscadores.',
        result:
          'Presencia profesional en línea, preparada para aparecer en las búsquedas de la marca y respaldar cada cotización con un enlace propio.',
        demoLabel: 'Ver el demo de sitio corporativo',
        demoUrl: demoUrls.corporate,
      },
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Cuál es el tiempo de entrega de una página web?',
          answer: 'La fecha de entrega se establece en la propuesta, de acuerdo con el número de páginas e integraciones del proyecto.',
        },
        {
          question: '¿Es posible actualizar el sitio después de la entrega?',
          answer: 'Sí. El sitio se entrega preparado para solicitar cambios o realizarlos directamente; el primer mes de ajustes está incluido.',
        },
        {
          question: '¿Incluye dominio y hosting?',
          answer: 'Nexora gestiona ambos o utiliza los que el cliente ya tenga. En todos los casos, los accesos quedan a nombre del cliente.',
        },
      ],
      ctaHeading: 'Solicite la propuesta para su página web',
      ctaLabel: 'Solicitar propuesta',
      whatsappPrefill: 'Hola Nexora, solicito información sobre una página web profesional.',
    },
    {
      slug: 'sistema-de-reservas',
      altSlug: 'booking-system',
      metaTitle: 'Sistema de reservas en línea | Nexora',
      metaDescription:
        'Sistema de reservas en línea para citas y turnos: recepción de reservas las 24 horas, con confirmaciones y recordatorios automáticos.',
      heading: 'Sistema de reservas en línea',
      intro:
        'El sistema recibe reservas a cualquier hora, las confirma y envía recordatorios de forma automática. Quien reserva ve únicamente los horarios disponibles.',
      includesHeading: 'Qué incluye',
      includes: [
        'Página de reservas propia: servicio, profesional y horario, sin cuentas ni descargas.',
        'Confirmaciones y recordatorios automáticos por correo.',
        'Agenda administrable: horarios, servicios y equipo se gestionan desde un panel.',
        'Control de cupos: un mismo horario no se reserva dos veces.',
        'Respaldado por Turnia, la plataforma de reservas de Nexora, en producción.',
      ],
      caseStudy: {
        heading: 'Caso: barbería con reservas en línea',
        problem:
          'Una barbería perdía reservas cuando el equipo estaba ocupado atendiendo: las llamadas quedaban sin respuesta.',
        decision:
          'Se publicó su página de reservas en línea: los clientes eligen barbero, servicio y horario desde el celular, y la agenda se administra desde un panel.',
        result:
          'Reservas las 24 horas, sin interrumpir la atención, también fuera del horario del local.',
        demoLabel: 'Ver el demo de barbería con reservas',
        demoUrl: demoUrls.barbershop,
      },
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Los clientes deben crear una cuenta?',
          answer: 'No. Reservan con su nombre y su teléfono, y reciben por correo la confirmación con lo necesario para modificar o cancelar la cita.',
        },
        {
          question: '¿Es aplicable a consultorios, spas o gimnasios?',
          answer: 'Sí. Funciona para cualquier operación de citas y turnos: barberías, consultorios, spas, academias y otros.',
        },
        {
          question: '¿Qué ocurre si dos personas solicitan el mismo horario?',
          answer: 'El sistema lo impide: cuando un cupo se reserva, deja de estar disponible para los demás en ese mismo instante.',
        },
      ],
      ctaHeading: 'Solicite la propuesta para su sistema de reservas',
      ctaLabel: 'Solicitar propuesta',
      whatsappPrefill: 'Hola Nexora, solicito información sobre un sistema de reservas en línea.',
    },
    {
      slug: 'menu-digital-qr',
      altSlug: 'qr-digital-menu',
      metaTitle: 'Menú digital QR para restaurantes | Nexora',
      metaDescription:
        'Menú digital con código QR: la carta en línea, siempre actualizada. Cada cambio de plato o de precio se publica al instante.',
      heading: 'Menú digital con código QR',
      intro:
        'La carta se publica en línea, se consulta desde un código QR en la mesa y cualquier cambio queda visible al instante.',
      includesHeading: 'Qué incluye',
      includes: [
        'Carta en línea con la identidad del local: categorías, fotos, precios y descripciones.',
        'Código QR listo para imprimir en mesas, mostrador o empaques.',
        'Actualización inmediata: cada cambio se ve en el siguiente escaneo.',
        'Carga rápida, optimizada para el celular y para la señal del local.',
      ],
      caseStudy: {
        heading: 'Caso: restaurante con carta digital',
        problem:
          'Un restaurante ajustaba precios y platos cada temporada, y cada ajuste implicaba reimprimir todas las cartas.',
        decision:
          'La carta se trasladó a un menú digital con QR: una sola fuente en línea, administrable sin conocimientos técnicos, con las fotos y el orden que el local ya utilizaba.',
        result:
          'Cambios publicados en minutos y una carta que siempre coincide con la de la cocina.',
        demoLabel: 'Ver el demo de menú QR',
        demoUrl: demoUrls.restaurant,
      },
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿El local puede modificar precios y platos?',
          answer: 'Sí. La carta se administra desde un panel; cada cambio queda publicado al instante.',
        },
        {
          question: '¿Funciona con señal limitada dentro del local?',
          answer: 'El menú está optimizado para cargar con rapidez también en conexiones lentas.',
        },
        {
          question: '¿Es aplicable a cafeterías o food trucks?',
          answer: 'Sí. Cualquier negocio con carta o catálogo de productos puede utilizarlo.',
        },
      ],
      ctaHeading: 'Solicite la propuesta para su menú digital',
      ctaLabel: 'Solicitar propuesta',
      whatsappPrefill: 'Hola Nexora, solicito información sobre un menú digital QR.',
    },
    {
      slug: 'software-a-medida',
      altSlug: 'custom-software',
      metaTitle: 'Software a medida: apps y sistemas | Nexora',
      metaDescription:
        'Desarrollo de software a medida: sistemas, paneles y aplicaciones construidos alrededor de la operación, con alcance definido y fecha de entrega.',
      heading: 'Software a medida: sistemas y aplicaciones',
      intro:
        'Nexora diseña y desarrolla sistemas, paneles y aplicaciones construidos alrededor de la operación de cada cliente y de su forma de trabajo.',
      includesHeading: 'Qué incluye',
      includes: [
        'Levantamiento del proceso: se analiza la operación antes de definir pantallas.',
        'Propuesta con requerimientos, flujos, alcance y fecha de entrega.',
        'Desarrollo con avances visibles y revisión en cada hito.',
        'Entrega en funcionamiento, con accesos y código a nombre del cliente.',
        'El respaldo de Turnia, producto propio de Nexora en producción.',
      ],
      caseStudy: {
        heading: 'Caso: agenda para un consultorio',
        problem:
          'Un consultorio coordinaba sus citas por teléfono y cuaderno: horarios sin ocupar, pacientes sin recordatorio y una agenda que solo una persona podía interpretar.',
        decision:
          'Se construyó una agenda en línea ajustada al flujo del consultorio: los pacientes reservan en línea, el equipo consulta el día completo y los recordatorios se envían de forma automática.',
        result:
          'Menos ausencias y una agenda legible para todo el equipo.',
        demoLabel: 'Ver el demo de agenda para consultorio',
        demoUrl: demoUrls.clinic,
      },
      faqHeading: 'Preguntas frecuentes',
      faq: [
        {
          question: '¿Cómo se determina el plazo?',
          answer: 'Primero se define el alcance; después se documenta en una propuesta con fecha de entrega.',
        },
        {
          question: '¿Es posible iniciar con un alcance reducido?',
          answer: 'Sí. Es habitual iniciar con un primer módulo y ampliar el sistema una vez que está en uso.',
        },
        {
          question: '¿El código queda a nombre del cliente?',
          answer: 'Sí. Código, dominio y accesos quedan a nombre del cliente.',
        },
      ],
      ctaHeading: 'Solicite la propuesta para su sistema',
      ctaLabel: 'Solicitar propuesta',
      whatsappPrefill: 'Hola Nexora, solicito información sobre un sistema a medida.',
    },
  ],

  // ── Fase 12 · C3 · La página de gracias: el momento medible de la conversión ──
  thanks: {
    metaTitle: 'Gracias | Nexora',
    heading: 'Gracias por escribirnos',
    body: 'Su mensaje fue enviado por WhatsApp. Respondemos en menos de 24 horas hábiles.',
    backLabel: 'Volver al inicio',
  },

  // ── Fase 12 · decisión D · Privacidad: GA4 no recolecta sin política publicada ─
  privacy: {
    metaTitle: 'Política de privacidad | Nexora',
    metaDescription:
      'Política de privacidad de Nexora Software: qué datos se recogen en este sitio, para qué se usan y cómo ejercer los derechos sobre ellos.',
    heading: 'Política de privacidad',
    updated: 'Última actualización: 17 de agosto de 2026',
    sections: [
      {
        heading: 'Quiénes somos',
        body: [
          'Este sitio pertenece a Nexora Software, un estudio de software con base en Guayaquil, Ecuador. El correo de contacto es hola@nexoradevs.com.',
        ],
      },
      {
        heading: 'Qué datos recogemos',
        body: [
          'Este sitio no tiene cuentas de usuario ni formularios que guarden datos en nuestros servidores. Cuando se utiliza el formulario de contacto, el mensaje se arma en el dispositivo del usuario y se envía por WhatsApp desde su aplicación: Nexora recibe únicamente lo que el usuario decide enviar por ese chat.',
          'Usamos Google Analytics 4 para medir visitas de forma agregada: qué páginas se ven y desde qué tipo de dispositivo. Esta medición usa cookies con identificadores seudónimos y no se utiliza para identificar a los usuarios.',
        ],
      },
      {
        heading: 'Para qué los usamos',
        body: [
          'Los datos de contacto enviados por WhatsApp o por correo se usan únicamente para responder y preparar la propuesta. La medición de visitas se usa únicamente para mejorar el sitio.',
          'No vendemos ni compartimos datos con terceros con fines publicitarios.',
        ],
      },
      {
        heading: 'Servicios de terceros',
        body: [
          'Este sitio se aloja en Vercel y usa Google Analytics (medición) y Google Fonts (tipografías). WhatsApp procesa los mensajes que el usuario decide enviar por ese canal según sus propias políticas.',
          'Estos proveedores operan desde Estados Unidos, por lo que los datos de medición se procesan fuera del Ecuador con las salvaguardas contractuales de cada uno.',
        ],
      },
      {
        heading: 'Derechos del usuario',
        body: [
          'El usuario puede solicitar acceso, corrección o eliminación de los datos enviados escribiendo a hola@nexoradevs.com. Respondemos dentro de los plazos que establece la Ley Orgánica de Protección de Datos Personales del Ecuador.',
        ],
      },
    ],
    contactLine: 'Para consultas sobre esta política, escriba a hola@nexoradevs.com.',
  },

  // ── Fase 12 · B1 · La 404 propia: con marca y salida, no un callejón ──────────
  notFound: {
    heading: 'Esta página no existe',
    body: 'El enlace puede estar mal escrito o la página ya no está disponible. Los servicios, los proyectos y el contacto se encuentran en el inicio.',
    backLabel: 'Ir al inicio',
  },
};
