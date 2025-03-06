const calculadoradedivisores = num => {
   
    num = Math.abs(num);

    let suma = 0;

    
    for (let i = 1; i < num; i++) {
       
        if (num % i === 0) {
            suma += i;
        }
    }

    return suma;
}

console.log(calculadoradedivisores(24)); 
console.log(calculadoradedivisores(-30)); 
console.log(calculadoradedivisores(1));  
