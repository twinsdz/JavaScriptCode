function divisibleByNine(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);

    sum = 0;
    let numberString = "";

    for (let i = n; i <= m; i++) {
        if (i % 9 == 0) {
            sum += i;
            numberString += i + "\n";  // "\n" нов ред
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(numberString);
}

divisibleByNine(["100", "200"]);