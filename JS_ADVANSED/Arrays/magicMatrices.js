function solve(input) {
    let magicSum = input[0].reduce((acc, curr) => acc + curr, 0);
    let isMagic = true;

    for (let row = 0; row < input.length; row++) {
        // let currentRowSum = input[row].reduce((acc, curr) => acc + curr, 0);
        let currentRowSum = 0;
        let currentColSum = 0;

        for (let col = 0; col < input.length; col++) {
            currentRowSum += input[row][col];
            currentColSum += input[col][row];
        }

        if (currentRowSum !== magicSum || currentColSum !== magicSum) {
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