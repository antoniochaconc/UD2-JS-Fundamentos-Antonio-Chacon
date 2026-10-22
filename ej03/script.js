"use strict";

let vNumber = 42;
let vBigInt = 9007199254740991n;
let vString = "Hola";
let vBoolean = true;
let vNull = null;
let vUndefined = undefined;
let vSymbol = Symbol("simbolo");
let vObject = { clave: "valor" };

document.write(`<ul>
    <li>${vNumber} - ${typeof vNumber}</li>
    <li>${vBigInt} - ${typeof vBigInt}</li>
    <li>${vString} - ${typeof vString}</li>
    <li>${vBoolean} - ${typeof vBoolean}</li>
    <li>${vNull} - ${typeof vNull}</li>
    <li>${vUndefined} - ${typeof vUndefined}</li>
    <li>Symbol - ${typeof vSymbol}</li>
    <li>Objeto - ${typeof vObject}</li>
</ul>`);

// typeof null devuelve "object" por un error histórico en la primera versión de JavaScript.
// Se mantuvo así para no romper el código de páginas antiguas.