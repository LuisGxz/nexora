# Prompt para Claude Code — Nexora

> Pega este prompt en Claude Code DESPUÉS de colocar la carpeta `/nexora-brand/` (de Claude Design) en la raíz del proyecto. El diseño ya está hecho; este prompt define cómo se construye.
> Documento maestro del proyecto: `nexora-plan-proyecto.md`. Operación/políticas: `nexora-manual-operaciones.md`.

---

## CONTEXT

Build the production landing page for **Nexora**, a formal software studio (Guayaquil, Ecuador) that builds websites, systems and apps for businesses, locally and internationally (Ecuador + USA). Single-page, conversion-focused, bilingual. Its only job is to drive qualified contact (WhatsApp).

**IMPORTANT — no pricing anywhere.** NO prices, NO plans, NO amounts, NO tiers. Pricing is handled privately per lead. Everything funnels to "tell me about your project". Trust is built with work, results and experience — not price.

A folder named `/nexora-brand/` is in the project root — the **single source of truth** for visual identity. Read it before writing code, in this order:

1. `/nexora-brand/README.md`
2. `/nexora-brand/tokens/design-tokens.json` — colors, typography, spacing, radii, shadows, motion.
3. `/nexora-brand/tokens/tailwind.config.snippet.js` — port into `tailwind.config`.
4. `/nexora-brand/logo/*.svg` and `/nexora-brand/icons/*.svg` — copy into assets.
5. `/nexora-brand/typography/typography.md` — Google Fonts to load.
6. `/nexora-brand/mockups/01..09-*.svg` — visual reference per section (mapping below).
7. `/nexora-brand/flows/user-flows.md` — CTA logic.

## STACK

- **Astro** (latest) + **Tailwind CSS** + **React** for interactive islands only (language toggle, FAQ accordion, mobile nav, quote-request form).
- TypeScript everywhere. Static output, deploy target **Vercel**. No backend, no database, no auth.

## SECTION MAPPING (agency model — adapt existing mockups, remove all price content)

9 mockups (01-09); two are reinterpreted:

1. **Hero** (`01-hero`) — value prop + primary CTA "Cuéntame tu proyecto" (to contact) + secondary "Ver trabajos" (anchor to §3). Language toggle in header.
2. **Servicios** (`02-services`) — service cards (web, qr-menu, booking, catalog, portfolio, memberships, custom-apps), icon + pain line. NO prices.
3. **Trabajos / Casos** (`03-demos`, repurposed) — **ONLY Nexora's own work**: live demos (barbershop, restaurant, clinic, event) + freelance projects. Card: title, client type, one result line, link to live demo when available. **Do NOT list past employers here.**
4. **Proceso** (`04-process`) — 4 steps: Contacto → Propuesta (cotización a medida) → Desarrollo → Entrega.
5. **Para quién / Industrias** (`05-niches`) — who-it's-for grid.
6. **Sobre Nexora** (`06-about`) — faceless bio. **Professional experience/background** (Relolink, Banco de Machala, Viamatica) framed as where the developer has worked — NOT as clients. Own products (Faktova, Turnia), local signals (RUC, factura). A first name is fine; no face/photo.
7. **Por qué Nexora** (`07-pricing`, REPURPOSED — NO prices) — reuse the 3-column layout as 3 value pillars / key stats (e.g. "+5 años de experiencia", "Proyectos entregados", "Entrega en días, no meses").
8. **FAQ** (`08-faq`) — accordion. Cover policy-aligned questions: delivery time, what maintenance covers, who provides the domain, payment (50% upfront / 50% before launch), revision rounds (2), and "¿Cuánto cuesta?" → "cada proyecto es a medida; escríbeme y te preparo una propuesta". NO numbers.
9. **Contacto** (`09-contact`) — conversion. A short **quote-request form** that **composes a prefilled WhatsApp message client-side** and opens `wa.me` — no backend. Plus a direct WhatsApp button and a downloadable vCard.

**Testimonials:** optional block driven by `testimonials[]`. Render ONLY if non-empty (no empty placeholder). Place near §3 or §7.

## CONTENT MODEL (define in `types.ts`, fill BOTH locales — nothing hardcoded)

```ts
SiteContent {
  hero: { headline; subheadline; ctaPrimary; ctaSecondary }
  services: { icon; title; pain }[]
  works: { title; clientType; result; url?; image? }[]
  process: { step; title; description }[]
  niches: { icon; label }[]
  about: { heading; body; experience: { company; role; period }[]; products: string[] }
  pillars: { stat; label }[]            // "Por qué Nexora" (3 columns)
  faq: { question; answer }[]
  testimonials: { quote; author; business }[]
  contact: {
    heading;
    form: { nameLabel; businessTypeLabel; needLabel; submitLabel };
    whatsappCtaLabel;
    prefillTemplate;   // e.g. "Hola, soy {name} ({businessType}). Necesito: {need}"
  }
}
```

Quote-form fields: **name, business type, what they need** → on submit, build the WhatsApp message from `prefillTemplate` (per locale) and open `wa.me/<number>?text=...`. No data is stored or sent to any server.

## PARAMETRIZACIÓN (CRÍTICO — requisito central)

Everything changeable from ONE place; change a color, a service, or a work item without touching any component.

