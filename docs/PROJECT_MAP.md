# Nexora — Project Map

Single-page bilingual landing (Astro + Tailwind + React islands + TS), static, Vercel. Read this before exploring directories; read only the files a phase lists.

## Directory structure (target)

```
/
├── CLAUDE.md                       # project rules + commands (read first)
├── astro.config.mjs                # Astro + integrations (tailwind, react), static output
├── tailwind.config.mjs             # theme.extend ported from brand tokens
├── tsconfig.json
├── package.json
├── README.md                       # run/deploy + WHERE to edit colors/content/config
├── public/
│   ├── favicon.svg                 # from nexora-brand/logo/favicon.svg
│   ├── nexora.vcf                  # downloadable contact card
│   ├── robots.txt
│   ├── og/                         # OG share image(s)
│   ├── demos/                      # 5 self-contained demo landings (vanilla HTML/CSS/JS)
│   │   ├── bravo-barber/  la-sazon/  dental-aurora/  andrea-y-mateo/  vertice/
│   └── works/                      # 960×540 webp previews for the Works cards
├── nexora-brand/                   # ⭐ visual identity = source of truth (input, read-only)
│   ├── tokens/design-tokens.json
│   ├── tokens/tailwind.config.snippet.js
│   ├── typography/typography.md
│   ├── colors/palette.md
│   ├── logo/*.svg  icons/*.svg  mockups/01..09-*.svg  social/*.svg
│   ├── brand-guidelines.md  flows/user-flows.md  README.md
├── docs/
│   ├── PHASES.md                   # phase tracker (current work)
│   ├── PROJECT_MAP.md              # this file
│   ├── nexora-plan-proyecto.md     # master plan
│   ├── nexora-prompt-claude-code.md# build prompt
│   └── nexora-demos/               # input spec for the 5 demos (README, demos-spec, per-demo content/tokens/dc.html/mockups) — read-only
└── src/
    ├── assets/
    │   ├── logo/                   # copied from nexora-brand/logo/
    │   └── icons/                  # copied from nexora-brand/icons/
    ├── components/
    │   ├── Header.astro            # nav + sticky compact WhatsApp button
    │   ├── Footer.astro
    │   ├── LanguageToggle.tsx      # React island — ES|EN switch, persists choice
    │   ├── sections/
    │   │   ├── Hero.astro          # 01
    │   │   ├── Services.astro      # 02
    │   │   ├── Works.astro         # 03 (demos + freelance, own work only)
    │   │   ├── Process.astro       # 04
    │   │   ├── Niches.astro        # 05
    │   │   ├── About.astro         # 06 (experience as background, not clients)
    │   │   ├── WhyNexora.astro     # 07 (repurposed 07-pricing — value pillars, NO prices)
    │   │   ├── Faq.tsx             # 08 React island — accordion
    │   │   ├── Contact.astro       # 09 wrapper (WhatsApp button + vCard)
    │   │   └── Testimonials.astro  # optional, renders only if array non-empty
    │   ├── QuoteForm.tsx           # React island — form → wa.me prefilled, no backend
    │   └── ui/                     # Button, Icon, SectionEyebrow, etc.
    ├── content/
    │   ├── types.ts                # SiteContent interface (shared shape)
    │   ├── site.es.ts              # ES copy + lists (default)
    │   └── site.en.ts              # EN copy + lists
    ├── config/site.config.ts       # WhatsApp E164, demo URLs, handles, analytics id, brand name
    ├── lib/
    │   ├── whatsapp.ts             # build wa.me deep-link from config + prefill template
    │   ├── analytics.ts            # fire cta_whatsapp event (no-op if no GA id)
    │   └── i18n.ts                 # locale resolution helpers
    ├── layouts/BaseLayout.astro    # html shell, fonts, meta/OG, hreflang, analytics hook
    ├── middleware.ts               # first-visit language auto-detect → redirect once
    ├── styles/global.css           # :root CSS vars from tokens + base styles
    └── pages/
        ├── index.astro             # ES page (composes sections)
        ├── en/index.astro          # EN page
        └── sitemap.xml.ts          # generated (or @astrojs/sitemap)
```

> **Brand folder:** lives at the repo root **`/nexora-brand/`**, exactly as the plan/prompt assume. Read it there; in Phase 0 copy the SVGs into `src/assets/` and `public/`. Do not edit the brand folder — it is read-only input.

## Key files — read priority

| File | Purpose | Priority |
|---|---|---|
| `docs/PHASES.md` | Current phase + acceptance criteria | 🔴 always first |
| `nexora-brand/tokens/design-tokens.json` | Colors/type/spacing/radii/shadow/motion — source of truth | 🔴 Phase 0 |
| `nexora-brand/tokens/tailwind.config.snippet.js` | Paste-ready `theme.extend` | 🔴 Phase 0 |
| `nexora-brand/typography/typography.md` | Google Fonts + type scale | 🔴 Phase 0 |
| `src/content/types.ts` | Content contract (read before any section) | 🔴 Phase 2+ |
| `src/content/site.es.ts` / `site.en.ts` | All copy + lists | 🟡 per section |
| `src/config/site.config.ts` | WhatsApp/analytics/URLs | 🟡 Phase 1, 4 |
| `nexora-brand/mockups/0N-*.svg` | Visual spec per section | 🟡 only the section being built |
| `nexora-brand/flows/user-flows.md` | CTA + WhatsApp deep-link logic (ignore pricing parts) | 🟡 Phase 3, 4 |
| `nexora-brand/brand-guidelines.md` | Voice, color usage, do/don'ts | 🟢 reference |

## Module dependency graph

```
tokens (brand)  ─▶  tailwind.config.mjs + global.css(:root)
                        │
                        ▼
types.ts  ─▶  site.es.ts / site.en.ts  ─▶  config/site.config.ts
                        │                          │
                        ▼                          ▼
          BaseLayout ─▶ pages/(index, en/index) ─▶ components/sections/*
                        │                          │
                        ▼                          ▼
                  middleware.ts            lib/{whatsapp,analytics,i18n}
                  (auto-detect)            islands: LanguageToggle, Faq, QuoteForm
```
Build order: tokens → content model → config → layout/pages → static sections → islands → integrations/SEO.

## External integrations
| Integration | Detail | Where |
|---|---|---|
| WhatsApp | `wa.me/<E164>?text=` deep-link, prefill per locale | `lib/whatsapp.ts`, `site.config.ts` |
| Analytics | GA event `cta_whatsapp` (source+lang), id from env, no-op if absent | `lib/analytics.ts` |
| Google Fonts | Space Grotesk + Inter, preconnect | `BaseLayout.astro` |
| vCard | static `public/nexora.vcf` from config values | `public/`, Contact |
| SEO | hreflang es/en, sitemap, OG/Twitter, canonical | `BaseLayout.astro`, `pages/sitemap.xml.ts` |
| Vercel | static adapter, hobby tier | `astro.config.mjs` |
