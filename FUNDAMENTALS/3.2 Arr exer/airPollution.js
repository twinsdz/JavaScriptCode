/* function airPollution(mapSofia, arr) {
    // матрица с map()
    let matrix = mapSofia.map(str => str.split(' ').map(Number));

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        let num = Number(tokens[1]);

        if (command === 'breeze') {
            dropTheRow(matrix, num);
        } else if (command === 'gale') {
            dropTheCol(matrix, num);
        } else {
            smog(matrix, num);
        }
    }

    let pollutedBlocks = [];

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row][col] >= 50) {
                pollutedBlocks.push(`[${row}-${col}]`);
            }
        }
    }

    function dropTheRow(matrix, row) {
        for (let col = 0; col < 5; col++) {
            let currentEl = matrix[row][col];
            if (currentEl - 15 >= 0) {
                matrix[row][col] -= 15;
            } else {
                matrix[row][col] = 0;
            }

        }
        return matrix;
    }

    function dropTheCol(matrix, col) {
        for (let row = 0; row < 5; row++) {
            let currentEl = matrix[row][col];
            if (currentEl - 20 >= 0) {
                matrix[row][col] -= 20;
            } else {
                matrix[row][col] = 0;
            }

        }
        return matrix;
    }

    function smog(matrix, num) {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                matrix[row][col] += num;
            }
        }
        return matrix;
    }

    return pollutedBlocks.length > 0 ? `Polluted areas: ${pollutedBlocks.join(', ')}` : 'No polluted areas';
}

// console.log(airPollution(["5 7 72 14 4",
//               "41 35 37 27 33",
//               "23 16 27 42 12",
//               "2 20 28 39 14",
//               "16 34 31 10 24"],
//     ["breeze 1", "gale 2", "smog 25"]
// ));

// console.log(airPollution(["5 7 3 28 32",
// "41 12 49 30 33",
// "3 16 20 42 12",
// "2 20 10 39 14",
// "7 34 4 27 24"],
// [ "smog 11", "gale 3", "breeze 1", "smog 2"]
// ));

console.log(airPollution(["5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24"
    ],
    ["breeze 1", "gale 2", "smog 35"]
)); */

function airPollution(mapSofia, arr) {
    // матрица с map()
    let matrix = mapSofia.map(str => str.split(' ').map(Number));

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        let num = Number(tokens[1]);

        if (command === 'breeze') {
            // обхождам дадения ред и вадя от всеки елемент числото 15 
            let line = matrix[num].map(el => el - 15 >= 0 ? (el - 15) : 0);
            matrix[num] = line;
        } else if (command === 'gale') {
            // обхождам всички редове и вадя от дадената колона числото 20
            for(let row = 0; row < matrix.length; row++){
                let el = matrix[row][num] - 20 >= 0 ? matrix[row][num] - 20 : 0;
                matrix[row][num] = el;
            }
        } else {
            // обхождам цялата матрица и прибавям даденото число
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    matrix[row][col] += num;
                }
            }
        }
    }

    let pollutedBlocks = [];

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row][col] >= 50) {
                pollutedBlocks.push(`[${row}-${col}]`);
            }
        }
    }

    return pollutedBlocks.length > 0 ? `Polluted areas: ${pollutedBlocks.join(', ')}` : 'No polluted areas';
}

console.log(airPollution(["5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24"
    ],
    ["breeze 1", "gale 2", "smog 25"]
));

// console.log(airPollution(["5 7 3 28 32",
// "41 12 49 30 33",
// "3 16 20 42 12",
// "2 20 10 39 14",
// "7 34 4 27 24"],
// [ "smog 11", "gale 3", "breeze 1", "smog 2"]
// ));

// console.log(airPollution(["5 7 2 14 4",
//         "21 14 2 5 3",
//         "3 16 7 42 12",
//         "2 20 8 39 14",
//         "7 34 1 10 24"
//     ],
//     ["breeze 1", "gale 2", "smog 35"]
// ));