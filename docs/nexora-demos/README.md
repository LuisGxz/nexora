# nexora-demos

5 sitios demo de portafolio para **Nexora** (studio de software). Cada demo es un sitio de ventas/marketing falso-pero-realista para un tipo de negocio local, con identidad visual propia. **Esta carpeta es el input exacto del prompt de Claude Code**: todo lo necesario para construir cada demo idéntico está aquí.

## Estado
| Demo | Carpeta | Estado |
|---|---|---|
| 01 — Bravo Barber Co. (barbería) | `01-barberia/` | ✅ Piloto completo |
| 02 — La Sazón (restaurante) | `02-restaurante/` | ✅ Completo |
| 03 — Clínica Dental Aurora | `03-consultorio/` | ✅ Completo |
| 04 — Andrea & Mateo (boda) | `04-evento/` | ✅ Completo |
| 05 — Vértice Consultores (PyME B2B) | `05-pyme/` | ✅ Completo |

## Estructura y cómo consumir cada carpeta

```
/nexora-demos/
├── README.md                  # este archivo
├── demos-spec.md              # spec escrito por pantalla de TODOS los demos
└── NN-<demo>/
    ├── tokens.json            # fuente de verdad visual: paleta, tipografía, radii,
    │                          #   sombras, spacing + snippet Tailwind (key "tailwind")
    ├── content.md             # TODO el copy y data ficticia, listo para la config
    ├── <Demo>.dc.html         # ⭐ el demo real, funcionando (HTML de referencia canónica)
    └── mockups/               # PNG por sección y estado, mobile + desktop
```

**Flujo recomendado para el developer (Claude Code):**
1. Lee `demos-spec.md` → estructura de secciones, componentes, estados e interacciones del demo.
2. Carga `tokens.json` → mapea la key `tailwind` directo a `tailwind.config` (o a variables CSS).
3. Copia el contenido desde `content.md` a la config/CMS del sitio (no inventar copy).
4. Usa el `.dc.html` como **referencia canónica de markup, estilos inline y lógica del flujo** (el flujo de reserva completo — estados incluidos — está implementado ahí en JS plano).
5. Contrasta el resultado visual contra los PNG de `mockups/`.

## Convención de nombres en `mockups/`
`<orden>-<seccion>[--<estado>]--<viewport>.png`
- Viewports: `mobile` (390px) · `desktop` (1280px)
- Ej: `04-reserva--paso3-loading--mobile.png`, `01-hero--desktop.png`, `00-pagina-completa--mobile.png`

## Decisión de formato (log)
El brief original pedía mockups `.svg`. Se cambió a **HTML real + export PNG** (aprobado por el cliente): el HTML interactivo es más fiel que un SVG dibujado a mano, y le da a Claude Code el markup y los estilos exactos en lugar de una aproximación visual. Los PNG quedan como referencia visual estática.

## Reglas transversales (los 5 demos)
- **Level 1:** reservas/RSVP/pedidos componen un mensaje de WhatsApp client-side (`https://wa.me/<número>?text=<encodeURIComponent(msg)>`). Sin backend, sin pagos online.
- **Mobile-first**, fluid layout (grids `auto-fit` + `clamp()`), breakpoint efectivo ~768px.
- **Accesibilidad:** contraste WCAG AA, hit targets ≥ 44px, `aria-label` en controles sin texto.
- **Imágenes:** fotografía de stock de Unsplash (licencia Unsplash, uso comercial permitido) enlazada por URL — las URLs exactas están en el `content.md` de cada demo. En producción, descargar y self-hostear (o reemplazar por fotos reales del cliente). Si una URL falla, el sitio degrada a un bloque oscuro con etiqueta mono (listener global de error de imagen). El mapa es un placeholder CSS (en producción: embed de Google Maps).
- **Datos ficticios en español** (Guayaquil, teléfonos +593 9x falsos). Cada footer declara que el negocio es ficticio y que es un demo de Nexora.
- Cada demo tiene identidad propia — **no** reutilizar tokens entre demos, **no** usar la marca Nexora dentro del demo.
