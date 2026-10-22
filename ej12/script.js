"use strict";

const playlist = [
    ["Bohemian Rhapsody", "Queen", 354, "Rock"],
    ["Hotel California", "Eagles", 391, "Rock"],
    ["Imagine", "John Lennon", 183, "Pop"]
];


playlist.push(["Thriller", "Michael Jackson", 357, "Pop"]);
playlist.push(["Billie Jean", "Michael Jackson", 294, "Pop"]);

let cancionEliminadaPop = playlist.pop();
playlist[0].push(1975); 

document.write(`<p>Canción eliminada (pop): ${cancionEliminadaPop[0]}</p>`);
document.write(`<p>Playlist Parte 1: ${JSON.stringify(playlist)}</p>`);


playlist.splice(1, 0, ["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"]);
let cancionEliminadaSplice = playlist.splice(2, 1)[0];
playlist.splice(0, 1, ["Let It Be", "The Beatles", 243, "Rock"]);

document.write(`<p>Canción eliminada (splice): ${JSON.stringify(cancionEliminadaSplice)}</p>`);
document.write(`<p>Playlist Parte 2: ${JSON.stringify(playlist)}</p>`);


const copiaSuperficial = [...playlist];
copiaSuperficial[0][0] = "MODIFICADO"; 


const copiaIndependiente = playlist.map(fila => [...fila]);
copiaIndependiente[0][0] = "MODIFICADO DE NUEVO";
//00