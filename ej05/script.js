"use strict";

let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");

alert(`Suma incorrecta (concatenación): ${num1 + num2}`);
alert(`Suma correcta: ${Number(num1) + Number(num2)}`);

const values = ["123", " 45 ", "abc", "", "0", 0, null, undefined, true];
let tableHTML = `<table border="1">
    <tr><th>Valor Original</th><th>Number()</th><th>String()</th><th>Boolean()</th></tr>`;

for (let val of values) {
    let original = val === "" ? '""' : val === " 45 " ? '" 45 "' : val;
    tableHTML += `<tr>
        <td>${original}</td>
        <td>${Number(val)}</td>
        <td>${String(val)}</td>
        <td>${Boolean(val)}</td>
    </tr>`;
}
tableHTML += `</table>`;
document.write(tableHTML);