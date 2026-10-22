"use strict";

let a = Number(prompt("Introduce el número A:"));
let b = Number(prompt("Introduce el número B:"));

alert(`Suma: ${a + b}
Resta: ${a - b}
Multiplicación: ${a * b}
División: ${a / b}
Resto: ${a % b}
Potencia: ${a ** b}`);

let counter = 5;

alert(`Sufijo (counter++): ${counter++}`); 

alert(`Prefijo (++counter): ${++counter}`);

let total = 10;
total += 5; 
total *= 2; 
alert(`Resultado de asignaciones compuestas: ${total}`);