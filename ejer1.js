let multiplicador = (num1) => {
    return (num2) => num2 * num1 ;

}
let doble = multiplicador (2)
let triple = multiplicador (3)

console.log (doble(5));
console.log (triple(7));