function operations(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result;
    switch (operator) {
        case "+":
        case "-":
        case "*":
            if (operator === "+") {
                result = n1 + n2;
            } else if (operator === "-") {
                result = n1 - n2;
            } else {
                result = n1 * n2;
            }
            break;
        case "/":
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            }
            result = n1 / n2;
            break;
        case "%":
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            }
            result = n1 % n2;
            break;
    }

    let evenResult = result % 2 == 0;
    
    if (operator === "+" || operator === "-" || operator === "*") {
        if (evenResult == 0) {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        }
    } else if (operator === "/" && n2 !== 0) {
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
    } else if (operator === "%" && n2 !== 0) {
        console.log(`${n1} ${operator} ${n2} = ${result}`);
    }
}


operations(["10", "12", "+"]);

/* operations ("10", "1", "-");
operations ("7", "3", "*");
operations ("123", "12", "/");
operations ("10", "3", "%");
operations ("112", "0", "/");
operations ("10", "0", "%"); */