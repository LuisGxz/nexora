# Nexora — Typography

Two families, no more. A geometric display sans carries headlines (engineering precision, confidence); a clean humanist sans carries body (readability, calm). Google Fonts only.

## Families

| Use | Family | Fallback stack |
|---|---|---|
| Display / headings | **Space Grotesk** | `'Geist', 'Sora', system-ui, sans-serif` |
| Body / UI | **Inter** | `system-ui, -apple-system, 'Segoe UI', sans-serif` |
| Code / data (optional) | JetBrains Mono | `'SF Mono', ui-monospace, monospace` |

**Weights loaded:** 400 Regular · 500 Medium · 600 Semibold · 700 Bold.

## Google Fonts import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
```

## Type scale

Base 16px. Headings = Space Grotesk; body/small/caption = Inter.

| Token | Size | Line-height | Tracking | Weight | Use |
|---|---|---|---|---|---|
| `display` | 56px / 3.5rem | 1.05 | −0.02em | 700 | Hero headline |
| `h1` | 40px / 2.5rem | 1.10 | −0.02em | 700 | Page title |
| `h2` | 32px / 2rem | 1.15 | −0.01em | 600 | Section heading |
| `h3` | 24px / 1.5rem | 1.25 | −0.01em | 600 | Card / subsection |
| `h4` | 20px / 1.25rem | 1.30 | 0 | 600 | Small heading, labels |
| `body-lg` | 18px / 1.125rem | 1.60 | 0 | 400 | Lead paragraph |
| `body` | 16px / 1rem | 1.60 | 0 | 400 | Default copy |
| `small` | 14px / 0.875rem | 1.50 | 0 | 400 | Captions, helper text |
| `caption` | 12px / 0.75rem | 1.40 | +0.06em | 600 | Eyebrows, UPPERCASE labels |

### Responsive headline sizing
On viewports < 640px, step down the two largest: `display` → 36px, `h1` → 30px. Keep tracking and line-height.

## Rules

- **Eyebrows / kickers** use the `caption` token: uppercase, +0.06em tracking, `brand.blue` or `brand.slate`.
- **Wordmark** "NEXORA" is Space Grotesk 600–700 with generous tracking (~+0.12em). It is a logo, not body text — never re-typeset it inline.
- **One display font per screen.** Don't mix Space Grotesk into body paragraphs.
- **Numerals:** use Inter tabular numerals for pricing tables (`font-variant-numeric: tabular-nums`).
- **Measure:** body copy max ~68 characters per line.
- Headlines use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
