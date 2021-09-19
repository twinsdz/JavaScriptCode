function solve(matrix) {
    let sumOne = 0;
    let sumTwo = 0;

    for (let row = 0; row < matrix.length; row++) {
        let lastCol = matrix[row].length - 1;
        for (let col = 0; col < matrix.length; col++) {
            sumTwo += matrix[row][lastCol--];
            sumOne += matrix[row++][col];
        }
    }
    console.log(`${sumOne} ${sumTwo}`);
}

solve([
    [20, 40],
    [10, 60]
]);

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);