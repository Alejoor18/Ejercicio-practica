let edad = parseInt(prompt("Ingrese su edad:"));
if (edad < 18) {
    alert("No puedes apostar. Debes ser mayor de edad.");
} else {
    let piloto = prompt("Elige un piloto:\nA - Piloto A (1.5)\nB - Piloto B (2.3)\nC - Piloto C (1.8)").toUpperCase();
    let cuotas = { "A": 1.5, "B": 2.3, "C": 1.8 };

    if (cuotas[piloto]) {
        let monto = parseInt(prompt("Ingrese el monto a apostar ($10,000 - $1,000,000):"));
        if (monto >= 10000 && monto <= 1000000) {
            let ganador = ["A", "B", "C"][Math.floor(Math.random() * 3)];
            alert("El ganador es: Piloto " + ganador);

            if (piloto === ganador) {
                alert("¡Ganaste $" + (monto * cuotas[piloto]) + "!");
            } else {
                alert("Perdiste la apuesta.");
            }
        } else {
            alert("Monto inválido.");
        }
    } else {
        alert("Piloto inválido.");
    }
}
