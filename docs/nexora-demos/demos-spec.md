# demos-spec.md — Spec de pantallas por demo

Spec escrito que amarra secciones ↔ componentes ↔ estados ↔ mockups. La data literal vive en `content.md` de cada demo; los valores visuales en `tokens.json`. El `.dc.html` de cada carpeta es la referencia canónica ejecutable.

## Convenciones globales
- **Layout:** container `max-width` según tokens, padding-x fluido `clamp()`. Secciones apiladas, separadas por `border 1px` (nunca sombras pesadas).
- **Responsive:** mobile-first. Grids `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`; tipografía display con `clamp()`. Nav colapsa < 768px a logo + CTA.
- **Flujos Level 1:** wizard client-side → al confirmar se compone mensaje WhatsApp (`wa.me/<número>?text=`). Estados obligatorios: idle → selección → loading → (empty | lista) → resumen → error de validación → success.
- **Placeholders de imagen:** solo donde no aplica fotografía (mapa). Las fotos son stock Unsplash hotlinked (URLs en `content.md`); si fallan, un listener global las oculta y queda el bloque oscuro con etiqueta.
- **Accesibilidad:** AA, hit targets ≥44px, focus visible, botones reales (`<button>`) en controles.

---

# 01 — Bravo Barber Co. (barbería)

**Personalidad:** oscuro, masculino, industrial. Fondo casi-negro cálido, acento cobre, tipografía condensada en mayúsculas, labels mono estilo taller. Jerarquía por bordes 1px y cambios sutiles de fondo — sin sombras, radios pequeños (4–10px).

**Fuentes:** Bebas Neue (display/botones/precios) · Inter (body) · mono de sistema (eyebrows, chips, metadata).

**Orden de secciones:** Nav sticky → Hero → Servicios → Galería → Reserva → Barberos → Ubicación → Footer. WhatsApp flotante fijo.

### 1.1 Nav (sticky)
- Logo wordmark + rombo cobre · links (Servicios, Galería, Barberos, Ubicación) · CTA sólido cobre `RESERVAR TURNO`.
- Fondo translúcido con `backdrop-filter: blur(14px)`, borde inferior 1px.
- **Responsive:** <768px se ocultan los links (quedan logo + CTA). Scroll suave con offset −70px.
- Mockups: incluido en `01-hero--*.png`.

### 1.2 Hero
- Grid 2 col (colapsa a 1): izquierda eyebrow mono cobre + H1 Bebas 3 líneas (última en cobre) + sub + 2 CTAs + fila de stats con borde superior; derecha **foto real** (barbero con navaja, Unsplash) con esquinas marcadas en cobre (ticks tipo visor) y viñeta.
- Fondo: glow radial cobre sutil arriba-derecha.
- Interacción: CTAs hacen scroll a `#reserva` / `#servicios`.
- Mockups: `01-hero--mobile.png` (incluye WhatsApp flotante), `01-hero--desktop.png`.

### 1.3 Servicios
- Header de sección (patrón: eyebrow con guion cobre + H2 Bebas + sub).
- Grid auto-fit de 6 cards: nombre (Inter 600) + precio (Bebas 30 cobre) / descripción / footer con chip de duración (mono, borde) + link `RESERVAR →` que **preselecciona el servicio** y salta al paso 2 del wizard.
- Hover: borde cobre + `translateY(-2px)`.
- Mockups: `02-servicios--mobile.png`, `02-servicios--desktop.png`.

### 1.4 Galería
- Header con nota mono a la derecha (`@BRAVOBARBER.GYE …`).
- Grid auto-fit `minmax(165px,1fr)` → 2 col móvil / ~6 col desktop; tiles 4:5 con **foto real**, gradiente inferior y caption mono.
- Mockups: `03-galeria--mobile.png`, `03-galeria--desktop.png`.

