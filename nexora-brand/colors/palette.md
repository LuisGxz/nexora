# Nexora — Color Palette

All values are mirrored from `tokens/design-tokens.json` (the source of truth). Do not hardcode colors in product code — reference the token names.

Navy + electric blue is the trust-signal palette of software / fintech. Cyan is a spark, not a theme: use it for a single highlight, glow, or data accent per view.

---

## Brand core

| Token | Hex | Role |
|---|---|---|
| `brand.navy` | `#0B1530` | Base ink. Dark backgrounds, primary text on light. |
| `brand.blue` | `#2563EB` | Primary accent. CTAs, links, active states. |
| `brand.blueHover` | `#1D4FD7` | Primary hover / pressed. |
| `brand.cyan` | `#22D3EE` | Secondary accent — sparingly. |
| `brand.slate` | `#5B6470` | Muted / supporting text. |

## Semantic roles

| Role | Token | Hex |
|---|---|---|
| Background (light) | `semantic.background` | `#F8FAFC` |
| Background (dark) | `semantic.backgroundDark` | `#0B1530` |
| Surface (light) | `semantic.surface` | `#FFFFFF` |
| Surface (dark) | `semantic.surfaceDark` | `#111E3D` |
| Primary | `semantic.primary` | `#2563EB` |
| Text on primary | `semantic.primaryText` | `#FFFFFF` |
| Accent | `semantic.accent` | `#22D3EE` |
| Text primary | `semantic.textPrimary` | `#0B1530` |
| Text on dark | `semantic.textOnDark` | `#F8FAFC` |
| Text muted | `semantic.textMuted` | `#5B6470` |
| Text muted (on dark) | `semantic.textMutedDark` | `#94A3B8` |
| Border | `semantic.border` | `#E2E8F0` |
| Border (dark) | `semantic.borderDark` | `#1B294F` |
| Success | `semantic.success` | `#10B981` |
| Warning | `semantic.warning` | `#F59E0B` |
| Danger | `semantic.danger` | `#EF4444` |
| WhatsApp | `semantic.whatsapp` | `#25D366` |

## Ramps (for hovers, states, charts)

**Navy** `950 #070C1C · 900 #0B1530 · 800 #111E3D · 700 #1B294F · 600 #293B66 · 500 #3B4F7E`

**Blue** `700 #1D4FD7 · 600 #2563EB · 500 #3B82F6 · 400 #60A5FA · 100 #DBE6FE · 50 #EFF4FF`

**Neutral** `0 #FFFFFF · 50 #F8FAFC · 100 #F1F5F9 · 200 #E2E8F0 · 300 #CBD5E1 · 400 #94A3B8 · 500 #64748B · 700 #334155 · 900 #0F172A`

---

## Contrast notes (WCAG)

All product text must meet **AA** (4.5:1 body, 3:1 large ≥24px or 19px bold).

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| `#0B1530` navy | `#F8FAFC` off-white | ~16.8:1 | AAA — default body on light |
| `#5B6470` slate | `#F8FAFC` off-white | ~5.0:1 | AA — muted text on light |
| `#FFFFFF` white | `#2563EB` blue | ~4.8:1 | AA — text on primary buttons |
| `#FFFFFF` white | `#0B1530` navy | ~16.9:1 | AAA — text on dark hero |
| `#94A3B8` | `#0B1530` navy | ~6.4:1 | AA — muted text on dark |
| `#2563EB` blue | `#FFFFFF` white | ~4.8:1 | AA — links / large text only |
| `#22D3EE` cyan | `#0B1530` navy | ~9.7:1 | AAA — accent on dark only |

**Watch-outs**
- `#22D3EE` cyan on white fails AA for text (~1.7:1). Use cyan on dark only, or as a non-text graphic element.
- `#2563EB` blue on white passes for links and ≥19px bold / ≥24px; avoid blue body text smaller than that.
- Never place `brand.slate` text on `brand.blue` — insufficient contrast.
