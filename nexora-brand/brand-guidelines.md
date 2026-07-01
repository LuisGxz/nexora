# Nexora — Brand Guidelines

Nexora is a formal, trustworthy software studio in Guayaquil, Ecuador. It builds websites, systems and applications for businesses, and is the umbrella brand for its own products (**Faktova**, **Turnia**). The name comes from *nexus* — connection and integration. **Trust is the core asset.** Every decision should make Nexora feel like a serious engineering house, never a freelancer or a "creative studio".

---

## 1. Personality

| We are | We are not |
|---|---|
| Formal, corporate-tech | Casual, playful |
| Precise, engineered | Hand-crafted, illustrative |
| Trustworthy, proven | Hype-y, salesy |
| Modern, clean | Trendy, decorative |

**Faceless by design.** No founder photos, no human faces, no stock people. The work — sites, systems, demos, products — is the hero.

## 2. Voice & tone

- **Spanish first, English second.** Default copy is ES (Ecuador audience); EN mirrors it for international clients.
- Speak to a **business owner**, not a developer. Lead with the problem they feel ("Pierdo citas porque todo es manual"), then the outcome.
- Short, declarative sentences. Confidence without exaggeration. No emojis in product copy.
- Name the method: *alcance claro · avances visibles · entregas que funcionan*.
- **Do say:** "Trabajamos con método", "Te damos una fecha exacta", "Productos propios".
- **Don't say:** "El mejor", "barato", "garantizado 100%", buzzword soup.

### Microcopy anchors
- Primary CTA (ES): **"Escríbenos por WhatsApp"** · (EN): **"Message us on WhatsApp"**
- Secondary CTA (ES): **"Ver demos en vivo"** · (EN): **"See live demos"**

## 3. Logo

**Isotype:** an "N" monogram built from four connected nodes and three struts — it reads as a network / systems diagram (connection + integration). Uniform strokes, precise angles.

**Lockup:** isotype + wordmark **NEXORA** (Space Grotesk, 700, generous tracking) with a small **SOFTWARE** descriptor below.

### Files
| File | Use |
|---|---|
| `nexora-logo-full.svg` | Primary, on dark backgrounds |
| `nexora-logo-full-light.svg` | On light backgrounds |
| `nexora-logo-mono.svg` | Single color (inherits `currentColor`) |
| `nexora-isotype.svg` | Monogram only — app icons, avatars, tight spaces |
| `favicon.svg` | Browser tab, on navy rounded square |

### Clear space & sizing
- Keep clear space ≥ the height of one node-ring on all sides.
- Minimum lockup width: **140px** (digital). Below that, use the isotype alone.
- Favicon / app icon: isotype only, never the wordmark.

### Do / Don't
- **Do** keep the isotype blue `#2563EB` on dark or light; keep struts and nodes the same weight.
- **Do** use the light lockup on photography or busy color only if contrast passes AA.
- **Don't** recolor the monogram outside the brand blues, navy, white, or single-color mono.
- **Don't** rotate, skew, add bevels/3D/shadows/gradients to the mark.
- **Don't** re-typeset "NEXORA" in another font or condense the tracking.
- **Don't** add gears, globes, sails, flames, or candle imagery anywhere — ever.

## 4. Color

Navy `#0B1530` + electric blue `#2563EB` are the trust signal. Off-white `#F8FAFC` is the canvas. Cyan `#22D3EE` is a **single spark** per view (a highlight, a glow, one accent on dark) — never a theme, never body text. Full values, roles and contrast in `colors/palette.md`; tokens in `tokens/design-tokens.json`.

- Light sections: off-white background, white cards, navy text, blue accents.
- Dark sections: navy background, navy-800 surfaces, off-white text, cyan spark. Use dark for hero, process, and contact to set rhythm — at most two background modes across a page.
- All text must meet **WCAG AA**.

## 5. Typography

- **Space Grotesk** for display/headings; **Inter** for body/UI. Google Fonts only.
- One display font per screen; never set body copy in Space Grotesk.
- Full scale, weights and import URLs in `typography/typography.md`.

## 6. Spacing & shape

- 4px base. Use the spacing scale (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128).
- Radii: inputs/buttons `lg` (14px), cards `xl` (20px), pills `full`. Keep corners consistent within a view.
- Generous whitespace and sharp alignment signal precision. When in doubt, add space, don't add elements.

## 7. Iconography

- 24px grid, 2px stroke, round caps and joins (see `icons/`). One icon per service + a small UI set.
- Icons sit in a soft square chip (`blue-50` on light, `navy-800` on dark). Keep stroke weight uniform with the logo.

## 8. Motion

- Durations 150 / 250 / 400ms; standard easing `cubic-bezier(0.4,0,0.2,1)`.
- Motion is subtle and functional: reveal, hover lift, accordion expand. No bounce, no parallax theatrics.

## 9. Imagery

- Faceless. Prefer real product screenshots, UI, dashboards, and demo previews over stock.
- Where a real asset is missing, use a neutral striped placeholder with a monospace label — never a fake illustration of a person.
