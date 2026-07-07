# Nexora — Landing Comercial

Conversion-focused, bilingual (ES default / EN) single-page landing for **Nexora Software**, a formal software studio in Guayaquil, Ecuador. Its only job: turn visitors into qualified WhatsApp contacts. No backend, no database, no auth, static deploy on Vercel.

> Read `docs/PHASES.md` to find the current phase. Read `docs/PROJECT_MAP.md` before exploring directories. Full spec: `docs/nexora-plan-proyecto.md` + `docs/nexora-prompt-claude-code.md`. Visual identity (source of truth): `nexora-brand/`.

## Tech stack (real)
- **Astro** (latest) — static output, islands architecture.
- **Tailwind CSS** — theme ported from `nexora-brand/tokens/`.
- **React** — interactive islands ONLY (LanguageToggle, FAQ accordion, mobile nav, QuoteForm).
- **TypeScript** everywhere.
- Deploy: **Vercel** (hobby/free), static adapter.

## Commands
```bash
npm install            # install deps
npm run dev            # local dev server
npm run build          # static build → dist/
npm run preview        # preview the build locally
npx astro check        # typecheck Astro + TS
```
(Scripts exist after Phase 0 scaffold.)

## Non-negotiable rules (from the spec — OVERRIDE defaults)
1. **NO pricing anywhere.** No prices, plans, amounts, or tiers. Pricing is private per lead. Everything funnels to "cuéntame tu proyecto". Section 07 (`07-pricing` mockup) is **repurposed** as "Por qué Nexora" value pillars — NO numbers.
   - ⚠️ The brand kit (`nexora-brand/flows/user-flows.md`, `README.md`) still describes pricing tiers. The **plan + prompt win**: ignore all pricing instructions in the brand kit.
2. **Faceless.** No human faces, founder photos, or stock people. The work is the hero.
3. **Past employers** (Relolink, Banco de Machala, Viamatica) appear ONLY as professional experience in "Sobre Nexora" — NEVER as clients in "Trabajos".
4. **Trabajos / Demos** lists ONLY Nexora's own work (live demos + freelance projects).
5. **Nothing hardcoded.** All copy + lists in `src/content/site.es.ts` / `site.en.ts`. All theme from tokens. All config in `src/config/site.config.ts`. Changing one color token must recolor the whole site.
6. **No invented assets.** If something is missing from `nexora-brand/`, list what's missing — don't fabricate colors/fonts/spacing/icons.
7. **No testimonials section** — removed entirely by owner decision (2026-07). Do not reintroduce the component, types, or content fields unless the owner asks.

## Conventions
- All code, identifiers, filenames, and docs in **English**.
- **Summary block ABOVE every function/component/non-trivial method** (TSDoc/JSDoc `/** ... */`): what, why, params, returns, perf notes when relevant. No generic summaries.
- **No inline comments inside function bodies.** Do not remove existing comments.
- SOLID + clean code; patterns only where they add value. No infinite loops, needless recursion, or memory bloat.
- Ship React only in islands (`client:*` directives); keep everything else static Astro.
- Where multiple viable approaches exist, note them briefly and implement the recommended one.

## Bilingual model
- Locales `es` (default) + `en`. Routes `/` (ES) and `/en/` (EN).
- Auto-detect first visit (`Accept-Language` via `middleware.ts` or head script) → redirect once. Manual toggle always visible, persists (cookie / `localStorage: nexora_lang`), never auto-redirects again.
- Language swaps copy + WhatsApp prefill language only (NO pricing market — pricing doesn't exist here).

## Conversion / integrations
- WhatsApp deep-links: `https://wa.me/<E164>?text=<urlencoded>`, number from config, prefill per locale + form fields.
- Analytics event on every WhatsApp/contact CTA click (`cta_whatsapp` with `source` + `lang`). GA id from env; no-op if absent. No secrets in repo.
- Downloadable vCard (`public/nexora.vcf`), built from the same config as the WhatsApp number.
- SEO: `hreflang` es/en, generated `sitemap.xml`, localized `<title>`/meta, canonical, Open Graph + Twitter.

## Quality bar
- Mobile-first. **Lighthouse 95+** on performance, accessibility, best practices, SEO.
- Semantic HTML, heading order, alt text, keyboard-accessible accordion/toggle/form, visible focus, WCAG AA contrast (token values).
- No layout shift, lazy-load below-the-fold, preconnect fonts.

## Page order (9 sections)
`01 Hero · 02 Servicios · 03 Trabajos/Demos · 04 Proceso · 05 Para quién · 06 Sobre Nexora · 07 Por qué Nexora · 08 FAQ · 09 Contacto`
Anchors: `#inicio #servicios #demos #proceso #para-quien #estudio #por-que #faq #contacto`
