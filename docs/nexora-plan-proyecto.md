# Nexora — Plan del Proyecto: Página de Servicios

> Documento maestro del proyecto de la landing comercial de Nexora. Consolida la antigua "definición" + "plan de proyecto" en una sola fuente para que no se desincronicen.
> **Relacionados:** para la operación del negocio (captación, ventas, entrega, políticas) ver `nexora-manual-operaciones.md`. Para construir el sitio, usar `nexora-prompt-claude-code.md`. Identidad en `/nexora-brand/` (Claude Design).

---

## 1. Qué es este proyecto

Una landing comercial de una sola página, bilingüe, faceless, cuyo único objetivo es **convertir visitantes en mensajes de contacto calificados**. Es el frente de venta de Nexora.

**No es** el portafolio de desarrollador de GitHub Pages (ese es para reclutadores).

| Atributo | Valor |
|---|---|
| Tipo | Landing one-page, conversión |
| Idiomas | Español (default) + Inglés, con autodetección |
| Stack | Astro + Tailwind + React (islas) + TypeScript |
| Deploy | Vercel (hobby, gratis) |
| Meta | Mensajes de contacto calificados / semana |
| Identidad | Carpeta `/nexora-brand/` (Claude Design) |
| **Precios** | **No se muestran. Cotización privada por lead.** |

### Decisión clave: sin precios
La página no muestra precios, planes ni montos. Nexora vende a Ecuador y a EE.UU. (poder adquisitivo muy distinto); un precio visible o asusta al local o deja corto al internacional. Todo funnelea a "cuéntame tu proyecto" y la cotización se hace en privado. La confianza la dan los trabajos, los resultados y la experiencia.

---

## 2. Marca (resumen)

**Nexora · Estudio de Software.** Casa de software formal que construye webs, sistemas y aplicaciones para empresas; marca paraguas de los productos propios (Faktova, Turnia). Nombre de *nexus* (conexión/integración). Activo central: **confianza** (experiencia real + productos propios). Faceless: marca, no persona; se habla de "nuestro proceso". Tono confiado, claro, vende resultados, bilingüe (español primero).

Paleta: navy `#0B1530` + azul eléctrico `#2563EB` + cian `#22D3EE` + gris `#5B6470` + casi-blanco `#F8FAFC`. Tipografía: Space Grotesk (títulos) + Inter (texto). Isotipo: monograma "N" de nodos conectados.

---

## 3. Servicios (cara al cliente, sin precios)

| Servicio | Dolor que resuelve | Para quién |
|---|---|---|
| Web / Landing profesional | "No existo en Google, mi competencia sí" | Cualquier negocio |
| Menú digital QR | "Imprimir menús y no poder actualizar precios" | Restaurantes, cafeterías |
| Sistema de reservas | "Pierdo horas contestando '¿hay turno?'" | Barberías, clínicas, gimnasios |
| Catálogo + WhatsApp | "Vendo por Instagram y es un desorden" | Tiendas, boutiques |
| Portfolio profesional | "Mi trabajo es bueno pero no se ve serio" | Tatuadores, fotógrafos, creativos |
| Panel de membresías | "No sé quién pagó ni quién está vencido" | Gimnasios, academias, clubes |
| Apps / sistemas a medida | "Necesito algo que no existe llave en mano" | Empresas, startups |

---

## 4. Estructura de la página (modelo agencia, 9 secciones)

Inspirada en cómo presentan los estudios/agencias serios: trabajo y resultados al frente, precio en privado.

### 01 — Hero
- **Copy ES:** "Páginas web, sistemas y aplicaciones para tu negocio, listos en 3-5 días."
- **Copy EN:** "Websites, systems and apps for your business, live in 3-5 days."
- **CTAs:** `Cuéntame tu proyecto` (a contacto) / `Ver trabajos` (ancla a 03). Toggle de idioma en el header.

### 02 — Servicios
Las 7 tarjetas (sección 3): ícono + dolor que resuelve. Sin precios.

