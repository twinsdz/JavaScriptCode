function decimalToBinary(number){
    let result = '';

    while (number > 0){
        result = (number % 2) + result;
        number = Math.trunc(number/2); 
    }
    console.log(result);
}

decimalToBinary(10);