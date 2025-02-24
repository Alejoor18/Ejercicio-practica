let valorMatricula =7000000;

let opcionPago = prompt("Seleccione la forma de pago:\n1. Pago completo (5% de descuento)\n2. Pago en 2 cuotas (2% de interés mensual)\n3. Pago en 3 cuotas (2% de interés mensual)");

let totalPagar;
let cuotaMensual;

if (opcionPago === "1")  {

    let descuento = valorMatricula * 5 / 100;
    totalPagar = valorMatricula - descuento
    alert("Su eleccion fue pago completo.\nTotal a pagar con 5% de descuento: " + totalPagar);
    
} 

else if (opcionPago === "2") {
    let interés = valorMatricula * 2 / 100;
    totalPagar = valorMatricula + interés;
    cuotaMensual = totalPagar / 2;

    alert("Su eleccion fue pagar en 2 cuotas.\nTotal a pagar con interés: " + totalPagar + 
        "\nCada cuota será de: " + cuotaMensual);

}

else if (opcionPago === "3") {
    let interéstotal = valorMatricula * 2 / 100 * 3;
    totalPagar = valorMatricula + interéstotal;
    cuotaMensual = totalPagar / 3;

    alert("Su eleccion fue pagar en 3 cuotas.\nTotal a pagar con interés: " + totalPagar + 
        "\nCada cuota será de: " + cuotaMensual);

}