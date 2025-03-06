const calculadoradeMCD = (a, b) => {
    
    a = Math.abs(a);
    b = Math.abs(b);

    // algoritmo de euclides

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    // El MCD es el valor final de a
    return a;
}

console.log(calculadoradeMCD(20, 18)); 
console.log(calculadoradeMCD(20, 10));  
console.log(calculadoradeMCD(7, 21));   
