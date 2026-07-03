# Bravo Barber Co. — Contenido ficticio (fuente de verdad)

> Todo el copy y data de este demo. Claude Code lo consume tal cual para poblar la config del sitio. **Negocio, personas y datos 100% ficticios.**

## Marca
- **Nombre:** Bravo Barber Co.
- **Tagline footer:** Barbería de oficio en Urdesa desde 2012. Corte, navaja y conversación de la buena.
- **Logotipo:** wordmark tipográfico "BRAVO BARBER CO." en Bebas Neue + rombo cobre de 9px a la izquierda. "CO." en cobre.

## Nav
Links: Servicios · Galería · Barberos · Ubicación — CTA: **RESERVAR TURNO**

## Hero
- Eyebrow: `URDESA · GUAYAQUIL · DESDE 2012`
- H1: **CORTE LIMPIO. / NAVAJA CALIENTE. / CERO VUELTAS.** (última línea en cobre)
- Sub: Barbería de oficio en Urdesa. Fades precisos, afeitado clásico con toalla caliente y tu turno listo en menos de un minuto — sin llamadas.
- CTAs: `RESERVAR TURNO` (primario) · `VER SERVICIOS` (ghost)
- Stats: **14** años de oficio · **4.9★** 380+ reseñas · **3** barberos de planta
- Imagen: barbero afeitando con navaja, plano cerrado (placeholder `IMG`)

## Servicios (precios en USD, se paga en el local)
| id | Servicio | Descripción | Duración | Precio |
|---|---|---|---|---|
| clasico | Corte clásico | Tijera y máquina, acabado a navaja. | 45 min | $12 |
| fade | Fade / Degradado | Low, mid o high, con línea marcada. | 45 min | $14 |
| combo | Corte + Barba | El combo completo, cierre con navaja. | 75 min | $18 |
| afeitado | Afeitado clásico | Toalla caliente, espuma y navaja libre. | 30 min | $10 |
| barba | Perfilado de barba | Forma, contorno y aceite de cierre. | 25 min | $8 |
| nino | Corte niño | Hasta 12 años. Paciencia incluida. | 30 min | $9 |

- Header sección: eyebrow `SERVICIOS Y PRECIOS` · H2 **LO QUE HACEMOS BIEN** · sub: "Precios cerrados, sin sorpresas. Pagas en el local: efectivo, transferencia o tarjeta."

## Galería (6 fotos reales — stock Unsplash)
Header: eyebrow `GALERÍA` · H2 **TRABAJO RECIENTE** · nota: `@BRAVOBARBER.GYE · ACTUALIZADO CADA SEMANA`

Tiles 4:5, caption mono abajo-izquierda sobre gradiente oscuro. Fotos (Unsplash, `?auto=format&fit=crop&w=700&q=80`):
| Caption | Photo ID |
|---|---|
| FADE ALTO + LÍNEA | `photo-1622286342621-4bd786c2447c` |
| AFEITADO · TOALLA CALIENTE | `photo-1605497788044-5a32c7078486` |
| CLÁSICO A TIJERA | `photo-1599351431202-1e0f0137899a` |
| DISEÑO FREESTYLE | `photo-1517832606299-7ae9b720a186` |
| PERFILADO DE BARBA | `photo-1621605815971-fbc98d665033` |
| EL LOCAL · SILLAS 1–3 | `photo-1585747860715-2ba37e788b70` |

Hero: `photo-1503951914875-452162b0f3f1` (w=1100), filtro `saturate(.82) contrast(1.06)` + viñeta.