### 03 — Trabajos / Casos
Núcleo de confianza. **Solo trabajo propio de Nexora:** demos reales (barbería, restaurante, consultorio, evento) + proyectos freelance. Cada tarjeta: título, tipo de cliente, una línea de resultado, link a la demo cuando exista. **Los empleos previos NO van aquí** (son trayectoria → van en "Sobre Nexora").

### 04 — Proceso
4 pasos: **Contacto → Propuesta (cotización a medida) → Desarrollo → Entrega.**

### 05 — Para quién / Industrias
Grid de nichos: barberías, restaurantes, consultorios, gimnasios, tiendas, eventos, empresas.

### 06 — Sobre Nexora
Bio faceless. Aquí va la **trayectoria profesional** (Relolink, Banco de Machala, Viamatica) enmarcada como dónde ha trabajado el desarrollador —no como clientes—, productos propios (Faktova, Turnia), señales locales (RUC, factura). Nombre de pila para confianza; sin foto.

### 07 — Por qué Nexora
3 pilares / cifras de confianza (ej.: +5 años de experiencia · proyectos entregados · entrega en días, no meses). Reaprovecha el layout de la antigua sección de precios. Sin precios.

### 08 — FAQ (acordeón)
Mata objeciones alineadas a las políticas del manual: tiempo de entrega, qué cubre el mantenimiento, dominio (quién lo pone), formas de pago (50/50), rondas de cambios (2), y "¿cuánto cuesta?" → "cada proyecto es a medida; escríbeme y te cotizo".

### 09 — Contacto
Formulario corto (nombre, tipo de negocio, qué necesita) que **arma un mensaje de WhatsApp pre-llenado** (sin backend) + botón directo de WhatsApp + vCard descargable.

**Testimonios:** bloque opcional por array; se renderiza solo si hay contenido (nunca un placeholder vacío).

---

## 5. Arquitectura del proyecto

```
/
├── nexora-brand/                # input de Claude Design (identidad, tokens, mockups)
├── public/{favicon.svg, nexora.vcf}
├── src/
│   ├── assets/{logo,icons}/     # SVGs copiados de nexora-brand/
│   ├── components/              # Hero, Services, Works, Process, Niches, About,
│   │                            # WhyNexora, Testimonials, Faq, Contact, QuoteForm,
│   │                            # Header, Footer, LanguageToggle
│   ├── content/
│   │   ├── types.ts             # interface compartida (copy + listas)
│   │   ├── site.es.ts           # copy ES + listas
│   │   └── site.en.ts           # copy EN + listas
│   ├── config/site.config.ts    # WhatsApp, demo URLs, handles, analytics id
│   ├── layouts/BaseLayout.astro
│   ├── middleware.ts            # autodetección de idioma (primera visita)
│   ├── pages/{index.astro, en/index.astro}
│   └── styles/global.css        # variables CSS en :root (desde tokens)
├── tailwind.config.mjs          # theme.extend desde nexora-brand/tokens/
├── astro.config.mjs
└── README.md                    # dónde cambiar colores / contenido / config
```

---

## 6. Parametrización (requisito central)

Todo cambiable desde un solo lugar, sin tocar componentes:

- **Tema (colores, tipografía, espaciado):** tokens de `/nexora-brand/tokens/` → Tailwind `theme.extend` + variables CSS en `:root` (`--color-navy`, `--color-accent`, etc.). Cambiar un hex recolorea todo el sitio.
- **Contenido:** todo el copy y todas las listas en `site.es.ts` / `site.en.ts` como datos tipados (`hero`, `services[]`, `works[]`, `process[]`, `niches[]`, `about` con `experience[]`, `pillars[]`, `faq[]`, `contact`, `testimonials[]`). Agregar un item = una línea en un array.
- **Config:** WhatsApp, URLs de demos, handles, analytics en `site.config.ts`.

---

## 7. Comportamiento bilingüe (con autodetección)

