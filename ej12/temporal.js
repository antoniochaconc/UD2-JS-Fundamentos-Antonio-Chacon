"use strict";

const hoyTemporal = temporal.Now.plainDateISO();
let diaEventoTemporal;


do {
    diaEventoTemporal = Math.floor(Math.random() * 30) + 1;
} while (diaEventoTemporal < hoyTemporal.day);

const fechaEventoTemporal = hoyTemporal.with({ day: diaEventoTemporal });
const diferencia = hoyTemporal.until(fechaEventoTemporal, { largestUnit: 'days' });

document.write(`<h3>Usando la nueva API Temporal</h3>`);
document.write(`<p>La fecha actual es ${hoyTemporal.toString()}</p>`);
document.write(`<p>La fecha del evento: ${fechaEventoTemporal.toString()}</p>`);
document.write(`<p>Días que faltan para el evento: ${diferencia.days} días</p>`);
