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
5. **No testimonials section** — removed entirely by owner decision (2026-07). Do not reintroduce the component, types, or content fields unless the owner asks.
6. **Location lives ONLY in `footer.tagline`.** No city in meta, hero, about, contact or the OG cards. `brand.location` in `site.config.ts` exists for the downloadable vCard and nothing else.
7. **Studio voice, no personal identity.** Always "nosotros" / "we" — never "yo"/"I", never a named person, never "lo lidera X". Prior employers stay under `about.experience` as **team** background ("nuestro equipo cuenta con…"), never as a personal CV and never as clients.
8. **Audience-neutral copy.** The reader may be an individual, a freelancer or a company, so no string may assume "tu negocio" / "your business" / a personal first name. Address them as "tú"/"you" and talk about the *project*. The mixed audience is signalled implicitly through `niches[]` (independent professionals → companies) — never stated outright.
9. **Services are benefit-first.** `Service.benefit` says what the client gets ("potenciamos tu presencia en las búsquedas de Google"), never what they lack ("no existes en Google").
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
`01 Hero · 02 Servicios · 03 Trabajos/Demos · 04 Proceso · 05 Para quién · 06 Sobre Nexora · 07 Por qué Nexora · 08 FAQ · 09 Contacto`
Anchors: `#inicio #servicios #demos #proceso #para-quien #estudio #por-que #faq #contacto`
