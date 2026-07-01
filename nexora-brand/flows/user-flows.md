# Nexora — User Flows & CTA Logic

Conversion-focused, single landing page, bilingual (ES default / EN). The whole page funnels to **one primary action: start a WhatsApp conversation.** Everything else is a supporting path.

---

## 1. Primary conversion flow

```
Land (hero)
  → Read value prop
  → [Primary CTA] Escríbenos por WhatsApp ─────────────► WhatsApp deep-link (prefilled message)
  → [Secondary CTA] Ver demos en vivo
        → Browse demos (03)
        → Open a live demo (new tab)
        → Return → [CTA on demo card] Quiero algo así ──► WhatsApp deep-link (prefilled: demo name)
```

Secondary, lower-intent paths all reconverge on WhatsApp:

```
Services (02) ─ tap a service ─► scroll to matching demo / pricing ─► WhatsApp
Pricing (07) ─ choose tier ────────────────────────────────────────► WhatsApp (prefilled: tier)
FAQ (08) ─ "¿Otra pregunta?" ──────────────────────────────────────► WhatsApp
Contact (09) ─ big WhatsApp button  +  Save vCard (.vcf)
```

### CTA hierarchy (per screen)
- **One** primary (filled blue, or WhatsApp green in the contact block) per viewport.
- Secondary = outline / ghost. Tertiary = text link with `→`.
- Sticky header keeps a compact WhatsApp button visible after the hero scrolls away.

---

## 2. Bilingual routing (ES ⇄ EN)

Language is the switch that changes **copy + pricing market**.

```
Detect / choose language
 ├─ ES (default)  → Spanish copy  → Ecuador pricing  → WhatsApp message in Spanish
 └─ EN            → English copy  → International pricing → WhatsApp message in English
```

**Rules**
- Default to **ES**. Respect `?lang=` query param first, then `navigator.language` (`es*` → ES, else EN), then a stored preference (`localStorage: nexora_lang`).
- The header toggle (`ES | EN`) is visible in the hero and sticky header.
- Switching language updates: all copy, the **pricing market**, and the WhatsApp prefilled message language. It does **not** reload to a different URL — it swaps the `lang` state and updates `?lang=` for shareable links.
- Persist the choice in `localStorage` so returning visitors keep their language.

### Pricing by language (same tiers, different market)
| Tier | ES — Ecuador | EN — International |
|---|---|---|
| Esencial | shown in USD, Ecuador rate | shown in USD, international rate |
| Pro | Ecuador rate | international rate |
| Premium | "Desde …" Ecuador | "From …" international |

The pricing section shows an explicit note: **ES → "Mostrando precios Ecuador" / EN → "Showing international pricing"**, with a hint to switch language for the other market. Tier names (Esencial / Pro / Premium) stay constant; only currency framing and amounts change.

---

## 3. WhatsApp deep-link behavior

Use `https://wa.me/<E164>?text=<urlencoded>` (E.164 number, no `+`/spaces). Prefill a contextual message so the lead arrives qualified.

| Source | ES prefilled text | EN prefilled text |
|---|---|---|
| Hero primary | `Hola Nexora, quiero información sobre un proyecto.` | `Hi Nexora, I'd like info about a project.` |
| Service card | `Hola, me interesa: {servicio}.` | `Hi, I'm interested in: {service}.` |
| Demo card | `Vi el demo "{demo}" y quiero algo así.` | `I saw the "{demo}" demo and want something similar.` |
| Pricing tier | `Quiero el plan {tier}. ¿Cómo seguimos?` | `I'd like the {tier} plan. What's next?` |
| FAQ / generic | `Hola Nexora, tengo una pregunta.` | `Hi Nexora, I have a question.` |

**Behavior**
- `target="_blank"`, `rel="noopener"`. On mobile, opens the WhatsApp app; on desktop, WhatsApp Web.
- Never expose the raw number as plain text where it can be scraped; render it via the link/button. The masked number in mockups (`+593 9 •• ••• •••`) is a placeholder — replace with the real E.164 number in config.
- Fire an analytics event on click (`cta_whatsapp`, with `source` + `lang`).

---

## 4. vCard (.vcf) download

In the contact section, **Guardar contacto** downloads a `nexora.vcf` so the lead saves Nexora before leaving.

```
Tap "Guardar contacto"
  → Generate/serve nexora.vcf (name, org=Nexora Software, phone=WhatsApp E.164, email, url, location=Guayaquil)
  → Device opens "Add contact"
```

- Build the `.vcf` from the same config as the WhatsApp number (single source of truth).
- Keep it faceless: no photo field, or use the isotype as the contact image if a logo is desired.

---

## 5. Page order (single scroll)

`01 Hero → 02 Services → 03 Demos → 04 Process → 05 Niches → 06 About → 07 Pricing → 08 FAQ → 09 Contact`

- Anchor IDs for the sticky nav / in-page jumps: `#inicio #servicios #demos #proceso #para-quien #estudio #planes #faq #contacto`.
- Every section ends pointing forward; Services, Demos, Pricing, and FAQ each contain a WhatsApp on-ramp so a visitor can convert from wherever they stop.
