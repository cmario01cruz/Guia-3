const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del estudiante: ", (nombre) => {
    rl.question("Ingrese la nota obtenida: ", (entradaNota) => {

        const nota = parseFloat(entradaNota);

        console.log("\n====================================");
        console.log("       REPORTE DE EXAMEN");
        console.log("====================================");
        console.log("Estudiante: " + nombre);

        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log("Error: La nota debe ser un número entre 0.0 y 10.0.");
        } else {
            console.log("Nota: " + nota.toFixed(1));

            if (nota >= 9.0) {
                console.log("Desempeño Excelente (Aprobado)");
            } else if (nota >= 6.0) {
                console.log("Desempeño Satisfactorio (Aprobado)");
            } else {
                console.log("Reprobado — Requiere refuerzo");
            }
        }

        console.log("====================================");

        rl.close();
    });
});