- **Theme:** port `/nexora-brand/tokens/` into BOTH `tailwind.config.mjs` (theme.extend) AND `src/styles/global.css` as `:root` CSS custom properties (`--color-navy`, `--color-accent`, `--radius-md`, `--font-display`, ...). Components use tokens/utilities only — no hardcoded hex/px/font. Changing one hex recolors the whole site.
- **Content:** all copy and all lists in `site.es.ts` / `site.en.ts` per the model above.
- **Config:** `src/config/site.config.ts` — WhatsApp number, demo URLs, social handles, analytics id, brand name. Analytics id from env; no secrets in repo.

## BILINGUAL + AUTO LANGUAGE DETECTION

- Locales `es` (default) and `en`. Routes `/` (ES) and `/en/` (EN).
- **Auto-detect on first visit** (`Accept-Language` via `middleware.ts`, or a small head script to avoid flash) → redirect to the matching locale ONLY the first time.
- **Always respect manual override:** toggle always visible; persist manual choice (cookie); never auto-redirect again once chosen. A Spanish speaker in the US must be able to stay in Spanish even if the browser is English.
- WhatsApp prefilled message differs per locale and is assembled from the form fields.

## INTEGRATIONS & SEO

- WhatsApp deep-links `https://wa.me/<number>?text=<prefilled>`, number from config.
- **Analytics events:** fire an event on every WhatsApp/contact CTA click (the only conversion — must be measurable). GA hook, id from env, no-op if absent.
- Downloadable vCard. Open Graph + Twitter meta.
- **SEO:** correct `hreflang` for `es`/`en`, generated `sitemap.xml`, localized `<title>`/meta per locale, canonical URLs.

## QUALITY BAR (production, ~10k visitors)

- Mobile-first. Lighthouse 95+ on performance, accessibility, best practices, SEO.
- Semantic HTML, heading order, alt text, keyboard-accessible accordion/toggle/form, visible focus, WCAG AA contrast (token values).
- No layout shift, lazy-load below-the-fold, preconnect fonts. Ship React only in islands.

## CODE CONVENTIONS

- All code, identifiers, file names, and documentation in **English**.
- Do not add inline comments inside function/component bodies, and do not remove existing comments.
- Add a **summary block ABOVE every function, component, and non-trivial method** (TSDoc/JSDoc `/** ... */`): what it does, why it exists, all params, what it returns, and performance/scalability notes when relevant. No generic summaries.
- Favor SOLID and clean code; design patterns only where they add value. No infinite loops, no needless recursion, no memory bloat.
- Where more than one viable approach exists, briefly note options and implement the recommended one.

## DELIVERABLE STRUCTURE

```
/
├── nexora-brand/                # input from Claude Design
├── public/{favicon.svg, nexora.vcf}
├── src/
│   ├── assets/{logo,icons}/
│   ├── components/              # Hero, Services, Works, Process, Niches, About,
│   │                            # WhyNexora, Testimonials, Faq, Contact, QuoteForm,
│   │                            # Header, Footer, LanguageToggle
│   ├── content/{types.ts, site.es.ts, site.en.ts}
│   ├── config/site.config.ts
│   ├── layouts/BaseLayout.astro
│   ├── middleware.ts
│   ├── pages/{index.astro, en/index.astro}
│   └── styles/global.css
├── tailwind.config.mjs
├── astro.config.mjs
└── README.md                    # run, deploy, and WHERE to edit colors/content/config
```

## STEPS

1. Read `/nexora-brand/` in order.
2. Scaffold Astro + Tailwind + React + TS.
3. Port tokens into `tailwind.config.mjs` AND `global.css` (:root). Wire fonts.
4. Copy logo and icon SVGs into `src/assets/`.
5. Define `types.ts` per the content model; fill both locale files (NO prices).
6. Build the 9 sections per the mapping (03 and 07 reinterpreted); optional testimonials.
7. Implement auto-detect + manual toggle, FAQ accordion, quote-form→WhatsApp, WhatsApp button + analytics event, vCard, meta/OG, hreflang, sitemap.
8. Verify against the Definition of Done below.
9. Write `README.md` documenting exactly where to change colors, content and config.

## DEFINITION OF DONE (self-check before finishing)

- [ ] No prices/plans/amounts anywhere.
- [ ] Past employers only in "Sobre Nexora" as experience, never as clients in "Trabajos".
- [ ] Auto language detection on first visit + manual toggle that overrides and persists.
- [ ] 9 sections match the mockups (07 and 03 reinterpreted); testimonials render only if non-empty.
- [ ] Quote form composes the WhatsApp message correctly per locale; no backend.
- [ ] WhatsApp click fires an analytics event.
- [ ] `hreflang`, sitemap, OG present and correct.
- [ ] Changing one color token recolors the whole site; no hardcoded copy outside `src/content/`.
- [ ] Lighthouse 95+ on the 4 metrics; mobile-first; WCAG AA.

## RULES

- NO prices, plans, amounts or tiers anywhere.
- Past employers appear only as professional experience in "Sobre Nexora".
- Result must match `/nexora-brand/` mockups and tokens; do not invent colors/fonts/spacing.
- All copy/content in `src/content/*`; theme in tokens; config in `site.config.ts`. Nothing hardcoded.
- If any asset is missing from `/nexora-brand/`, list what's missing instead of inventing it.
- Make decisions and implement; recommend the best option rather than handing me a list.
