
let modelo = prompt("Seleccione el modelo de tenis:\n1 - Clásicos ($500.000)\n2 - Running ($800.000)\n3 - Basketball ($1.000.000)");


let precioUnitario;

if (modelo === "1") {
    precioUnitario = 500000;
} else if (modelo === "2") {
    precioUnitario = 800000;
} else if (modelo === "3") {
    precioUnitario = 1000000;
} else {
    alert("Opción inválida. Debe seleccionar 1, 2 o 3.");
}


if (precioUnitario) {
    let talla = parseInt(prompt("Ingrese la talla (35 - 44):"));

    if (talla >= 35 && talla <= 44) {
       
        let cantidad = parseInt(prompt("Ingrese la cantidad a comprar (mínimo 1, máximo 5):"));

        if (cantidad >= 1 && cantidad <= 5) {
            let totalPagar = precioUnitario * cantidad;
            let descuento = 0;

           
            if (cantidad >= 3) {
                descuento = totalPagar * 10 / 100;
                totalPagar = totalPagar - descuento;
            }

            alert("Compra realizada .\nModelo seleccionado: " + modelo +
                  "\nTalla: " + talla + "\nCantidad: " + cantidad +
                  "\nDescuento aplicado: $" + descuento +
                  "\nTotal a pagar: $" + totalPagar);
        } else {
            alert("Cantidad inválida, debe ser entre 1 y 5 pares.");
        }
    } else {
        alert("Talla inválida, debe ser entre 35 y 44.");
    }
}