### 1.5 Reserva (wizard 4 pasos — corazón del demo)
Card central (max 880px) con barra de step-chips (`01 SERVICIO … 04 CONFIRMAR`; chip activo con borde+fondo cobre, pasados en gris claro, futuros atenuados; chips clickeables solo si sus prerequisitos existen). Contenido con `min-height` para evitar saltos; cada paso entra con fade+slide 280ms.

- **Paso 1 — ¿QUÉ TE HACEMOS?** Lista de filas seleccionables (nombre+desc | duración+precio). Al elegir: highlight cobre y auto-avance en 260ms.
- **Paso 2 — ¿CON QUIÉN?** Grid de 4 opciones (3 barberos con iniciales en círculo + "El primero disponible" con `¿?`). Link `← CAMBIAR SERVICIO`. Recap mono del servicio en el header del paso.
- **Paso 3 — ¿CUÁNDO?** Fila horizontal scrolleable de 7 chips-día (HOY primero; **Domingo deshabilitado `CERRADO`**; un día marcado **`LLENO`** para demostrar el empty). Debajo, área de slots con 4 estados:
  - *idle:* borde dashed `ELIGE UN DÍA PARA VER LOS HUECOS LIBRES`
  - *loading:* spinner cobre + `BUSCANDO HUECOS LIBRES…` (~700ms simulado)
  - *empty (día lleno):* panel ámbar `AGENDA LLENA ESE DÍA` + botón `PROBAR EL <siguiente día>`
  - *slots:* grid auto-fill de horas 45min (09:00–19:15, pausa 13–14h); ocupados tachados y deshabilitados; horas pasadas de hoy bloqueadas; leyenda mono `TACHADO = OCUPADO · GMT-5`. Elegir hora auto-avanza.
- **Paso 4 — CONFIRMA TU TURNO.** Card resumen (filas label mono / valor, separadas por dashed; link `← CAMBIAR ALGO`) + inputs Nombre* y Teléfono (opcional) + CTA full-width `CONFIRMAR POR WHATSAPP` + nota mono "no pagas nada todavía".
  - *error:* confirmar sin nombre → borde rojo en input + mensaje mono rojo `⚠ ESCRIBE TU NOMBRE…`
- **Éxito.** Check verde en círculo, `¡LISTO, {NOMBRE}!`, **preview literal del mensaje WhatsApp** en bloque mono pre-wrap, botones `ENVIAR POR WHATSAPP ↗` (verde WA, abre `wa.me`) y `HACER OTRA RESERVA` (reset).
- Mockups: `04-reserva--paso1--{mobile,desktop}.png`, `--paso2--mobile`, `--paso3-loading--mobile`, `--paso3-horarios--{mobile,desktop}`, `--paso3-lleno--mobile`, `--paso4-resumen--mobile`, `--paso4-error--mobile`, `--exito--{mobile,desktop}`.

### 1.6 Barberos
- 3 cards: **retrato real en B/N** (grayscale CSS) 3:4 con iniciales fantasma de fallback + nombre Bebas + especialidad + chips mono (años, IG cobre).
- Mockups: `05-barberos--mobile.png`, `05-barberos--desktop.png`.

### 1.7 Ubicación y horario
- 2 col: card info (dirección, referencia, horario con **badge `HOY` en la fila del día actual**, contacto, botones `CÓMO LLEGAR ↗` ghost + `ESCRIBIR POR WHATSAPP` verde) | mapa placeholder CSS (grid de calles + pin cobre con chip), clickeable → Google Maps.
- Mockups: `06-ubicacion--mobile.png`, `06-ubicacion--desktop.png`.

### 1.8 Footer
- 4 columnas (marca+tagline / horario / contacto / redes) + barra legal mono con disclaimer de demo ficticio.
- Mockups: `07-footer--mobile.png`, `07-footer--desktop.png`.

### 1.9 WhatsApp flotante
- Círculo 56px verde `#22C15E`, texto "WA" Bebas, sombra, hover scale 1.07, `aria-label`. Fijo abajo-derecha, z-index sobre todo.

