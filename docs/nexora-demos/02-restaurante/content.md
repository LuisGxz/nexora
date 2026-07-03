# La Sazón — Contenido ficticio (fuente de verdad)

> Copy y data del demo 02. **Negocio, personas y datos 100% ficticios.** Fotos: stock Unsplash (`https://images.unsplash.com/photo-<ID>?auto=format&fit=crop&w=600&q=80`) — todas validadas.

## Marca
- **Nombre:** La Sazón · cocina criolla
- **Tagline:** El sabor de casa, servido con oficio.
- **Logotipo:** wordmark "La Sazón" en Playfair Display italic + rombo dorado pequeño. Sub "COCINA CRIOLLA" en mono espaciado.
- **Fuentes:** Playfair Display (títulos, itálicas) + Karla (cuerpo) + mono de sistema (labels).
- **Paleta:** crema #F6EFE3 (bg) · tinta café #2E211B · vino #7E2F35 (accent) · dorado #B98A2F (líneas/ornamentos) · panel #FCF6EA · madera oscura #221712 (footer/overlays).

## Nav
Links: Menú · Nosotros · Galería · Ubicación — CTA: **Reservar mesa** (vino)

## Hero (foto full-bleed + overlay café oscuro)
- Foto bg: `1504674900247-0877df9cc836` (mesa servida)
- Eyebrow: `COCINA CRIOLLA · LAS PEÑAS, GUAYAQUIL`
- H1: **El sabor de casa, servido con oficio.**
- Sub: Recetas de mercado, fuego lento y menú digital en tu mesa. Reserva o pide por WhatsApp.
- CTAs: `Ver menú` · `Reservar mesa`
- Chips: Mar–Dom desde 12:00 · Menú QR en mesa · 4.8★ (410+ reseñas)

## Menú digital (tabs por categoría, QR-accesible; cada plato: foto, desc, precio, botón "Añadir")
### Entradas
| Plato | Descripción | Precio | Foto ID |
|---|---|---|---|
| Empanadas de viento (3) | Queso y cebolla blanca, azúcar espolvoreada. | $4.50 | 1601050690597-df0568f70950 |
| Ceviche de camarón | Camarón, limón sutil, tomate y cilantro. Con chifles. | $9.50 | 1512621776951-a57141f2eefd |
| Ensalada del huerto | Hojas frescas, aguacate, choclo y vinagreta de maracuyá. | $6.00 | 1546069901-ba9599a7e63c |
### Fuertes
| Encebollado real | Albacora, yuca y cebolla curtida. El de los domingos. | $7.50 | 1547592166-23ac45744acd |
| Seco de chivo | Cocción lenta en cerveza y naranjilla, arroz amarillo. | $11.00 | 1574484284002-952d92456975 |
| Arroz con mariscos | Camarón, calamar y concha, sofrito de la casa. | $13.50 | 1534080564583-6be75777b70a |
| Churrasco La Sazón | Lomo fino, huevo frito, maduro y papas criollas. | $12.50 | 1600891964092-4316c288032e |
| Salmón al carbón | Con puré rústico y vegetales de temporada. | $14.00 | 1467003909585-2f8a72700288 |
### Postres
| Tres leches de la casa | Bizcocho húmedo, canela y cereza. | $4.50 | 1565958011703-44f9829ba187 |
| Flan de coco | Caramelo oscuro y coco tostado. | $4.00 | 1488477181946-6428a0291777 |
### Bebidas
| Jugo de naranjilla | Recién exprimido. | $2.50 | 1600271886742-f049cd451bba |
| Limonada de hierbabuena | Jarra $5.50 / vaso. | $2.50 | 1523677011781-c91d1bbe2f9e |
| Café pasado | De Loja, en chuspa. | $2.00 | 1509042239860-f550ce710b93 |

- Header sección: eyebrow `EL MENÚ` · H2 **Cocina de mercado, todos los días** · nota: "Escanea el QR en tu mesa o arma tu pedido aquí mismo."

