function intAndFloat(num1, num2, num3) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let sum = num1 + num2 + num3;

    if (Math.trunc(sum) === sum){
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

intAndFloat (9, 100, 1.1);

// intAndFloat (100, 200, 303);