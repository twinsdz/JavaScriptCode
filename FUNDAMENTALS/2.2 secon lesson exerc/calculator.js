function calcul(num1, opr, num2){
    let result = 0;
    if (opr === '+'){
        result = num1 + num2;
    } else if (opr === '-') {
       result = num1 - num2;
    } else if (opr === '*'){
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }

    return result.toFixed(2);
}

console.log(calcul(5, '+', 10));