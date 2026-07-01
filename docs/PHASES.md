# Nexora — Development Phases

Vertical-ish slices for the bilingual conversion landing. Build order follows dependencies: tokens → content model → static sections → interactive islands → integrations/SEO → polish → deploy. Trust ✅ markers; do not re-read completed phases.

**Legend:** ⬜ not started · 🟦 in progress · ✅ done
**Global rules live in `CLAUDE.md` (NO pricing, faceless, nothing hardcoded). Re-read them before each phase.**

Token estimates: small file ~500, medium ~2,000, large ~5,000.

---

## Phase 0: Scaffold + Design System ✅
**Goal**: Astro + Tailwind + React + TS project running, with brand tokens wired into Tailwind and CSS `:root`, fonts loaded, and brand assets imported.
**Depends on**: nothing (fresh project).
**Files to read**:
- `nexora-brand/README.md`
- `nexora-brand/tokens/design-tokens.json`
- `nexora-brand/tokens/tailwind.config.snippet.js`
- `nexora-brand/typography/typography.md`
**Files to create**:
- `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`
- `tailwind.config.mjs` (port the snippet)
- `src/styles/global.css` (`:root` CSS custom properties from tokens + base/font)
- `src/layouts/BaseLayout.astro` (html shell, font preconnect/link, slot)
- `src/pages/index.astro` (minimal "it builds" page using a token color + display font)
- `src/assets/logo/*`, `src/assets/icons/*` (copied from `nexora-brand/`)
- `public/favicon.svg` (copied)
**Files to modify**: none.
**Estimated tokens**: ~3,500 (read) + ~4,000 (write)
**Model recommendation**: Sonnet (mechanical scaffold; Tailwind/Astro config is well-trodden).
**Acceptance criteria**:
- [x] `npm install && npm run build` succeeds (1 page built in ~2s); `astro check` → 0 errors.
- [x] Tailwind classes `bg-navy-900`, `text-blue`/`text-cyan`, `font-display`, `shadow-lg`, `rounded-xl` resolve to token values (navy `#0B1530` confirmed in compiled CSS).
- [x] `global.css` exposes `:root` vars (`--color-navy`, `--color-blue`, `--radius-xl`, `--font-display`, …) mirrored from tokens; one-token recolor works from either surface.
- [x] Space Grotesk + Inter load (preconnect + single `<link>` in BaseLayout).
- [x] Logo (5) + icon (12) SVGs in `src/assets/`; `public/favicon.svg` wired.
- [x] Zero JS shipped on the static page (React reserved for Phase 3 islands).

**Completion notes**: Stack = Astro 5 + Tailwind v3 (`@astrojs/tailwind` v6) + `@astrojs/react` v4 + TS strict. Brand `theme.extend` ported 1:1 into `tailwind.config.mjs` and mirrored as `:root` vars in `global.css`. Output `static` (no adapter yet — Vercel adapter/domain deferred to Phase 6). Brand folder confirmed at repo root `/nexora-brand/` and excluded from TS scanning. `astro.config.mjs` uses placeholder `site` URL (real domain pending → final phase).

---

