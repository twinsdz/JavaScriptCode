function solve(input) {
    let sumFirstRow = input[0].reduce((acc, curr) => acc + curr, 0);
    let sumFirstCol = 0;
    let isMagic = true;

    input.forEach(row => {
        sumFirstCol += row[0];
    });

    for (let row = 1; row < input.length; row++) {
        let currentRowSum = input[row].reduce((acc, curr) => acc + curr, 0);
        let currentColSum = 0;

        for (let col = 0; col < input.length; col++) {
            currentColSum += input[col][row];
        }

        if (currentRowSum !== sumFirstRow || currentColSum !== sumFirstCol) {
            isMagic = false;
        }
    }
    console.log(isMagic);
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);