### Config / props del demo
- `accent` (hex; alternativas curadas: cobre #C87F3F, latón #D9962F, óxido #B5502F, acero #7C8A96)
- `whatsappNumber` (string, sin `+`, ej. `593992847310`)
- `mostrarWhatsapp` (boolean — botón flotante on/off)

---

# 02 — La Sazón (restaurante)

**Personalidad:** cálido, apetitoso, artesanal. Tema claro crema, acento vino, ornamentos dorados (línea + rombo), headers centrados estilo carta. Jerarquía por cards blancas con sombra suave sobre crema.

**Fuentes:** Playfair Display (títulos/precios; itálica en logo y acentos) · Karla (cuerpo) · mono de sistema (eyebrows/chips).

**Orden de secciones:** Nav sticky → Hero (foto full-bleed) → Menú → Reserva → Nosotros → Galería → Ubicación → Footer madera. Barra de pedido + sheet + WhatsApp flotante como overlays.

### 2.1 Nav (sticky)
- Wordmark "La Sazón" Playfair itálica + rombo dorado + sub mono `COCINA CRIOLLA` · links · CTA vino `Reservar mesa`.
- <768px: solo logo + CTA. Mockups: en `01-hero--*.png`.

### 2.2 Hero (full-bleed)
- Foto de mesa servida con overlay café (gradiente .42→.78), contenido centrado: eyebrow dorado con guiones, H1 Playfair 2 líneas (2ª itálica), sub, CTAs `Ver menú` (crema sólido) + `Reservar mesa` (ghost claro), 3 chips pill mono (horario, QR, rating).
- Mockups: `01-hero--{mobile,desktop}.png`.

### 2.3 Menú digital (corazón del demo)
- Header centrado con ornamento; nota QR.
- **Tabs pill por categoría** (Entradas/Fuertes/Postres/Bebidas; activa = vino sólido).
- Cards de plato: thumb 88px (background-image), nombre + precio Playfair vino, desc, y **control de pedido**: `Añadir` (outline pill) → stepper `− n +` al tener unidades. Grid 1 col móvil / 2 col desktop.
- Mockups: `02-menu--{mobile,desktop}.png`, `02-menu--carrito--mobile.png`.

### 2.4 Pedido (carrito Level 1 → WhatsApp)
- **Barra flotante** inferior centrada (madera oscura, pill): `{n} ÍTEMS · $total` + botón `Revisar pedido`. Visible con ≥1 ítem; oculta el WhatsApp flotante mientras exista.
- **Sheet** bottom (max 600px, radius 18 arriba, backdrop café): lista con steppers y subtotales, inputs nombre*/nota, total Playfair, CTA `Pedir por WhatsApp`.
- Estados: vacío (barra oculta) · revisión · **error** (nombre vacío → borde rojo + hint mono) · **éxito** (check verde, preview literal del mensaje, `Enviar por WhatsApp ↗` + `Nuevo pedido`).
- Mockups: `03-pedido--revision--mobile.png`, `03-pedido--error--mobile.png`, `03-pedido--exito--mobile.png`.

### 2.5 Reserva de mesa (form 1 card → WhatsApp)
- Card centrada (max 680): chips-día (7; **lunes CERRADO**, **sábado COMPLETO** para el empty), área de horas con 4 estados (idle dashed / loading spinner vino "Buscando mesa…" / **completo** panel dorado con `Probar el <día>` / grid de horas con ocupadas tachadas), stepper de personas (1–10), inputs nombre*/teléfono, resumen itálico + CTA `Reservar mesa`.
- Estados: error nombre · éxito (check, preview, WA + `Hacer otra reserva`).
- Mockups: `04-reserva--mobile.png`, `--loading--mobile`, `--horarios--{mobile,desktop}`, `--lleno--mobile`, `--error--mobile`, `--exito--{mobile,desktop}`.

### 2.6 Nosotros
- 2 col: foto cocina 4:5 con avatar circular de la fundadora superpuesto | eyebrow, H2, 2 párrafos, firma Playfair itálica + rol mono, 3 stats vino.
- Mockups: `05-nosotros--{mobile,desktop}.png`.

### 2.7 Galería ambiente
- 4 tiles 4:3 (foto + gradiente café + caption mono claro). Mockups: `06-galeria--{mobile,desktop}.png`.

### 2.8 Ubicación y horario
- 2 col: card info (dirección Las Peñas, horario 4 filas con badge `HOY`, contacto, botones `Cómo llegar ↗` + `Escribir por WhatsApp`) | mapa CSS crema (grid + calles + pin vino + chip "LA SAZÓN"), clickeable.
- Mockups: `07-ubicacion--{mobile,desktop}.png`.

### 2.9 Footer (madera #221712)
- 4 columnas + legal mono con disclaimer. Mockups: `08-footer--{mobile,desktop}.png`.

### 2.10 Overlays
- WhatsApp flotante verde (oculto si hay carrito). Sheet y barra: ver 2.4.

### Config / props del demo
- `accent` (vino #7E2F35 · terracota #B4552D · oliva #6B7042 · petróleo #2F5D62)
- `whatsappNumber` (string sin `+`)
- `mostrarWhatsapp` (boolean)

---

# 03 — Clínica Dental Aurora (consultorio)

**Personalidad:** limpio, confiable, médico premium. Tema claro frío (blanco #FAFCFC / panel #F1F7F8), acento teal, chips menta, radios generosos (10–18px), sombras suaves. **Sin fuente mono** (registro clínico, no industrial): eyebrows en DM Sans 700 tracking .18em.

**Fuente:** DM Sans (400/500/700) para todo.

**Orden:** Nav sticky → Hero → Especialidades → Doctora → Citas (wizard) → Testimonios → FAQ → Ubicación → Footer navy. WhatsApp flotante.

### 3.1 Nav
- Logo: cruz teal (2 rectángulos redondeados) + "Aurora / CLÍNICA DENTAL" · 5 links · CTA teal `Agendar cita` con sombra de color.
- Mockups: en `01-hero--*.png`.

### 3.2 Hero
- 2 col: pill menta de ubicación, H1 con segunda línea teal, sub, CTAs (teal sólido + ghost blanco), 3 stats; derecha foto clínica radius 18 con **badge flotante** "Precios cerrados por escrito".
- Mockups: `01-hero--{mobile,desktop}.png`.

### 3.3 Especialidades
- 4 cards blancas: icono punto-en-caja menta, nombre, desc, chip duración + precio teal, link `Agendar este servicio →` (preselecciona en el wizard).
- Mockups: `02-especialidades--{mobile,desktop}.png`.

### 3.4 Doctora
- 2 col sobre panel: retrato con badge de nombre; cita entre comillas como H2, párrafo, **3 credenciales en filas card** (punto teal + texto), CTA.
- Mockups: `03-doctora--{mobile,desktop}.png`.

### 3.5 Citas (wizard 3 pasos → WhatsApp)
- Step chips pill numerados (círculo teal). Pasos: `1 Servicio` → `2 Día y hora` → `3 Confirmar`.
- Paso 1: filas seleccionables (servicio + chip duración + precio teal; "Gratis" para valoración de implante). Auto-avance.
- Paso 2: chips-día (Dom CERRADO, 3er día hábil LLENA; sábado solo mañana), área de horas con estados idle/loading/llena/grid (ocupadas tachadas, pausa 13–14h, horas pasadas de hoy bloqueadas).
- Paso 3: resumen en panel + nombre* + teléfono + **checkbox "Es mi primera visita"** + CTA `Confirmar por WhatsApp`.
- Estados: error nombre · éxito (check menta, preview del mensaje con primera visita sí/no, `Enviar por WhatsApp ↗` + `Agendar otra cita`).
- Mockups: `04-citas--paso1--mobile.png`, `--paso2-horarios--{mobile,desktop}`, `--paso2-loading--mobile`, `--paso2-llena--mobile`, `--paso3-resumen--mobile`, `--paso3-error--mobile`, `--exito--{mobile,desktop}`.

### 3.6 Testimonios
- 3 cards: 5★ ámbar, cita, avatar circular + nombre + tratamiento. Mockups: `05-testimonios--{mobile,desktop}.png`.

### 3.7 FAQ
- Acordeón de 5 (primera abierta por defecto; chevron +/− en círculo teal). Cierre con link a WhatsApp.
- Mockups: `06-faq--{mobile,desktop}.png`.

### 3.8 Ubicación / 3.9 Footer
- Igual patrón que demos 01–02: card info (dirección Medical Plaza, horario con badge `HOY`, contacto, 2 botones) + mapa CSS teal clickeable. Footer navy #123A47 con disclaimer médico extra.
- Mockups: `07-ubicacion--*`, `08-footer--*`.

### Config / props
- `accent` (teal #0E7490 · menta #159580 · azul #1179B4 · lavanda #6D6FB4) · `whatsappNumber` · `mostrarWhatsapp`

---

# 04 — Andrea & Mateo (boda)

**Personalidad:** elegante, romántico, mucho aire. Blush/crema, dorado #B08D45, salvia #7D8C74. Headers centrados con ornamento (línea + rombo). Pills en vez de rectángulos; fotos en **arco** (radius superior completo).

**Fuentes:** Great Vibes (SOLO nombres y "Gracias") · Cormorant Garamond (títulos, horas, itálicas) · Jost 300/400/500 (cuerpo, labels tracked).

**Orden:** Nav → Hero (countdown) → Historia → Detalles → RSVP → Itinerario → Galería → Dress code + Regalos → Footer. Flotante = chip "¿Dudas? · Gabriela".

### 4.1 Nav
- Monograma script "A & M" dorado · 5 links · CTA pill dorado `Confirmar asistencia`. Mockups: en `01-hero--*.png`.

### 4.2 Hero
- Centrado: eyebrow tracked `¡NOS CASAMOS!`, nombres en Great Vibes (& dorado), fecha Cormorant itálica, **countdown vivo** (4 cards: días/horas/min/seg — segundos en dorado; tick 1s vía `setInterval`, target en prop `fechaBoda`), CTAs pill, foto de los novios en arco con borde blanco + pill `#AndreaYMateo2026`.
- Mockups: `01-hero--{mobile,desktop}.png`.

### 4.3 Historia
- 3 hitos centrados (año+título Cormorant itálica dorado, párrafo Jost 300) separados por líneas verticales. Mockups: `02-historia--*`.

### 4.4 Detalles
- 2 cards centradas (Ceremonia 16:30 / Recepción 19:00) con icono simple, venue, `Cómo llegar ↗` pill. Nota de puntualidad en el header. Mockups: `03-detalles--*`.

### 4.5 RSVP (form → WhatsApp de la coordinadora)
- Card centrada (max 640): nombre*, radios pill **Sí/No** (No oculta acompañantes/restricciones), stepper acompañantes 0–5, restricciones, mensaje a los novios. Fecha límite 31-oct en el header.
- Estados: **error** (nombre) · **enviando** (spinner dorado ~700ms) · **éxito** con dos variantes de copy (asiste / no asiste), "Gracias" en script, preview del mensaje y `Enviar por WhatsApp ↗` + `Editar respuesta`.
- Mockups: `04-rsvp--{mobile,desktop}.png`, `--no-asiste--mobile`, `--error--mobile`, `--enviando--mobile`, `--exito--{mobile,desktop}`.

### 4.6 Itinerario
- Timeline vertical: punto dorado + línea, hora Cormorant itálica dorada, evento; último punto salvia (despedida). Mockups: `05-itinerario--*`.

### 4.7 Galería
- 5 fotos alternando arco/rectángulo, alineadas al pie. Mockups: `06-galeria--*`.

### 4.8 Dress code + Mesa de regalos
- 2 cards: swatches circulares (salvia/arena/terracota/azul noche) + "evita blanco, marfil y champán"; regalos con 2 sub-cards dashed (transferencia con datos ficticios / lluvia de sobres). Mockups: `07-dresscode-regalos--*`.

### 4.9 Footer
- Centrado: nombres script, fecha, hashtag, ornamento, legal. Mockups: `08-footer--*`.

### Config / props
- `fechaBoda` (ISO string — mueve el countdown) · `whatsappNumber` · `mostrarWhatsapp`

---

# 05 — Vértice Consultores (PyME B2B)

**Personalidad:** corporativo, sobrio, confiable. Blanco/panel gris-azul, azul #1C4FA0, navy #12294A en footer. Radios contenidos (8–14px), jerarquía por fondos alternos y bordes — sin ornamentos.

**Fuentes:** Space Grotesk (títulos, cifras, eyebrows tracked) · Inter (cuerpo).

**Orden:** Nav → Hero → Servicios → Nosotros + Por qué → Proceso → Casos → Contacto → Footer navy. WhatsApp flotante.

### 5.1 Nav / 5.2 Hero
- Logo: triángulo ▲ azul + "VÉRTICE / CONSULTORES". CTA `Agenda un diagnóstico`.
- Hero 2 col: eyebrow, H1 con 2ª línea azul ("Tus procesos, todavía no."), sub, 2 CTAs, 3 stats azules; foto oficina con badge "Respuesta en <24h".
- Mockups: `01-hero--{mobile,desktop}.png`.

### 5.3 Servicios
- 3 cards numeradas 01–03 (consultoría / auditoría / tributario) con 3 bullets cuadrados azules cada una. Mockups: `02-servicios--*`.

### 5.4 Nosotros + Por qué elegirnos
- 2 col (texto + foto equipo) con chips de socios (iniciales DM/CE); debajo grid de 4 cards de diferenciales. Mockups: `03-nosotros--*`.

### 5.5 Proceso
- 4 cards con borde superior azul 3px, numeración grande 01–04 (Diagnóstico sin costo → Plan → Implementación → Acompañamiento). Mockups: `04-proceso--*`.

### 5.6 Sectores y casos
- Chips de 6 sectores + fila de **wordmarks ficticios** en gris (no logos) + 2 testimonios con avatar, cargo y empresa. Mockups: `05-casos--*`.

### 5.7 Contacto (form con validación → WhatsApp/email)
- 2 col: datos de contacto (oficina WTC, horario, teléfono, email, LinkedIn) | card de formulario: nombre*, empresa, email* (regex de formato), teléfono, **¿qué necesitas?** (pills), mensaje*.
- Estados: **errores por campo** (borde rojo + hint específico; email distingue vacío vs formato) · **enviando** (spinner ~800ms) · **éxito**: "Recibido, {nombre}" + preview + `Continuar por WhatsApp ↗` + `Enviar por correo` (mailto precompuesto) + `Editar`.
- Mockups: `06-contacto--{mobile,desktop}.png`, `--errores--mobile`, `--enviando--mobile`, `--exito--{mobile,desktop}`.

### 5.8 Footer
- Navy #12294A, 4 columnas + legal. Mockups: `07-footer--*`.

### Config / props
- `accent` (azul #1C4FA0 · petróleo #17636B · grafito #3B4656 · vino #7A2F3E) · `whatsappNumber` · `mostrarWhatsapp`

---

*Checklist de archivos por demo: `tokens.json` + `content.md` + `<Demo>.dc.html` + `mockups/*.png` (incluye `00-pagina-completa--{mobile,desktop}.png`). Ver README para estado global.*