## Phase 1: Content Model + i18n Foundation ✅
**Goal**: A typed content contract filled in both locales, central config, and the routing/auto-detect plumbing — no visuals yet.
**Depends on**: Phase 0 (build + layout).
**Files to read**:
- `docs/nexora-prompt-claude-code.md` (CONTENT MODEL section)
- `docs/nexora-plan-proyecto.md` (§3 servicios, §4 secciones, §6 parametrización)
- `nexora-brand/flows/user-flows.md` (ignore pricing parts)
**Files to create**:
- `src/content/types.ts` (`SiteContent`: hero, services[], works[], process[], niches[], about{experience[],products[]}, pillars[], faq[], testimonials[], contact{form,prefillTemplate})
- `src/content/site.es.ts` (full ES copy + lists, NO prices)
- `src/content/site.en.ts` (full EN mirror)
- `src/config/site.config.ts` (WhatsApp E164 placeholder, demo URLs, handles, analytics id from env, brand name)
- `src/lib/i18n.ts` (locale resolution helpers)
- `src/middleware.ts` (first-visit `Accept-Language` detect → redirect once, respects stored choice)
- `src/pages/en/index.astro` (EN route stub)
**Files to modify**: `src/pages/index.astro` (consume content for a smoke test).
**Estimated tokens**: ~3,000 (read) + ~5,000 (write)
**Model recommendation**: Sonnet (content authoring + straightforward middleware). Bilingual copy is the heavy part.
**Acceptance criteria**:
- [x] `types.ts` covers the prompt's model (hero/services/works/process/niches/about/pillars/faq/testimonials/contact) + section chrome; both locale files satisfy it (`astro check` → 0 errors).
- [x] Zero prices/plans/amounts in either locale file (audited; only hits are guardrail comments + "price changes" pain copy).
- [x] Past employers only inside `about.experience`; `works[]` is Nexora's own demos/freelance (4 demos + 1 freelance).
- [x] `site.config.ts` holds WhatsApp E.164, demo URLs, social, analytics id (`PUBLIC_GA_ID` env), brand — single source; real values marked `PENDING`.
- [x] First-visit non-Spanish browser redirects `/` → `/en/` once; stored manual choice + `?lang=` respected (script on `/` only, absent on `/en/`).
- [x] `astro check` passes; both `/` and `/en/` build.

**Completion notes**: **Deviation (sanctioned):** the prompt's `src/middleware.ts` is non-functional under `output: 'static'` (no per-request `Accept-Language`), so first-visit detection is the plan §7 client head-script instead — logic in `src/lib/i18n.ts` (`firstVisitRedirectScript`), embedded inline only on `/`. Also modified `BaseLayout.astro` (added a `head` named slot) beyond the listed `index.astro`. Content extended beyond the bare prompt model with section eyebrows/headings, nav, footer, and `ui` microcopy so chrome copy isn't hardcoded either. PENDING real values (WhatsApp number, demo URLs, GA id, email, employer roles/periods) carried as marked placeholders → final phase. Developer first name "Luis" used in `about.body` per plan ("nombre de pila") — editable in content.

---

## Phase 2: Static Sections 01–06 + Chrome ✅
**Goal**: Header/Footer and the six content-driven static sections built to mockups, fully data-driven, both locales.
**Depends on**: Phase 1 (content + config).
**Files to read**:
- `src/content/types.ts`, `src/content/site.es.ts`
- `nexora-brand/mockups/01-hero.svg` … `06-about.svg`
- `nexora-brand/brand-guidelines.md` (color/spacing/voice)
**Files to create**:
- `src/components/Header.astro`, `src/components/Footer.astro`
- `src/components/ui/` (Button, Icon, SectionEyebrow as needed)
- `src/components/sections/Hero.astro` (01), `Services.astro` (02), `Works.astro` (03), `Process.astro` (04), `Niches.astro` (05), `About.astro` (06)
- `src/components/sections/Testimonials.astro` (renders only if non-empty)
**Files to modify**: `src/pages/index.astro`, `src/pages/en/index.astro` (compose sections).
**Estimated tokens**: ~4,000 (read) + ~6,000 (write)
**Model recommendation**: Sonnet (component build from clear mockups). Escalate to Opus only if layout/responsive proves tricky.
**Acceptance criteria**:
- [x] Sections 01–06 match mockups; mobile-first; anchors `#inicio #servicios #demos #proceso #para-quien #estudio` (all six confirmed in built HTML).
- [x] All text/lists come from `src/content/*` — nothing hardcoded in components.
- [x] Hero communicates value + primary CTA above the fold on mobile in < 10s.
- [x] `works[]` shows only own work; `about` frames employers as experience (labeled "Experiencia"), not clients.
- [x] Testimonials section absent when array empty (early return); present when filled.
- [x] No prices anywhere (audited dist: only hits are pain copy "cambia un precio" + substring of "plantillas"); faceless (no people imagery — striped token placeholders for demo previews).

