
let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros a solicitar (máximo 5):"));

if (cantidadLibros < 1 || cantidadLibros > 5) {
    alert("Cantidad inválida. Debe solicitar entre 1 y 5 libros.");
} else {
    let totalPagar = 0;
    let contador = 1;

    if (contador <= cantidadLibros) {
        let categoria = prompt("Seleccione la categoría del libro " + contador + ":\n1 - Bestsellers ($500 por día)\n2 - Literatura ($100 por día)\n3 - Académicos (Gratis)");
        let precioPorDia = 0;

        if (categoria === "1") {
            precioPorDia = 500;
        } else if (categoria === "2") {
            precioPorDia = 100;
        } else if (categoria === "3") {
            precioPorDia = 0;
        } else {
            alert("Categoría inválida.");
        }

        if (precioPorDia >= 0) {
            let dias = parseInt(prompt("Ingrese la cantidad de días de préstamo (mínimo 1, máximo 30):"));

            if (dias < 1 || dias > 30) {
                alert("Número de días inválido.");
            } else {
                let costoLibro = precioPorDia * dias;

                if (dias > 10) {
                    costoLibro = costoLibro * 10 / 100; 
                }

                totalPagar += costoLibro;
            }
        }
        contador++;
    }

    if (totalPagar > 0) {
        alert("El costo total del préstamo es: " + totalPagar);
    }
}
