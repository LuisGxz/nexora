# Nexora — Landing Comercial

> **Studio rules first:** `../CLAUDE.md` · conventions `../docs/STANDARDS.md` · toolchain & deploy `../docs/OPS.md` · registry `../docs/STUDIO.md`.
> This file holds ONLY what is specific to the landing. Anything that applies to both projects lives upstairs — don't restate it here.

Conversion-focused, bilingual (ES default / EN) single-page landing for **Nexora Software**, a formal software studio in Guayaquil, Ecuador. Its only job: turn visitors into qualified WhatsApp contacts. No backend, no database, no auth, static deploy on Vercel.

> Read `docs/PHASES.md` to find the current phase. Read `docs/PROJECT_MAP.md` before exploring directories. Full spec: `docs/nexora-plan-proyecto.md` + `docs/nexora-prompt-claude-code.md`. Visual identity (source of truth): `nexora-brand/`.

## Tech stack (real)
- **Astro 5** — static output, islands architecture.
- **Tailwind CSS 3** — theme ported from `nexora-brand/tokens/`.
- **React 19** — interactive islands ONLY (LanguageToggle, FAQ accordion, mobile nav, QuoteForm).
- **TypeScript** everywhere. **npm** (not pnpm — this project only).
- Deploy: **Vercel** (hobby/free), static adapter.

## Commands
```bash
npm install            # install deps
npm run dev            # local dev server
npm run build          # static build → dist/
npm run preview        # preview the build locally
npm run og             # re-rasterize OG/share cards
npx astro check        # typecheck Astro + TS
```
Gate before closing a phase: `npm run build` + `npx astro check` clean. **Never run `build`/`astro check` while `npm run dev` is running** — see the footgun table in `../docs/OPS.md`.

## Non-negotiable rules (product-specific — OVERRIDE defaults)
1. **NO pricing anywhere.** No prices, plans, amounts, or tiers. Pricing is private per lead. Everything funnels to "cuéntame tu proyecto". Section 07 (`07-pricing` mockup) is **repurposed** as "Por qué Nexora" value pillars — NO numbers.
   - ⚠️ The brand kit (`nexora-brand/flows/user-flows.md`, `README.md`) still describes pricing tiers. The **plan + prompt win**: ignore all pricing instructions in the brand kit.
2. **Faceless.** No human faces, founder photos, or stock people. The work is the hero.
3. **Past employers** (Relolink, Banco de Machala, Viamatica) appear ONLY as professional experience in "Sobre Nexora" — NEVER as clients in "Trabajos".
4. **Trabajos / Demos** lists ONLY Nexora's own work (live demos + freelance projects).
5. **No testimonials section** — removed entirely by owner decision (2026-07). **El dueño pidió reintroducirla el 2026-08-13, condicionada**: el componente vuelve **solo cuando existan 2–3 reseñas verificables de clientes reales**, y sale al aire con ellas, nunca vacío ni con relleno. Hasta entonces la regla original sigue vigente. ⚠️ Emitir `Review`/`AggregateRating` en JSON-LD sin reseñas verificables es sancionable por Google — el schema entra con las reseñas, no antes.
6. **Location lives ONLY in `footer.tagline`.** No city in meta, hero, about, contact or the OG cards. `brand.location` in `site.config.ts` exists for the downloadable vCard and nothing else. **Enmienda del 2026-08-13**: se permite `areaServed` ("Guayaquil, Ecuador") en el JSON-LD, y el estudio se registra en Google Business Profile como **negocio de área de servicio** — sin calle pública. La regla sigue prohibiendo una dirección visible en la copy; lo que se abre es el mapa, no el domicilio.
7. **Studio voice, no personal identity.** Always "nosotros" / "we" — never "yo"/"I", never a named person, never "lo lidera X". Prior employers stay under `about.experience` as **team** background ("nuestro equipo cuenta con…"), never as a personal CV and never as clients.
8. **Audience-neutral, formal copy.** The reader may be an individual, a freelancer or a company, so no string may assume "su negocio" / "your business" / a personal first name; talk about the *project*. The mixed audience is signalled implicitly through `niches[]` — never stated outright. **Enmienda del 2026-10-01 (decisión del dueño):** la voz es **formal, de plataforma a usuario** — usted o impersonal ("Contáctenos", "su proyecto", "se entrega"), nunca tú. Sin comparaciones ni negaciones ("sin plantillas", "no es X sino Y") y **sin prometer plazos** ("en pocos días", "3 a 5 días"): la fecha se establece en la propuesta. Todo punto de contacto ofrece **WhatsApp y correo**.
9. **Services say what is delivered.** `Service.benefit` describes the service ("Gestión automática de turnos y recepción de reservas las 24 horas"), never what the client lacks ("no existes en Google").
11. **Visual direction (2026-10-01): blanco y azul.** White ground, navy text, one blue for actions, a single family (Hanken Grotesk) and corners of **4–8 px** — no square buttons, no pills. `tailwind.config.mjs` + `global.css` now lead; `nexora-brand/tokens/` keeps the previous values. No own-products block: **Turnia is shown as one more card in Proyectos**; Spektova and Faktova are not shown.
10. **Ship React only in islands** (`client:*` directives); keep everything else static Astro. Zero JS on purely static sections.

## Where things live (project-specific)
- Copy + lists: `src/content/site.es.ts` / `site.en.ts` (contract in `src/content/types.ts`).
- Config: `src/config/site.config.ts` (WhatsApp E164, demo URLs, handles, analytics id, brand name).
- **Domain: `src/config/domain.mjs` and nowhere else** (`PRIMARY_DOMAIN` / `PRIMARY_ORIGIN`), imported by `astro.config.mjs`, `site.config.ts`, `BaseLayout.astro`, `scripts/render-og.mjs`. Changing it = edit that file, `npm run og`, redeploy.
- Theme: `tailwind.config.mjs` + `src/styles/global.css` `:root`, both ported from `nexora-brand/tokens/`.

## Bilingual model
- Locales `es` (default) + `en`. Routes `/` (ES) and `/en/` (EN).
- Auto-detect first visit (`Accept-Language` via `middleware.ts` or head script) → redirect once. Manual toggle always visible, persists (cookie / `localStorage: nexora_lang`), never auto-redirects again.
- Language swaps copy + WhatsApp prefill language only (no pricing market — pricing doesn't exist here).

## Conversion / integrations
- WhatsApp deep-links: `https://wa.me/<E164>?text=<urlencoded>`, number from config, prefill per locale + form fields.
- Analytics event on every WhatsApp/contact CTA click (`cta_whatsapp` with `source` + `lang`). GA id from env; no-op if absent.
- Downloadable vCard (`public/nexora.vcf`), built from the same config as the WhatsApp number.
- SEO: `hreflang` es/en, generated `sitemap.xml`, localized `<title>`/meta, canonical, Open Graph + Twitter.

## Page order (9 sections)
`01 Hero (con la tarjeta de propuesta y la franja de pilares) · 02 Servicios · 03 Proyectos/Demos · 04 Proceso · 05 Sectores · 06 Trayectoria · 07 FAQ · 08 Contacto` — desde el 2026-10-01 "Por qué Nexora" ya no es sección: sus pilares son la franja bajo el hero.
Anchors: `#inicio #servicios #demos #proceso #para-quien #estudio #por-que #faq #contacto`