**Completion notes**: Built 12 new files: `ui/{Icon,Button,SectionEyebrow}.astro`, `Header.astro`, `Footer.astro`, and sections `Hero/Services/Works/Process/Niches/About/Testimonials.astro`; modified both index pages to compose them. **Icon system**: `Icon.astro` glob-imports `assets/icons/*.svg?raw`, strips fixed size + hardcoded color so glyphs inherit `currentColor` (one text-color utility recolors any icon; bad key fails the build). Logos inlined the same way (`nexora-logo-mono.svg?raw`, currentColor). **Deviations (sanctioned):** (1) extended `UiStrings` with `experienceLabel` + `productsLabel` (both locales) so the About section's mini-labels aren't hardcoded — same precedent as Phase 1's chrome-microcopy extension. (2) Mobile nav is a zero-JS native `<details>` disclosure (keyboard-accessible) as a placeholder; the ES|EN switch is static cross-route links — Phase 3 replaces both with the React MobileNav + LanguageToggle islands (persistence / no-re-auto-redirect), which Phase 3 already lists as modifying `Header.astro`. **CTAs** point to in-page anchors (`#contacto`, `#demos`) this phase; real `wa.me` deep-links wired in Phase 3. **Demo links** render only when a work URL is real (≠ `#` placeholder), so no dead links pre-launch. Dark bands = hero/process (+ About products panel/footer) per brand rhythm. `astro check` → 0 errors; build → 2 pages, **zero `_astro/*.js` referenced** (React renderer built but tree-shaken out; only the inline first-visit redirect script ships on `/`).

---

## Phase 3: Sections 07–09 + Interactive Islands ✅
**Goal**: "Por qué Nexora" (repurposed 07, no prices), FAQ accordion, and the Contact section with the quote-form → WhatsApp flow and language toggle — all interactive islands.
**Depends on**: Phase 2 (sections/chrome), Phase 1 (config/prefill templates).
**Files to read**:
- `nexora-brand/mockups/07-pricing.svg` (reinterpret — NO prices), `08-faq.svg`, `09-contact.svg`
- `nexora-brand/flows/user-flows.md` (CTA hierarchy, deep-link table)
- `src/config/site.config.ts`, `src/content/types.ts`
**Files to create**:
- `src/components/sections/WhyNexora.astro` (07 — 3 value pillars / stats from `pillars[]`)
- `src/components/sections/Faq.tsx` (React island — keyboard-accessible accordion)
- `src/components/sections/Contact.astro` (09 wrapper — WhatsApp button + vCard link)
- `src/components/QuoteForm.tsx` (React island — name/businessType/need → builds wa.me prefill per locale, opens it; no backend, no storage)
- `src/components/LanguageToggle.tsx` (React island — ES|EN, persists choice, never re-auto-redirects)
- `src/lib/whatsapp.ts` (compose deep-link from config + prefillTemplate)
**Files to modify**: `Header.astro` (mount LanguageToggle + sticky WhatsApp button), `pages/index.astro`, `pages/en/index.astro`.
**Estimated tokens**: ~3,500 (read) + ~5,500 (write)
**Model recommendation**: Sonnet (island logic + a11y patterns are standard).
**Acceptance criteria**:
- [x] Section 07 (`WhyNexora`, anchor `#por-que`) shows value pillars/stats from `pillars[]` — zero prices/plans/amounts (audited dist: no `$`, tier names, or "tarifa"). Pricing mockup fully reinterpreted.
- [x] FAQ accordion keyboard-accessible: each question is a real `<button>` (native Enter/Space) with `aria-expanded` + `aria-controls`; answer panel `role="region"` + `aria-labelledby`, hidden via `hidden` attr when closed; answers from `faq[]`.
- [x] QuoteForm composes the WhatsApp message per locale via `prefillTemplate` + `fillTemplate()`, opens `wa.me/<number>?text=…` in a new tab; no backend, no storage, no POST (`event.preventDefault()` + `window.open`).
- [x] Language toggle in the sticky header (visible over the hero); switching navigates to the other locale route (copy + prefill swap with it) and persists `nexora_lang`, which the first-visit script reads → no auto-redirect after a manual choice.
- [x] vCard download link present in Contact (`href="/nexora.vcf" download`; the asset itself is created in Phase 4).
- [x] React shipped only as `client:*` islands (LanguageToggle `client:idle`; Faq + QuoteForm `client:visible`); all sections stay static Astro.

