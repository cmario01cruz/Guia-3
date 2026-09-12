const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de horas estacionadas: ", (entradaHoras) => {

    const horas = parseInt(entradaHoras);

    if (isNaN(horas) || horas <= 0) {
        console.log("\nError: Debe ingresar una cantidad de horas válida mayor a cero.");
    } else {

        let totalPagar;

        if (horas === 1) {
            totalPagar = 2.00;
        } else if (horas >= 2 && horas <= 4) {
            totalPagar = horas * 1.50;
        } else {
            totalPagar = horas * 1.00;
        }

        console.log("\n====================================");
        console.log("       TICKET DE ESTACIONAMIENTO");
        console.log("====================================");
        console.log("Horas cobradas: " + horas);
        console.log("Total a pagar: $" + totalPagar.toFixed(2));
        console.log("====================================");
    }

    rl.close();
});
