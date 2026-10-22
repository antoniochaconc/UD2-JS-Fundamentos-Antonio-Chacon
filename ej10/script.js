"use strict";

let opcion;
do {
    opcion = prompt("Elige una opción:\n1. Tabla de multiplicar\n2. Sumar números\n3. Impares 1-20\n4. Cuenta atrás\n0. Salir");
    
    switch (opcion) {
        case "1":
            let num = Number(prompt("¿Qué tabla quieres?"));
            let tabla = "";
        
            for (let i = 1; i <= 10; i++) {
                tabla += `${num} x ${i} = ${num * i}\n`;
            }
            alert(tabla);
            break;
            
        case "2":
            let suma = 0;
         
            while (true) {
                let entrada = prompt("Introduce un número (deja vacío o cancela para terminar):");
                if (entrada === null || entrada.trim() === "") break;
                suma += Number(entrada);
            }
            alert(`La suma total es: ${suma}`);
            break;
            
        case "3":
            let impares = "";
           
            for (let i = 1; i <= 20; i++) {
                if (i % 2 === 0) continue;
                impares += i + " ";
            }
            alert(`Impares: ${impares}`);
            break;
            
        case "4":
            let cuenta = Number(prompt("Número para iniciar cuenta atrás:"));
            let resultadoCuenta = "";
           
            do {
                resultadoCuenta += cuenta + "\n";
                cuenta--;
            } while (cuenta >= 0);
            alert(resultadoCuenta);
            break;
            
        case "0":
        case null:
            alert("Saliendo...");
            break;
            
        default:
            alert("Opción no válida.");
    }
} while (opcion !== "0" && opcion !== null);