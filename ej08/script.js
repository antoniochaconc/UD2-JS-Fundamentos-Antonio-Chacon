"use strict";

let nota = prompt("Introduce tu nota (0-10):");
let notaNum = Number(nota);

if (isNaN(notaNum) || nota === null || nota.trim() === "" || notaNum < 0 || notaNum > 10) {
    alert("Error: Debes introducir un número válido entre 0 y 10.");
} else {
    if (notaNum < 5) {
        alert("Suspenso");
    } else if (notaNum < 7) {
        alert("Aprobado");
    } else if (notaNum < 9) {
        alert("Notable");
    } else {
        alert("Sobresaliente");
    }
}

