let modelo = prompt("Seleccione el modelo de escoba:\n1 - Escoba dura\n2 - Escoba suave\n3 - Cepillo");
let precioBase = 0;


if (modelo === "1") { 
    let material = prompt("Seleccione el tipo de material:\n1 - Cerdas sintéticas ($8.000)\n2 - Cerdas naturales ($10.000)");
    
    if (material === "1") {
        precioBase = 8000;
    } else if (material === "2") {
        precioBase = 10000;
    } else {
        alert("Material inválido.");
    }

} else if (modelo === "2") { 
    alert("El modelo 'Escoba suave' no tiene precio actualmente.");

} else if (modelo === "3") { 
    let material = prompt("Seleccione el tipo de material:\n1 - Cerdas sintéticas ($12.000)\n2 - Cerdas naturales ($15.000)");
    
    if (material === "1") {
        precioBase = 12000;
    } else if (material === "2") {
        precioBase = 15000;
    } else {
        alert("Material inválido.");
    }

} else {
    alert("Modelo inválido. Debe seleccionar 1, 2 o 3.");
}

if (precioBase > 0) {
    let extra = 0;
    let opcionExtra = prompt("¿Desea agregar una opción extra?\n1 - Mango largo (+$2.000)\n2 - Gancho en la punta (+$500)\n3 - Ninguno");

    if (opcionExtra === "1") {
        extra = 2000;
    } else if (opcionExtra === "2") {
        extra = 500;
    } else if (opcionExtra !== "3") {
        alert("Opción extra inválida.");
    }

    let cantidad = parseInt(prompt("Ingrese la cantidad de escobas (mínimo 3, máximo 30):"));

    if (cantidad >= 3 && cantidad <= 30) {
        let total = (precioBase + extra) * cantidad;
        alert("Total a pagar: $" + total);
    } else {
        alert("Cantidad inválida.");
    }
}