**Completion notes**: Created `lib/whatsapp.ts` (`waLink` + `fillTemplate`, shared by Astro buttons and islands), `sections/WhyNexora.astro` (07), `sections/Faq.tsx`, `sections/Contact.astro` (09), `QuoteForm.tsx`, `LanguageToggle.tsx`; modified `Header.astro` (mounted LanguageToggle island replacing the static pill; sticky + mobile WhatsApp buttons now real `wa.me` links) and both index pages (appended WhyNexora/Faq/Contact). **Pricing override honored:** the 07 mockup's tiers/amounts/market-note are entirely discarded — slot is value pillars. **Flows deviation (sanctioned):** the brand flows describe in-place `?lang=` copy-swap + a pricing market; we keep Phase 1's route-based locales (`/`↔`/en/`) and there is no pricing, so the toggle persists-then-navigates. **No-backend form:** QuoteForm only builds a deep-link; `required` on name/need uses the native constraint API. **vCard link** points at `/nexora.vcf` (Phase 4 asset) — currently 404 by design. **Analytics deferred to Phase 4** as specified (no `cta_whatsapp` yet). Bundle: React client + three islands (LanguageToggle 0.76kB, QuoteForm 1.97kB, Faq 2.03kB; shared client 186kB/58kB gz). `astro check` → 0 errors (1 benign hint: Astro consumes `interface Props` implicitly in `SectionEyebrow`). Both routes build.

---

## Phase 4: Integrations, Analytics & SEO ✅
**Goal**: WhatsApp/CTA analytics events, vCard asset, full SEO (hreflang, sitemap, OG/Twitter, canonical), and meta per locale.
**Depends on**: Phase 3 (CTAs + islands), Phase 1 (config).
**Files to read**:
- `nexora-brand/flows/user-flows.md` (analytics event spec, vCard fields)
- `src/lib/whatsapp.ts`, `src/layouts/BaseLayout.astro`, `src/config/site.config.ts`
**Files to create**:
- `src/lib/analytics.ts` (fire `cta_whatsapp` with `source`+`lang`; GA id from env; no-op if absent)
- `public/nexora.vcf` (org=Nexora Software, WhatsApp E164, email, url, Guayaquil; faceless)
- `public/robots.txt`
- `src/pages/sitemap.xml.ts` (or wire `@astrojs/sitemap`)
- OG share image in `public/og/` (export from `nexora-brand/social/og-share-card.svg`)
**Files to modify**:
- `BaseLayout.astro` (localized `<title>`/meta, canonical, `hreflang` es/en, OG/Twitter tags, analytics snippet)
- WhatsApp/CTA components (wire analytics call on click)
**Estimated tokens**: ~2,500 (read) + ~3,500 (write)
**Model recommendation**: Sonnet (config-level integration work).
**Acceptance criteria**:
- [x] Every WhatsApp CTA fires `cta_whatsapp` (source+lang): static anchors via a single delegated `[data-analytics-cta]` listener (`header`, `header_mobile`, `contact`, `faq`), the form via `trackWhatsappCta('quote_form', lang)`. No-op when GA absent (verified: GA-off build has 0 gtag refs); id from `PUBLIC_GA_ID` env — no secrets committed.
- [x] `hreflang` es/en + `x-default` + canonical on both routes (verified in built HTML for `/` and `/en/`).
- [x] `sitemap.xml` generated, lists both locales each with hreflang alternates; `robots.txt` references it via `Astro.site`.
- [x] OG/Twitter (`summary_large_image`) render per-locale cards: localized title/desc/alt + locale-specific 1200×630 PNG (`og-share.png` es / `og-share-en.png` en) + `og:locale` `es_EC`/`en_US`.
- [x] `/nexora.vcf` serves a valid vCard 3.0 (CRLF, faceless — no PHOTO); values come straight from `site.config.ts` (number `+593900000000`, email, url, Guayaquil).

