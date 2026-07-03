# Clínica Dental Aurora — Contenido ficticio (fuente de verdad)

> Demo 03. **Clínica, personas y datos 100% ficticios.** Fotos: stock Unsplash `?auto=format&fit=crop&w=<w>&q=80` — IDs marcados *(por validar)* se testean antes de cablear.

## Marca
- **Nombre:** Clínica Dental Aurora
- **Tagline:** Sonrisas tranquilas, tratos claros.
- **Logo:** cruz teal simple (2 rectángulos) + "Aurora" DM Sans 700 + sub "CLÍNICA DENTAL".

## Nav
Links: Especialidades · Doctora · Testimonios · Preguntas · Contacto — CTA: **Agendar cita** (teal)

## Hero
- Eyebrow: `KENNEDY NORTE · GUAYAQUIL`
- H1: **Tu sonrisa, sin miedo y sin letra pequeña.**
- Sub: Odontología moderna con precios cerrados por escrito, agenda en línea y cero salas de espera eternas.
- CTAs: `Agendar cita` · `Ver especialidades`
- Trust chips: 11 años de práctica · +2.400 pacientes · 4.9★ (280+ reseñas)
- Foto: consultorio/paciente sonriendo — `1588776814546-1ffcf47267a5` *(por validar)*, alt: `1629909613654-28e377c37b09` *(por validar)*

## La doctora
- **Dra. Valeria Herrera** — Odontóloga (UCSG) · Especialista en Rehabilitación Oral (USFQ) · 11 años de práctica · Miembro de la Sociedad Ecuatoriana de Odontología
- Texto: "Mi consulta funciona con una regla: te explico todo antes de tocar nada. Diagnóstico con cámara intraoral, plan por escrito y precios cerrados. Sin sorpresas en la factura ni en la silla."
- Retrato: `1559839734-2b71ea197ec2` *(validada en otros proyectos, re-testear)*
- Números: 11 años · +2.400 pacientes · 98% citas puntuales

## Especialidades (4 cards con precio desde)
| id | Servicio | Descripción | Duración | Precio |
|---|---|---|---|---|
| limpieza | Limpieza & prevención | Profilaxis, flúor y revisión completa con cámara intraoral. | 40 min | $35 |
| blanqueamiento | Blanqueamiento LED | Hasta 3 tonos en una sesión, sensibilidad controlada. | 60 min | $120 |
| ortodoncia | Ortodoncia | Brackets o alineadores. Valoración con plan por escrito. | 30 min (valoración) | $25 valoración · desde $75/mes |
| implantes | Implantes | Valoración 3D sin costo y plan de rehabilitación. | 30 min (valoración) | Valoración gratis |

## Agenda de citas (wizard 3 pasos → WhatsApp)
- Pasos: `01 Servicio` → `02 Día y hora` → `03 Confirmar`
- Horarios: Lun–Vie 09:00–17:30 cada 45 min (pausa 13:00–14:00) · Sáb 09:00–12:30 · Dom cerrado
- Un día marcado **AGENDA LLENA** (empty state) · loading "Buscando horarios…" · horas pasadas de hoy bloqueadas
- Datos: nombre*, teléfono (opcional), checkbox "Es mi primera visita"
- Error: `Escribe tu nombre para confirmar la cita.`
- Éxito: **¡Listo, {nombre}!** "Tu cita quedó pre-agendada. Envíanos el mensaje y te confirmamos en minutos." + preview + `Enviar por WhatsApp ↗` + `Agendar otra cita`
- Nota: `Se abre WhatsApp con el mensaje listo. La confirmación no genera ningún cobro.`

### Plantilla mensaje cita
```
Hola Clínica Aurora 🦷 Quiero agendar una cita:
• Servicio: {servicio}
• Día: {día} · {hora}
• Nombre: {nombre}
• Primera visita: {sí/no}
¿Me confirman? ¡Gracias!
```

## Testimonios (3, con 5★)
1. **María Fernanda O.** — limpieza · "Le tenía pánico al dentista. La doctora me explicó cada paso y no sentí nada. Volví con mis dos hijos."
2. **José Luis P.** — implante · "Cotizé en tres lugares. Aurora fue la única con precio cerrado por escrito. Cero sorpresas."
3. **Andrea T.** — ortodoncia · "Los brackets me los pusieron en la fecha que dijeron y el pago mensual nunca cambió. Eso vale oro."
- Fotos: `1494790108377-be9c29b29330`, `1500648767791-00dcc994a43e`, `1438761681033-6461ffad8d80` *(por validar)*

## FAQ (acordeón)
1. **¿Atienden urgencias?** Sí, guardamos 2 espacios diarios para urgencias. Escríbenos por WhatsApp y te decimos la hora exacta.
2. **¿Formas de pago?** Efectivo, transferencia y tarjetas (diferido hasta 12 meses sin interés con bancos aliados).
3. **¿Qué incluye la primera valoración?** Revisión completa, fotos intraorales y plan de tratamiento por escrito con precios cerrados.
4. **¿Trabajan con seguros?** Emitimos factura y el detalle clínico para reembolso con tu aseguradora.
5. **¿Ortodoncia en adultos?** Sí — el 40% de nuestros pacientes de ortodoncia son mayores de 30.

## Ubicación y horario
- **Dirección:** Edificio Medical Plaza, piso 3, consultorio 304 — Av. Joaquín Orrantia y Leopoldo Benítez, Kennedy Norte, Guayaquil
- **Referencia:** Frente al Mall del Sol, parqueo del edificio con validación.
- **Horario:** Lun–Vie 09:00–18:00 · Sáb 09:00–13:00 · Dom cerrado (badge `HOY`)
- **Teléfono / WhatsApp:** +593 96 512 8834 · **Email:** citas@clinicaaurora.ec
- Mapa placeholder CSS con pin teal → Google Maps

## Redes
Instagram @clinicadental.aurora · TikTok @dra.valeriaherrera

## Footer (navy #123A47, texto claro)
Columnas: marca+tagline · Horario · Contacto · Síguenos
Legal: `© {año} Clínica Dental Aurora — clínica y datos ficticios` · `Sitio demo · diseñado por Nexora Studio`
Nota legal extra: `Este sitio demo no ofrece consejo médico.`

## WhatsApp flotante
Mensaje: "Hola Clínica Aurora, quiero información."

## Props (tweaks)
- `accent`: teal #0E7490 · menta profunda #159580 · azul cielo #1179B4 · lavanda clínica #6D6FB4
- `whatsappNumber`: "593965128834"
- `mostrarWhatsapp`: boolean
