"use strict";

const playlist = [
    ["Bohemian Rhapsody", "Queen", 354, "Rock"],
    ["Hotel California", "Eagles", 391, "Rock"],
    ["Imagine", "John Lennon", 183, "Pop"]
];

// --- PARTE 1 ---
playlist.push(["Thriller", "Michael Jackson", 357, "Pop"]);
playlist.push(["Billie Jean", "Michael Jackson", 294, "Pop"]);

let cancionEliminadaPop = playlist.pop();
playlist[0].push(1975); // Añadir quinto dato a la primera canción

document.write(`<p>Canción eliminada (pop): ${cancionEliminadaPop[0]}</p>`);
document.write(`<p>Playlist Parte 1: ${JSON.stringify(playlist)}</p>`);

// --- PARTE 2 ---
// splice: (índice inicio, cantidad a borrar, elemento a insertar)
playlist.splice(1, 0, ["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"]);
let cancionEliminadaSplice = playlist.splice(2, 1)[0];
playlist.splice(0, 1, ["Let It Be", "The Beatles", 243, "Rock"]);

document.write(`<p>Canción eliminada (splice): ${JSON.stringify(cancionEliminadaSplice)}</p>`);
document.write(`<p>Playlist Parte 2: ${JSON.stringify(playlist)}</p>`);

// --- PARTE 3 ---
const copiaSuperficial = [...playlist];
copiaSuperficial[0][0] = "MODIFICADO"; 
// Al modificar la copia superficial, TAMBIÉN se modifica la original.
// Explicación: El operador spread copia las referencias de los arrays internos, no sus valores. 
// Ambos arrays apuntan al mismo espacio en memoria para las filas.

const copiaIndependiente = playlist.map(fila => [...fila]);
copiaIndependiente[0][0] = "MODIFICADO DE NUEVO";
// Aquí la original no cambia, porque hemos creado nuevos arrays internos al mapear.