- **Detección automática en la primera visita** (navegador / `Accept-Language`) → redirección suave a `/en/` si corresponde.
- **Override manual siempre visible** (toggle) y elección recordada (cookie). Nunca forzar: un latino en EE.UU. puede quedarse en español aunque su navegador esté en inglés.
- El idioma cambia solo el copy (ya no hay precios por idioma).
- WhatsApp deep-link con mensaje pre-armado por idioma, ensamblado con los campos del formulario (también sirve para que un futuro bot detecte el idioma).

---

## 8. Integraciones y SEO

| Integración | Detalle |
|---|---|
| WhatsApp | `https://wa.me/<número>?text=<mensaje>`, número en config, mensaje por idioma |
| Formulario → WhatsApp | Arma el mensaje en el cliente (sin backend, $0) |
| Analítica | Evento en cada clic de WhatsApp/contacto (es la única conversión, debe medirse) |
| vCard | `.vcf` descargable en sección 09 |
| SEO | `hreflang` ES/EN, `sitemap.xml`, `<title>`/meta por idioma, canonical, Open Graph |

---

## 9. Add-on opcional: Bot de WhatsApp (resumen)

No va en el build del sitio (es infraestructura aparte). Detalle de costos y fases en el **manual de operaciones**. En corto: responder a quien te escribe primero cae en la ventana gratis de 24 h; Fase 0 con la app de WhatsApp Business ($0), Fase 1 con la Cloud API oficial sobre un VPS (~$6/mes). El bot detecta el idioma del primer mensaje (que ya hereda del sitio).

---

## 10. Fases de desarrollo

| Fase | Tareas | Entregable |
|---|---|---|
| **F0 — Identidad** | `/nexora-brand/` ya generada por Claude Design | Carpeta de marca lista |
| **F1 — Scaffold** | Astro + Tailwind + React + TS; tokens → Tailwind + `:root`; fonts | Base corriendo |
| **F2 — Contenido** | `types.ts` + `site.es.ts` + `site.en.ts` + `site.config.ts` | Copy y listas centralizados |
| **F3 — Secciones** | Construir 01-09 según mockups (07 y 03 reinterpretados) + testimonios opcional | Página completa |
| **F4 — Interacción** | Autodetección + toggle, FAQ, formulario→WhatsApp, vCard, analítica, OG, hreflang, sitemap | Funcionalidad completa |
| **F5 — Pulido** | Accesibilidad, Lighthouse, responsive, SEO | Listo para deploy |
| **F6 — Deploy** | Vercel + dominio | En producción |

---

## 11. Checklist de salida (definition of done)

- [ ] No hay precios, planes ni montos en ninguna parte.
- [ ] Empleos previos aparecen solo como trayectoria en "Sobre Nexora", nunca como clientes en "Trabajos".
- [ ] Autodetección de idioma en primera visita + toggle manual que la sobrescribe y se recuerda.
- [ ] Hero comunica valor + CTA en < 10 s en móvil.
- [ ] Las 9 secciones coinciden con los mockups (07 y 03 reinterpretados).
- [ ] La sección de testimonios se muestra solo si el array tiene contenido.
- [ ] El formulario de contacto arma bien el mensaje de WhatsApp.
- [ ] El clic en WhatsApp dispara un evento de analítica.
- [ ] `hreflang` ES/EN y sitemap presentes; OG correcto al compartir.
- [ ] vCard descarga bien y los Trabajos enlazan a demos reales.
- [ ] Cambiar un color desde tokens recolorea todo el sitio.
- [ ] Ningún copy/contenido hardcodeado fuera de `src/content/`.
- [ ] Lighthouse 95+ y deploy en Vercel funcionando.

---

## 12. Flujo de generación

1. **Claude Design** ya generó la identidad y los mockups → `/nexora-brand/`.
2. Pegas esa carpeta en el proyecto.
3. **Claude Code** consume `/nexora-brand/` y construye el sitio (la antigua sección de precios se reaprovecha como "Por qué Nexora"). Usar `nexora-prompt-claude-code.md`.
4. Auditas y haces deploy en Vercel.

---

*Documento maestro vivo. — Nexora, Guayaquil 2026*