**Completion notes**: Created `lib/analytics.ts` (`trackWhatsappCta` no-op guard + `gaBootstrapScript` = gtag init **plus** one delegated CTA-click listener), endpoints `nexora.vcf.ts` / `sitemap.xml.ts` / `robots.txt.ts`, and rasterized OG PNGs into `public/og/` (ES + EN, via `sharp` from `nexora-brand/social/og-share-card.svg`; EN copy translated in-place — "Software your / business needs.", "Websites · systems · custom apps"). Modified `BaseLayout.astro` (canonical, hreflang, OG/Twitter, `og:locale`, per-locale OG image, gated GA snippet), tagged the four static WhatsApp anchors with `data-analytics-*`, and wired `QuoteForm` submit to the event. **Sanctioned deviations:** (1) vCard/sitemap/robots are **prerendered endpoints, not static `public/` files**, so they track `site.config.ts` + `Astro.site` (single source; survive the PENDING-domain swap) — same static-output rationale as Phase 1. (2) Hand-wrote the sitemap instead of `@astrojs/sitemap` (2 locale-alternate routes; no new dep; explicit hreflang). **GA fully gated:** id-less builds emit zero analytics JS / no network (protects the Lighthouse budget) — confirmed both states. **OG fonts** fall back to mono in raster (no Space Grotesk/Inter on the build box) but render legibly on-brand; the card's baked `nexora.studio`/domain is the brand asset's own and tracks the PENDING real domain. `astro check` → 0 errors (1 benign `SectionEyebrow` hint). All routes + 3 endpoints build.

---

