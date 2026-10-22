"use strict";

let userName = prompt("Introduce tu nombre:");
let userCity = prompt("Introduce tu ciudad:");
let birthYear = prompt("Introduce tu año de nacimiento:");

if (userName === null || userCity === null || birthYear === null) {
    alert("Has cancelado la operación.");
} else {
    let currentYear = new Date().getFullYear();
    let message = `¡Hola ${userName} de ${userCity}! Tienes (o cumplirás) ${currentYear - Number(birthYear)} años.`;
    alert(message);
}