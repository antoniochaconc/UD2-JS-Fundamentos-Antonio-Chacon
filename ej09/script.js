"use strict";

let nombre = prompt("Nombre:");
let apodo = prompt("Apodo:");
let edad = Number(prompt("Edad:"));


let identificador = nombre || apodo || "Anónimo";
alert(`Identificador: ${identificador}`);


if (edad >= 18 && (nombre || apodo)) {
    alert("Acceso permitido");
}


let altura = 0;
let alturaLogica = altura || 100; // Devuelve 100 porque 0 es falsy.
let alturaNula = altura ?? 100;   // Devuelve 0 porque 0 no es null ni undefined.
alert(`Con ||: ${alturaLogica}, Con ??: ${alturaNula}`);

let tieneNombre = !!nombre;
alert(`¿Introdujo nombre?: ${tieneNombre}`);