## Phase 5: Polish — A11y, Performance, Responsive ✅
**Goal**: Hit the production quality bar (Lighthouse 95+ ×4, WCAG AA, no CLS) across breakpoints and both locales.
**Depends on**: Phases 2–4 (full page).
**Files to read**: `nexora-brand/colors/palette.md` (contrast watch-outs); section components as needed.
**Files to create**: none (likely a `lighthouse` notes file if useful).
**Files to modify**: section components, `global.css`, `BaseLayout.astro` (lazy-load below-the-fold, image dims to prevent CLS, focus states, heading order, alt text, reduced-motion).
**Estimated tokens**: ~2,000 (read) + ~2,500 (write)
**Model recommendation**: Sonnet; escalate to Opus if a perf bottleneck needs structural change.
**Acceptance criteria**:
- [x] Lighthouse mobile **100 / 100 / 100 / 100** (perf / a11y / best-practices / SEO) on BOTH `/` and `/en/` — measured against `astro preview` with `lighthouse@12` headless mobile.
- [x] WCAG AA contrast on all text: fixed `text-slate` (~2.95:1) → `text-text-muted-dark` (~6.4:1) on dark, and white-on-WhatsApp-green (~1.7:1) → `text-navy-900` (~9.8:1, matches the mockup's dark-on-green). Lighthouse `color-contrast` = pass. Visible focus via global `:focus-visible` token outline.
- [x] Keyboard path end-to-end: added the missing **skip-to-content** link (`#contenido`, `<main tabindex="-1">`), nav/toggle are real links/buttons, FAQ accordion is button + `aria-expanded`/`aria-controls`, form is native submit. `label-content-name-mismatch` resolved (removed the logo anchor's competing `aria-label`; the `role="img"` SVG provides the name).
- [x] No layout shift (Lighthouse **CLS 0**); page ships only inline SVG / CSS gradients (nothing to lazy-load); fonts preconnected **and** made non-render-blocking (`preload`+`onload` swap with `<noscript>` fallback) → cut LCP 2.8s → 1.7s, FCP → 0.8s; `prefers-reduced-motion` honored in `global.css`.
- [x] Responsive verified: 360px (Lighthouse mobile render — header collapses to hamburger, hero + CTAs stack) and ~1568px desktop (browser screenshot — full nav, ES|EN, dark-text CTAs) both correct; 768/1024 covered by the same `sm:/md:/lg:` grids; added `scroll-padding-top` so anchor jumps clear the sticky header.

**Completion notes**: Polish was driven by a real Lighthouse pass, not just review. Starting scores were perf 91 / a11y 96; root causes were (1) render-blocking Google Fonts stylesheet (~1.9s) and (2) two real a11y defects — white text on WhatsApp green and the logo link's name/label mismatch. Fixes: `BaseLayout` font `<link>` → non-blocking `preload`+`onload` (+`<noscript>`); WhatsApp-green buttons (`Button` whatsapp variant, Contact CTA, QuoteForm submit, Header mobile link) now use dark navy text per the brand mockup; reverted to the SVG-provided accessible name on the logo; `text-slate`-on-dark labels (Hero products eyebrow, Contact `<dt>`s) → `text-text-muted-dark`. Added skip link + `#contenido` main target + `scroll-padding-top: 5rem` + `[tabindex='-1']:focus{outline:none}` in `global.css`. Result: **100 across all four categories on both locales**, CLS 0. No structural/perf bottleneck needed Opus escalation. `astro check` → 0 errors. (Scratch Lighthouse JSON / screenshots were used for verification then deleted; preview server stopped.)

---

## Phase 6: Deploy + Docs ✅
**Goal**: Live on Vercel with a README documenting exactly where to change colors, content, and config.
**Depends on**: Phase 5 (passes the bar).
**Files to read**: `docs/nexora-plan-proyecto.md` (§11 checklist of salida).
**Files to create**: `README.md` (run, build, deploy steps + WHERE to edit colors/content/config), `vercel.json` if needed.
**Files to modify**: `astro.config.mjs` (Vercel static adapter / site URL), env example.
**Estimated tokens**: ~1,500 (read) + ~2,000 (write)
**Model recommendation**: Sonnet.
**Acceptance criteria**:
- [x] `npm run build` produces a clean static `dist/` (2 pages + 3 endpoints + OG assets). Deploy is **prepared** (zero-config Vercel + `vercel.json`); the actual deploy needs the owner's `vercel login` + the PENDING real values — documented in README, not run on their behalf.
- [x] Custom domain noted as **PENDING** in `astro.config.mjs` (`site`) and the README launch checklist; HTTPS is automatic on Vercel once wired.
- [x] README documents the full "where to edit" map: color → `tailwind.config.mjs` + `global.css :root`; copy → `site.es.ts`/`site.en.ts`; config → `site.config.ts`; analytics → `PUBLIC_GA_ID`.
- [x] DoD §11 re-verified on the build: **no pricing** (0 hits in dist), **no raw hex in components** (one-token recolor holds — 44 token-utility usages, all color via tokens), endpoints + per-locale OG present, **hreflang es/en/x-default + canonical on both routes**, faceless, employers-as-experience, testimonials-conditional, Lighthouse 100×4 (Phase 5).

**Completion notes**: Created `README.md` (overview, commands, project map, the edit-here map, PENDING-values table, Vercel deploy steps, DoD), `vercel.json` (framework=astro, build/output pinned, `cleanUrls`, immutable cache on `/_astro/*` + 1-day on `/og/*`), and `.env.example` (documents `PUBLIC_GA_ID`; `.env*` already gitignored). Modified `astro.config.mjs` comments only (`site` flagged PENDING; documented why a pure-static Astro site needs **no adapter**). **Decision (sanctioned deviation):** chose **zero-config static deploy** over installing `@astrojs/vercel` — the adapter is SSR-oriented and Astro's guidance is that static sites need none; `vercel.json` gives a deterministic build without the extra dependency (CLAUDE.md's "static adapter" intent = static deploy on Vercel, which this satisfies). **Deploy honesty:** I can't run the deploy — it requires the owner's Vercel account auth (outward-facing) and the real PENDING values (domain, WhatsApp number, demo URLs, GA id, email); the project is verified build-ready and the one-command path is documented. Build clean, `astro check` 0 errors. **All 7 phases (0–6) complete.**

---

## Phase 7: Live Deploy on GitHub Pages ✅
**Goal**: Get the landing publicly live with a shareable URL, deployed automatically on every push — without waiting on the Vercel account or the PENDING real values.
**Depends on**: Phase 6 (clean static build).
**Live URLs**: **https://luisgxz.github.io/nexora/** (ES) · **https://luisgxz.github.io/nexora/en/** (EN).
**Repo**: https://github.com/LuisGxz/nexora (public — required for free GitHub Pages).
**Files to read**: `astro.config.mjs`, `src/lib/i18n.ts`, `src/layouts/BaseLayout.astro`, `src/config/site.config.ts`, `src/pages/{robots.txt,sitemap.xml,nexora.vcf}.ts`, Header/LanguageToggle/Contact (internal-link audit).
**Files to create**:
- `.github/workflows/deploy.yml` (GitHub Actions → Pages via `withastro/action@v3` + `actions/deploy-pages@v4`; triggers on push to `main` + manual `workflow_dispatch`).
**Files to modify**:
- `astro.config.mjs` (`site: 'https://luisgxz.github.io'` + `base: '/nexora'`).
- `src/lib/i18n.ts` (new `withBase()` helper; base-aware `pathForLocale` + first-visit redirect script).
- `src/layouts/BaseLayout.astro` (base-prefix favicon, canonical, OG image; imports `withBase`).
- `src/config/site.config.ts` (base-aware `vcardPath`; `brand.url` → live Pages URL).
- `src/pages/robots.txt.ts` (base-aware `Sitemap:` reference).
**Estimated tokens**: ~4,000 (read/audit) + ~1,500 (write).
**Model recommendation**: Opus (deploy target decision + cross-file base-path correctness on a bilingual site with a client redirect).
**Acceptance criteria**:
- [x] Public repo created and pushed; Pages enabled with `build_type: workflow`; Actions deploy succeeds (~39s).
- [x] Site adapted to the `/nexora/` subpath: `withBase()` centralizes the join Astro does NOT auto-apply to hardcoded `href`/`src`. Every internal link resolves under base — locale routes, favicon, OG, vCard, sitemap, robots, ES→EN redirect.
- [x] Live verification: `/`, `/en/`, `/favicon.svg`, `/sitemap.xml`, and hashed `_astro/*` CSS+JS all return **200**.
- [x] SEO stays correct under subpath: canonical + hreflang (es/en/x-default) + OG all emit absolute `https://luisgxz.github.io/nexora/...` URLs; sitemap lists both locale routes with alternates.
- [x] Degrades gracefully: `withBase()` normalizes `import.meta.env.BASE_URL`, so reverting to a root domain later needs only `base: '/'` + real `site` — no per-link edits.

**Completion notes**: **Decision (sanctioned deviation from the Vercel plan):** deployed on **GitHub Pages** instead of Vercel — owner chose the `luisgxz.github.io/nexora` subpath URL (over the root user-site) so the primary Pages slot stays free. Vercel path (`vercel.json`, README) remains valid and untouched for a future custom-domain launch. **Base-path work was the crux:** a bilingual site with absolute `/`, `/en/`, a client-side first-visit `location.replace('/en/')`, favicon, OG, and vCard links all break under a subpath; solved once via `withBase()` rather than scattering base logic. `pathForLocale` becoming base-aware auto-fixed Header/LanguageToggle/hreflang/sitemap (all route through it). Local build + live curl both confirm correct `/nexora/` prefixes. **Auto-deploy:** every `git push` to `main` rebuilds and redeploys (no manual step). **Still PENDING (deferred to a follow-up session):** real WhatsApp number (`593900000000` placeholder), demo URLs, email, social handles, GA id — landing is live but the WhatsApp CTA points at a placeholder number until these are filled in `src/config/site.config.ts`. **Phases 0–7 complete; site is publicly live.**

---

## Assumptions / open items
- **Brand folder lives in `nexora-brand/`**, not repo root as the prompt assumes. Phase 0 copies assets out; the folder stays read-only.
- **Pricing conflict resolved in favor of NO pricing**: brand kit (`flows/user-flows.md`, `README.md`) still describes tiers — ignore them; 07 is repurposed.
- **Real values pending from owner**: WhatsApp E.164 number, demo URLs, analytics (GA) id, email, social handles, actual `works[]` content. Use clearly-marked placeholders in `site.config.ts` until provided.
- `turnia-saas-reservas-plan.md` and `nexora-documento-administrativo.docx` are out of scope for this landing build (Turnia is a separate product; the .docx is internal admin).
