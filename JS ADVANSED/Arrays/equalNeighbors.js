function solve(matrix) {
    let count = 0;

    for (let row = 1; row < matrix.length; row++) {
        let arrOfMatrix = matrix[row];

        for (let col = 1; col < arrOfMatrix.length; col++) {
            let priorCol = col - 1;
            let priorRow = row - 1;

            if (matrix[priorRow][priorCol] === matrix[priorRow][col]) {
                count++;
            }

            if (matrix[row][priorCol] === matrix[priorRow][priorCol]) {
                count++;
            }

            if (col === arrOfMatrix.length - 1) {
                if (matrix[row][col] === matrix[priorRow][col]) {
                    count++;
                }
            }

            if (row === matrix.length - 1) {
                if (matrix[row][priorCol] === matrix[row][col]) {
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(solve(
    [
        [2, 2, 5, 7, 4],
        [4, 0, 5, 3, 4],
        [2, 5, 5, 4, 2]
    ]));

console.log(solve(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
));

console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));