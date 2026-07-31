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

| What | Where | Status |
|---|---|---|
| WhatsApp number (E.164, no `+`) | `src/config/site.config.ts` → `whatsappNumber` | ✅ `593995402939` |
| Contact email | `src/config/site.config.ts` → `brand.email` | ✅ `hola@nexoradevs.com` (Google Workspace domain alias of the owner's `spektova.com` tenant — receives *and* sends) |
| Live demo URLs | `src/config/site.config.ts` → `demoUrls` (5 demos from `public/demos/<slug>/`, previews in `public/works/`) | ✅ |
| Employer roles / periods | `src/content/site.es.ts` + `site.en.ts` → `about.experience` | ✅ real roles + periods |
| LinkedIn / portfolio / Fiverr | `src/config/site.config.ts` → `social` | ✅ personal profiles (no company page yet) |
| GA measurement id | Vercel env `PUBLIC_GA_ID` (Production) | ✅ set in Vercel — value intentionally NOT in the repo; it is baked in at build, so **a change needs a redeploy** |
| Custom domain | `src/config/domain.mjs` → `PRIMARY_DOMAIN` (drives canonical / hreflang / sitemap / OG / vCard / share cards) | ✅ `nexoradevs.com` |

**Changing the domain is a one-line edit.** `src/config/domain.mjs` is the single source of truth: `astro.config.mjs`, `site.config.ts`, `BaseLayout.astro` and `scripts/render-og.mjs` all import it. After editing it, run `npm run og` to re-rasterize the share cards, then redeploy.

The OG share images in `public/og/` are generated by `npm run og` from `nexora-brand/social/og-share-card.svg` and print the live domain in their footer. The brand SVG itself stays untouched (read-only kit); the domain swap + EN translation happen at raster time, and the script throws if the brand SVG's text nodes change so a stale card can never ship silently.

---

## Deploys (both live)

| Target | URL | How it updates |
|---|---|---|
| **Vercel (primary, canonical)** | **https://nexoradevs.com/** | `npx vercel deploy --prod --yes` (CLI; project `nexora`). Git auto-deploy NOT connected — connect the repo in the Vercel dashboard if you want deploy-on-push. |
| GitHub Pages (mirror) | https://luisgxz.github.io/nexora/ | Auto on every push to `main` (Actions workflow) |

`nexoradevs.com` (apex, canonical), `www.nexoradevs.com` and the legacy `nexora-gye.vercel.app` are all attached to the Vercel project; the latter two redirect to the apex. DNS lives at **Cloudflare** — the apex and `www` are `A` records to `76.76.21.21`, set to **DNS only (grey cloud)**: proxying them breaks Vercel's certificate issuance.

The site is a pure static build, so **no adapter is needed** — `vercel.json` pins framework, build, output, clean URLs, trailing slashes and asset caching. `astro.config.mjs` detects the target at build time (`VERCEL` env): Vercel builds at the root of `nexoradevs.com`; Pages builds under the `/nexora/` subpath. Canonicals, sitemap, OG and the vCard URL follow whichever target built them.

`PUBLIC_GA_ID` is set in *Vercel → Settings → Environment Variables* (Production). Because the build is static the id is baked in at build time, so changing it requires a redeploy — setting the variable alone does nothing.

⚠️ **DNS must stay at Cloudflare.** Vercel's dashboard shows a "DNS Change Recommended" hint suggesting you move the nameservers to Vercel — do not: the zone also holds Google Workspace's MX, SPF and DKIM records for `hola@nexoradevs.com`, and migrating the nameservers would drop them and break mail.

---

## Definition of Done (plan §11)

No pricing · employers only as experience (not clients) · language auto-detect + persistent manual toggle · hero value + CTA above the fold · 9 sections matching mockups (07 & 03 reinterpreted) · quote form composes the WhatsApp message · WhatsApp clicks fire an analytics event · hreflang + sitemap + OG present · vCard downloads, 5 demos live · one-token recolor · no hardcoded copy outside `src/content/` · Lighthouse 100×4. Deployed on both targets. Remaining: the two ⚠️ rows above (Fiverr URL, GA id).
