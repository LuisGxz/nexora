# Nexora — Landing Comercial

Bilingual (ES default / EN), conversion-focused, single-page landing for **Nexora Software**, a software studio in Guayaquil, Ecuador. Its one job: turn visitors into qualified WhatsApp contacts. No backend, no database, no auth — a static site deployed on Vercel.

- **Stack:** Astro 5 (static) · Tailwind CSS v3 · React 19 (interactive islands only) · TypeScript.
- **Quality bar:** Lighthouse mobile **100 / 100 / 100 / 100** (perf / a11y / best-practices / SEO) on both routes, WCAG AA, CLS 0.
- **Non-negotiables:** no pricing anywhere · faceless (no people imagery) · nothing hardcoded outside `src/content/` · one-token recolor.

---

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:4321)
npm run build    # static build → dist/
npm run preview  # serve the production build locally
npm run check    # astro check (TypeScript + Astro diagnostics)
```

---

## Where to edit what

Everything that can change is centralized. Changing one of these recolors / re-copies / reconfigures the **whole** site.

### Change a color → design tokens (two mirrored surfaces, keep in sync)
- `tailwind.config.mjs` — the `theme.extend` tokens (utilities like `bg-navy-900`, `text-blue`).
- `src/styles/global.css` — the same values as `:root` CSS custom properties (for gradients / inline SVG `currentColor`).
- Both are ports of `nexora-brand/tokens/`. Edit a token in **both** places and the whole site recolors — no component hardcodes a hex.

### Change copy / lists → content files (ES + EN, typed mirror)
- `src/content/site.es.ts` — Spanish (default market).
- `src/content/site.en.ts` — English mirror.
- `src/content/types.ts` — the `SiteContent` contract both files must satisfy (the compiler guarantees ES/EN never drift).
- Adding a service / work / FAQ / niche is **one entry in an array**. No copy lives in components.

### Change config (number, demos, social, brand) → one file
- `src/config/site.config.ts` — WhatsApp E.164 number, live demo URLs, social handles, brand name/email/location, vCard path. The WhatsApp links, the vCard endpoint, and the footer all read from here.

### Analytics → environment only
- `PUBLIC_GA_ID` (see `.env.example`). Unset → analytics is a no-op and **zero** analytics JS ships. Never commit a real id.

### Visual identity source of truth
- `nexora-brand/` — tokens, logos, icons, mockups, brand guidelines. Read-only; assets were copied into `src/assets/` in Phase 0.

---

## Project structure

```
src/
  assets/            logos + icon set (inline SVG, currentColor)
  components/
    ui/              Icon, Button, SectionEyebrow
    sections/        Hero, Services, Works, Process, Niches, About,
                     Testimonials, WhyNexora, Faq (island), Contact
    Header, Footer, QuoteForm (island), LanguageToggle (island)
  config/site.config.ts     single source for non-copy/non-theme values
  content/                  types.ts + site.es.ts + site.en.ts
  layouts/BaseLayout.astro  head: SEO (canonical, hreflang, OG/Twitter), gated GA
  lib/                      i18n, whatsapp, analytics
  pages/
    index.astro            ES route  (/)
    en/index.astro         EN route  (/en/)
    nexora.vcf.ts          vCard endpoint  (/nexora.vcf)
    sitemap.xml.ts         sitemap with hreflang  (/sitemap.xml)
    robots.txt.ts          robots  (/robots.txt)
  styles/global.css         Tailwind layers + :root tokens
public/                     favicon, og/ share images
```

Bilingual model: ES at `/`, EN at `/en/`. First visit auto-detects (`navigator.language`) and redirects once to `/en/` for non-Spanish browsers; the manual ES|EN toggle persists the choice (`localStorage: nexora_lang`) and is never auto-overridden again.

---

## ⚠️ Before launch — fill PENDING real values

These ship as clearly-marked placeholders. Search the repo for `PENDING` and set:

| What | Where |
|---|---|
| Production domain | `astro.config.mjs` → `site` (drives canonical / hreflang / sitemap / OG URLs) |
| WhatsApp number (E.164, no `+`) | `src/config/site.config.ts` → `whatsappNumber` |
| Live demo URLs | ✅ done — `src/config/site.config.ts` → `demoUrls` points at the 5 demos shipped from `public/demos/<slug>/` (previews in `public/works/`) |
| Contact email | `src/config/site.config.ts` → `brand.email` |
| Social handles | `src/config/site.config.ts` → `social` |
| Employer roles / periods | `src/content/site.es.ts` + `site.en.ts` → `about.experience` |
| GA measurement id | Vercel env `PUBLIC_GA_ID` |

The OG share images in `public/og/` carry the brand asset's own `nexora.studio` text — re-export from `nexora-brand/social/og-share-card.svg` if the domain/wording changes.

---

## Deploys (both live)

| Target | URL | How it updates |
|---|---|---|
| **Vercel (primary share link)** | **https://nexora-gye.vercel.app/** | `npx vercel deploy --prod --yes` (CLI; project `nexora`, domain pinned via `vercel domains add`). Git auto-deploy NOT connected — connect the repo in the Vercel dashboard if you want deploy-on-push. |
| GitHub Pages (mirror) | https://luisgxz.github.io/nexora/ | Auto on every push to `main` (Actions workflow) |

The site is a pure static build, so **no adapter is needed** — `vercel.json` pins framework, build, output, clean URLs, trailing slashes and asset caching. `astro.config.mjs` detects the target at build time (`VERCEL` env): Vercel builds at the root of `nexora-gye.vercel.app`; Pages builds under the `/nexora/` subpath. Canonicals, sitemap, OG and the vCard URL follow whichever target built them.

Add `PUBLIC_GA_ID` in *Vercel → Settings → Environment Variables* (Production) when you want analytics. A future custom domain: add it in *Vercel → Project → Domains*, point `vercelSite` in `astro.config.mjs` at it, redeploy.

---

## Definition of Done (plan §11)

No pricing · employers only as experience (not clients) · language auto-detect + persistent manual toggle · hero value + CTA above the fold · 9 sections matching mockups (07 & 03 reinterpreted) · testimonials render only when non-empty · quote form composes the WhatsApp message · WhatsApp clicks fire an analytics event · hreflang + sitemap + OG present · vCard downloads, demos link out when real · one-token recolor · no hardcoded copy outside `src/content/` · Lighthouse 95+. Remaining: production deploy (owner's Vercel login + the PENDING real values above).
