"use strict";

let userName = "Ana";
let age = 25;
let city = "Madrid";

const COLOR_FAVORITO = "#FF5733";
const loadTime = Date.now();

alert(`Nombre: ${userName}, Edad: ${age}, Ciudad: ${city}`);
alert(`Color favorito: ${COLOR_FAVORITO}, Tiempo de carga: ${loadTime}`);

// Intento de reasignación
// COLOR_FAVORITO = "#000000"; 
// Error en consola: Uncaught TypeError: Assignment to constant variable.