## Pedido (carrito Level 1 → WhatsApp)
- Botón por plato: `Añadir` (stepper +/− al tener unidades)
- Barra flotante inferior (≥1 ítem): `{n} ítems · ${total} — Revisar pedido`
- Sheet de revisión: lista con +/−, campo "Nota para la cocina (opcional)", campo nombre*, total, CTA `Pedir por WhatsApp`
- Estados: vacío (barra oculta) · con ítems · error (sin nombre) · éxito (preview del mensaje + `Enviar por WhatsApp ↗` + `Nuevo pedido`)
- Nota: "Retiro en local o delivery por Las Peñas/Malecón. Pagas al recibir."

### Plantilla mensaje pedido
```
Hola La Sazón 🍲 Quiero pedir:
• {qty}× {plato} — ${subtotal}
…
Total: ${total}
• Nombre: {nombre}
• Nota: {nota si existe}
¿Me confirman tiempo de entrega? ¡Gracias!
```

## Reserva de mesa (form 1 card → WhatsApp)
- Campos: fecha (7 días chips, **lunes cerrado**, viernes marcado `ALTA DEMANDA`), hora (chips 12:00–21:30; al elegir fecha → loading "Buscando mesa…" ~700ms; **sábado noche lleno** → empty state "Completo — escríbenos y te avisamos si se libera") , personas (stepper 1–10), nombre*, teléfono (opcional)
- Error: sin nombre → borde vino + `Escribe tu nombre para reservar.`
- Éxito: **¡Mesa pre-reservada, {nombre}!** + preview + `Enviar por WhatsApp ↗` + `Hacer otra reserva`

### Plantilla mensaje reserva
```
Hola La Sazón 🍷 Quiero reservar una mesa:
• Día: {día} · {hora}
• Personas: {n}
• Nombre: {nombre}
¿Me confirman? ¡Gracias!
```

## Nosotros
- Foto: `1556910103-1c02745aae4d` (manos cocinando) + retrato `1544005313-94ddf0286df2` (Doña Rosario)
- Texto: "La Sazón nació en 2016 en una cocina de casa en Las Peñas. Doña Rosario Mendoza convirtió las recetas de su madre en un comedor de doce mesas donde todo se hace al día: el refrito, el encocado, el ají. Nada de apuros, nada de sobres."
- Firma: **Rosario Mendoza** — fundadora y jefa de cocina
- Stats: 9 años · 12 mesas · 100% recetas propias

## Galería (ambiente, 4 tiles)
| Caption | Foto ID |
|---|---|
| EL COMEDOR | 1414235077428-338989a2e8c0 |
| MESAS DE VENTANA | 1517248135467-4c7edcad34c4 |
| LA BARRA | 1555396273-367ea4eb4db5 |
| FUEGO LENTO | 1476224203421-9ac39bcb3327 |

## Ubicación y horario
- **Dirección:** Numa Pompilio Llona 212, Barrio Las Peñas, Guayaquil — a una cuadra del Malecón 2000.
- **Horario:** Mar–Jue 12:00–21:00 · Vie–Sáb 12:00–22:30 · Dom 11:00–17:00 · **Lun cerrado** (badge `HOY` en fila actual)
- **Teléfono / WhatsApp:** +593 98 761 2045 · **Email:** hola@lasazon.ec
- Mapa: placeholder CSS (calles + pin vino + chip "LA SAZÓN"), clickeable → Google Maps
- Botones: `Cómo llegar ↗` · `Escribir por WhatsApp`

## Redes
Instagram @lasazon.gye · TikTok @lasazon

## Footer (madera oscura #221712, texto crema)
Columnas: marca+tagline · Horario · Contacto · Síguenos
Legal: `© {año} La Sazón — negocio y datos ficticios` · `Sitio demo · diseñado por Nexora Studio`

## WhatsApp flotante
Verde #22C15E, siempre visible salvo cuando la barra de pedido está abierta. Mensaje: "Hola La Sazón, quiero información."

## Props (tweaks)
- `accent`: vino #7E2F35 · terracota #B4552D · oliva #6B7042 · petróleo #2F5D62
- `whatsappNumber`: "593987612045"
- `mostrarWhatsapp`: boolean