## Reserva (flujo Level 1 → WhatsApp)
- Header: eyebrow `RESERVA EN LÍNEA` · H2 **TU TURNO EN 30 SEGUNDOS** · sub: "Elige y confirma: el mensaje te queda listo en WhatsApp. Sin cuenta, sin pago online."
- Pasos: `01 SERVICIO` → `02 BARBERO` → `03 FECHA Y HORA` → `04 CONFIRMAR`
- Títulos de paso: ¿QUÉ TE HACEMOS? / ¿CON QUIÉN? / ¿CUÁNDO? / CONFIRMA TU TURNO
- Opción extra de barbero: **El primero disponible** — "Sin preferencia, te toca el que esté libre"
- Horarios: 09:00–19:15 cada 45 min, pausa 13:00–14:00. Domingo cerrado.
- Loading: `BUSCANDO HUECOS LIBRES…`
- Empty (día lleno): **AGENDA LLENA ESE DÍA** — "Se nos fue todo. El sábado suele tener huecos a primera hora." → botón `PROBAR EL <día>`
- Error validación: `⚠ ESCRIBE TU NOMBRE PARA CONFIRMAR LA RESERVA.`
- Nota bajo CTA: `SE ABRE WHATSAPP CON EL MENSAJE LISTO. NO PAGAS NADA TODAVÍA.`
- Éxito: **¡LISTO, {NOMBRE}!** — "Tu turno quedó pre-reservado. Envíanos el mensaje por WhatsApp y te confirmamos la silla en minutos." → `ENVIAR POR WHATSAPP ↗` + `HACER OTRA RESERVA`

### Plantilla del mensaje WhatsApp (reserva)
```
Hola Bravo Barber 💈 Quiero reservar un turno:
• Servicio: {servicio} (${precio} · {min} min)
• Barbero: {barbero}
• Día: {día} · {hora}
• Nombre: {nombre}
• Teléfono: {teléfono si existe}
¿Me confirman? ¡Gracias!
```
### Mensaje WhatsApp (botón flotante / contacto)
```
Hola Bravo Barber, quiero información.
```

## Barberos
Header: eyebrow `EL EQUIPO` · H2 **TRES BARBEROS, UN OFICIO** · sub: "Cada uno con su especialidad. Elige el tuyo al reservar, o déjate sorprender."

| Nombre | Especialidad | Años | Instagram | Foto (Unsplash) |
|---|---|---|---|---|
| Marco Aguirre | Clásicos y navaja · Fundador | 14 | @marco.bravobarber | `photo-1506794778202-cad84cf45f1d` |
| Diego Salazar | Fades y diseño freestyle | 8 | @diego.fades | `photo-1507003211169-0a1dd7228f2d` |
| Jandry Vera | Barba y afeitado clásico | 6 | @jandry.navaja | `photo-1519345182560-3f2917c472ef` |

Retratos en B/N vía CSS: `grayscale(1) contrast(1.1) brightness(.92)` + gradiente inferior. Iniciales fantasma como fallback.

## Ubicación y horario
Header: eyebrow `UBICACIÓN Y HORARIO` · H2 **EN EL CORAZÓN DE URDESA**
- **Dirección:** Av. Víctor Emilio Estrada 707 y Ficus, Urdesa Central, Guayaquil
- **Referencia:** A media cuadra del Parque de Urdesa. Parqueo en La Ficus.
- **Horario:** Lun–Vie 09:00–20:00 · Sáb 09:00–18:00 · Dom cerrado (la fila del día actual se resalta con badge `HOY`)
- **Teléfono / WhatsApp:** +593 99 284 7310
- **Email:** hola@bravobarber.ec
- Botones: `CÓMO LLEGAR ↗` (Google Maps) · `ESCRIBIR POR WHATSAPP`
- Mapa: placeholder CSS tipo plano (grid + calles + pin cobre + chip con el nombre), clickeable → Google Maps. En producción: embed real.

## Redes
Instagram @bravobarber.gye · TikTok @bravobarber

## Footer
Columnas: marca+tagline · Horario · Contacto · Síguenos
Legal: `© {año} BRAVO BARBER CO. — NEGOCIO Y DATOS FICTICIOS` · `SITIO DEMO · DISEÑADO POR NEXORA STUDIO`
