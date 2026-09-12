const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el monto de la compra: $", (montoEntrada) => {
    rl.question("Ingrese el tipo de envío (1: Normal / 2: Express): ", (tipoEnvioEntrada) => {
        rl.question("¿Posee Membresía Premium? (S/N): ", (premium) => {

            const montoCompra = parseFloat(montoEntrada);
            const tipoEnvio = parseInt(tipoEnvioEntrada);
            premium = premium.toUpperCase();

            if (isNaN(montoCompra) || montoCompra < 0) {
                console.log("\nError: El monto de la compra no es válido.");
            } else if (tipoEnvio !== 1 && tipoEnvio !== 2) {
                console.log("\nError: El tipo de envío debe ser 1 o 2.");
            } else {

                let costoEnvio;

                if (montoCompra >= 100 || premium === "S") {
                    costoEnvio = 0;
                } else if (tipoEnvio === 1) {
                    costoEnvio = 5;
                } else {
                    costoEnvio = 10;
                }

                let descuento = 0;

                if (montoCompra > 150) {
                    descuento = montoCompra * 0.10;
                }

                const totalFinal = montoCompra - descuento + costoEnvio;

                console.log("\n====================================");
                console.log("       RESUMEN DE COMPRA");
                console.log("====================================");
                console.log("Subtotal:          $" + montoCompra.toFixed(2));
                console.log("Descuento aplicado: $" + descuento.toFixed(2));
                console.log("Costo de envío:     $" + costoEnvio.toFixed(2));
                console.log("Total final:        $" + totalFinal.toFixed(2));
                console.log("====================================");
            }

            rl.close();
        });
    });
});
