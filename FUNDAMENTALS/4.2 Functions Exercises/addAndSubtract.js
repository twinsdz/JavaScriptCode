/* function addAndSubtract(...input) {
    let sum = 0;
    result = 0;
    for (let i = 0; i < 3; i++) {
        if (i < 2) {
            sum += input[i];
        } else {
            result = sum - input[i];
        }
    }
    console.log(result);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30); */

/* function addAndSubtract(x, y, z) {
    let sum = (a, b) => a + b;
    return sum(x, y) - z;

    /* function sum(a, b){
        return a + b;
    }
    let result = sum(x, y) - z;
    return result; 
}

console.log(addAndSubtract(23, 6, 10));

// console.log(addAndSubtract(1, 17, 30));  */

/* function addAndSubtract(x, y, z) {
    let sum = (a, b) => a + b;
    let subtract = sum(x, y) - z;
    return subtract;   
}

console.log(addAndSubtract(23, 6, 10));

console.log(addAndSubtract(1, 17, 30)); */

function addAndSubtract(x, y, z) {
    function sum(num1, num2) {
        let sum = num1 + num2;
        return sum;
    }

    function subtract(num1, num2) {
        let result = num1 - num2;
        return result;
    }

    let sumNum = sum(x, y);
    return subtract(sumNum, z);
}

console.log(addAndSubtract(23, 6, 10));

console.log(addAndSubtract(1, 17, 30));