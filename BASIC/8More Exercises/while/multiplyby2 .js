function solve(...input) {
    let index = 0;
    let number = Number(input[index++]);
    let result = 0;

    while (number >= 0) {

        if (number < 0) {
            break;
        }

        result = number * 2;

        console.log(`Result: ${result.toFixed(2)}`);
        number = Number(input[index++]);
    }
    console.log("Negative number!");
}

/* solve("12", "43.2144", "12.3", "543.23", "-20"); */

solve ("23.43", "12.3245", "0", "65.23432", "23", "65", "-12");