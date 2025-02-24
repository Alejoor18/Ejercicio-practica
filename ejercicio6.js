let restaurante = prompt("Seleccione el restaurante:\n1 - Hamburguesas\n2 - Pizzería\n3 - Comida China");

let precio = 0;
let comida = "";

if (restaurante === "1") {
    comida = "Hamburguesa simple";
    precio = 25000;
} else if (restaurante === "2") {
    comida = "Pizza familiar";
    precio = 85000;
} else if (restaurante === "3") {
    comida = "Fideos con pollo";
    precio = 18000;
} else {
    alert("Opción inválida.");
}

if (precio > 0) {
    let cantidad = parseInt(prompt("Ingrese la cantidad de " + comida + " a pedir:"));

    if (cantidad >= 1) {
        let subtotal = precio * cantidad;
        let costoEnvio = 5000;
        let totalPagar = subtotal + costoEnvio;

        if (totalPagar >= 23000) {
            let pago = prompt("Seleccione el método de pago:\n1 - Efectivo\n2 - Tarjeta débito/crédito");

            if (pago === "1" || pago === "2") {
                alert("Su pedido:\n" + cantidad + " x " + comida + "\nSubtotal: $" + subtotal + "\nCosto de envío: $" + costoEnvio + "\nTotal a pagar: $" + totalPagar + "\nTiempo de entrega: 45 min - 1 hora.");
            } else {
                alert("Método de pago inválido.");
            }
        } else {
            alert("El pedido mínimo es de $23000.");
        }
    } else {
        alert("Cantidad inválida.");
    }
}
