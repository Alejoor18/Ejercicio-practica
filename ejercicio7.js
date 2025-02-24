let localidad = prompt("Elige la localidad:\n1 - General ($50000)\n2 - Preferencial ($150000)\n3 - VIP ($300000)");

let precio = 0;
let tipoLocalidad = "";

if (localidad === "1") {
    tipoLocalidad = "General";
    precio = 50000;
} else if (localidad === "2") {
    tipoLocalidad = "Preferencial";
    precio = 150000;
} else if (localidad === "3") {
    tipoLocalidad = "VIP";
    precio = 300000;
} else {
    alert("Opción inválida.");
}

if (precio > 0) {
    let cantidad = parseInt(prompt("Ingrese la cantidad de boletas (máximo 5):"));

    if (cantidad >= 1 && cantidad <= 5) {
        let subtotal = precio * cantidad;
        let impuestos = subtotal * 0.10; 
        let cargoServicio = cantidad * 5000; 
        let totalPagar = subtotal + impuestos + cargoServicio;

        let pago = prompt("Seleccione el método de pago:\n1 - Efectivo\n2 - Tarjeta de crédito");

        if (pago === "1" || pago === "2") {
            alert("Resumen de la compra:\n" + cantidad + " boletas en " + tipoLocalidad + 
                  "\nSubtotal: $" + subtotal + "\nImpuestos (10%): $" + impuestos + 
                  "\nCargo por servicio: $" + cargoServicio + 
                  "\nTotal a pagar: $" + totalPagar);
        } else {
            alert("Método de pago inválido.");
        }
    } else {
        alert("Cantidad inválida. Solo puedes comprar entre 1 y 5 boletas.");
    }
}
