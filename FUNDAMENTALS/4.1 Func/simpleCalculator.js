/* function simpleCalc(a, b, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            console.log(multiply(a, b));
            break;
        case 'divide':
            let divide = (a, b) => a / b;
            console.log(divide(a, b));
            break;
        case 'add':
            let add = (a, b) => a + b;
            console.log(add(a, b));
            break;
        case 'subtract':
            let subtract = (a, b) => a - b;
            console.log(subtract(a, b));
            break;
    }
}

simpleCalc(5, 5, 'multiply');

simpleCalc(40, 8, 'divide');

simpleCalc(12, 19, 'add');

simpleCalc(50, 13, 'subtract'); */

function simpleCalc (a, b, operator) {
    let operators = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    };

    console.log(operators[operator](a, b));
}

simpleCalc(5, 5, 'multiply');

simpleCalc(40, 8, 'divide');

simpleCalc(12, 19, 'add');

simpleCalc(50, 13, 'subtract');

/* let simpleCalc = (a, b, operator) =>
    console.log(({
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    })[operator](a, b));

simpleCalc(5, 5, 'multiply');

simpleCalc(40, 8, 'divide');

simpleCalc(12, 19, 'add');

simpleCalc(50, 13, 'subtract'); */