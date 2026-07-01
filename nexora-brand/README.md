# Nexora — Brand & Landing Kit

Complete, production-ready visual identity + mockups for **Nexora Software** — a formal, trustworthy software studio in Guayaquil, Ecuador, and the umbrella brand for its own products (Faktova, Turnia). This folder is the handoff package for building the conversion-focused, bilingual (ES/EN) landing page.

> **Single source of truth:** `tokens/design-tokens.json`. Every color, type, spacing, radius, shadow and motion value flows from there. Don't hardcode — reference the tokens.

---

## How to consume this folder

| Folder / file | What it is | How a developer uses it |
|---|---|---|
| `tokens/design-tokens.json` | The source of truth (colors, typography, spacing, radii, shadows, motion). | Import into your design-token pipeline, or read it to generate CSS variables. **Start here.** |
| `tokens/tailwind.config.snippet.js` | Paste-ready `theme.extend` derived from the tokens. | Drop into `tailwind.config.js`. Then use classes like `bg-navy-900`, `text-blue`, `font-display`, `shadow-md`, `rounded-xl`. |
| `colors/palette.md` | Every hex, its semantic role, and WCAG contrast notes. | Reference when choosing fg/bg pairs; respect the contrast watch-outs. |
| `typography/typography.md` | Families, weights, full type scale, line-heights, tracking, Google Fonts URLs. | Add the `<link>`/`@import`, then map the scale tokens to your headings/body. |
| `logo/` | Logo system in clean SVG. | See the table below. Use the isotype for favicons/app icons, lockups for headers/footers. |
| `colors/` · `typography/` | Human-readable specs that mirror the tokens. | Design reference + onboarding. |
| `icons/` | Service icons (7) + UI icons (5), 24px grid, 2px stroke, `currentColor`. | Inline the SVGs (so they inherit text color), or load as components. Recolor via CSS `color`. |
| `mockups/` | Nine mobile-first section mockups (390×844 SVG), named `01`–`09`. | Visual spec for each landing-page section. Build the real React/HTML to match; don't ship the SVGs as the site. |
| `social/` | Brand applied to social + sharing: Instagram (post, carousel, story, profile), LinkedIn (cover, company page), WhatsApp Business, OG share card, avatar. | Export to PNG/JPG at native size for upload; use the post/story/cover SVGs as editable templates for ongoing content. |
| `brand-guidelines.md` | Voice, logo do/don'ts, color usage, spacing, motion. | Read before designing or writing copy. |
| `flows/user-flows.md` | Conversion flows, CTA hierarchy, bilingual routing (ES→Ecuador / EN→international), WhatsApp deep-links, vCard. | Implement routing + CTA logic from this. |

---

## Logo files

| File | Use |
|---|---|
| `logo/nexora-logo-full.svg` | Primary lockup — **dark** backgrounds |
| `logo/nexora-logo-full-light.svg` | Primary lockup — **light** backgrounds |
| `logo/nexora-logo-mono.svg` | Single color (inherits `currentColor`) |
| `logo/nexora-isotype.svg` | N monogram only — app icon, avatar, tight spaces |
| `logo/favicon.svg` | Browser tab — isotype on navy rounded square |

### Social & sharing assets (`social/`)

| File | Format | Native size |
|---|---|---|
| `instagram-post.svg` | IG feed — value prop | 1080 × 1080 |
| `instagram-post-service.svg` | IG feed — service carousel slide | 1080 × 1080 |
| `instagram-story.svg` | IG / FB story, reels cover | 1080 × 1920 |
| `instagram-profile.svg` | Profile + post-grid mockup (reference) | — |
| `linkedin-cover.svg` | LinkedIn page / profile banner | 1584 × 396 |
| `linkedin-company.svg` | Company page mockup (reference) | — |
| `whatsapp-business.svg` | WhatsApp Business chat mockup (reference) | — |
| `og-share-card.svg` | Open Graph / Twitter share image | 1200 × 630 |
| `avatar.svg` | Square profile photo (all platforms) | 400 × 400 |

The `*-profile`, `*-company` and `whatsapp-business` files are **context mockups** (they show the brand inside the platform UI) — use them as reference, not as uploads. The rest are **production templates**: export to PNG/JPG at native size. Reuse `instagram-post*` / `instagram-story` as editable templates for ongoing content — swap the headline, keep the system.

---

All logos reference Google Fonts by name (no fonts baked in) — load **Space Grotesk** for the wordmark to render correctly. The isotype is pure geometry and needs no font.

---

## The landing page, in order

`01 Hero · 02 Services · 03 Demos · 04 Process · 05 Niches · 06 About · 07 Pricing · 08 FAQ · 09 Contact`

Anchor IDs: `#inicio #servicios #demos #proceso #para-quien #estudio #planes #faq #contacto`. Every section funnels to **one primary action: start a WhatsApp conversation.** See `flows/user-flows.md`.

## Non-negotiables

- **Faceless.** No human faces, no founder photos, no stock people anywhere.
- **No** gears, globes, sails, flames, or candle imagery — ever.
- **Trust palette:** navy + electric blue; cyan is a single spark per view, never body text.
- **WCAG AA** on all text. Check `colors/palette.md` watch-outs.
- **Spanish first, English second.** Language toggle changes copy **and** pricing market (ES → Ecuador, EN → international).

## Quick start

1. Read `brand-guidelines.md`.
2. Wire `tokens/design-tokens.json` → CSS variables (or paste `tokens/tailwind.config.snippet.js`).
3. Load Google Fonts from `typography/typography.md`.
4. Drop in `logo/` and `icons/` SVGs.
5. Build sections to match `mockups/01`–`09`, implementing the CTA + bilingual logic from `flows/user-flows.md`.
