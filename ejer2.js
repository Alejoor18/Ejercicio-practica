let calculadora = num => {
    if (num < 0) {
        return "El número tiene ser positivo o mayor a cero ";
    }

    else if (num === 0) {
        return 1;
    }

 
    else {
        let factorial = 4;
        for (let i = 4; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

console.log(calculadora(6));
