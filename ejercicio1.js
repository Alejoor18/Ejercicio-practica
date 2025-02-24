const precio_Basico = 2000;
const precio_Premium = 4000;

const opcion_basico =1;
const opcion_premium =2;

let costounitario;
let piezas;

let servicio = prompt("Seleccione el tipo de servicio:\n1. Lavado Básico ($2000 por pieza)\n2. Lavado Premium ($4000 por pieza)");

if (servicio === opcion_basico) {
    costounitario = precio_Basico;
    piezas= parseInt(prompt("ingrese cantidad de piezas (1-20):"));
    
} else if (servicio === opcion_premium) {
    costounitario = precio_Premium;
    piezas= parseInt(prompt("ingrese cantidad de piezas (1-20):"));
alert(piezas)

} else {
    console.log("opcion invalida");
}
if( piezas <1 || piezas > 20 ) {
    console.log ("cantidad de piezas invalida");

} else {
    console.log ("costo total: " + (costounitario * piezas));

}
