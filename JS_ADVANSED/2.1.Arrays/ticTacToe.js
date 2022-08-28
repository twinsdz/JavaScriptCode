// function solve(input) {
//     let arr = [
//         [false, false, false],
//         [false, false, false],
//         [false, false, false]
//     ];

//     let player = 'X';

//     for (let line of input) {
//         let [currRow, currCol] = line.split(' ').map(Number);

//         if (arr[currRow][currCol] !== false) {
//             console.log('This place is already taken. Please choose another!');
//             continue;
//         }

//         arr[currRow][currCol] = player;

//         //check horizontal and vertical
//         for (let i = 0; i < 3; i++) {
//             if (
//                 arr[i][0] === player &&
//                 arr[i][1] === player &&
//                 arr[i][2] === player
//             ) {
//                 console.log(`Player ${player} wins!`);
//                 printMatrix();
//                 return;
//             } else if (
//                 arr[0][i] === player &&
//                 arr[1][i] === player &&
//                 arr[2][i] === player
//             ) {
//                 console.log(`Player ${player} wins!`);
//                 printMatrix();
//                 return;
//             }
//         }

//         //check left to right
//         if (
//             arr[0][0] === player &&
//             arr[1][1] === player &&
//             arr[2][2] === player
//         ) {
//             console.log(`Player ${player} wins!`);
//             printMatrix();
//             return;
//         }

//         //check right to left
//         else if (
//             arr[0][2] === player &&
//             arr[1][1] === player &&
//             arr[2][0] === player
//         ) {
//             console.log(`Player ${player} wins!`);
//             printMatrix();
//             return;
//         }

//         let thereIsFalse = false;

//         for (let row = 0; row < arr.length; row++) {
//             if (arr[row].includes(false)) {
//                 thereIsFalse = true;
//             }
//         }

//         if (!thereIsFalse) {
//             console.log('The game ended! Nobody wins :(');
//             printMatrix();
//             return;
//         }

//         player = player === 'X' ? 'O' : 'X';
//     }

//     function printMatrix() {
//         for (let row = 0; row < arr.length; row++) {
//             console.log(arr[row].join('\t'));
//         }
//     }
// }

function solve(input) {

    function hasWin(field, player) {
        for (let i = 0; i < 3; i++) {
            if (field[i][0] === player && field[i][1] === player && field[i][2] === player) {
                return true;
            } else if (field[0][i] === player && field[1][i] === player && field[2][i] === player) {
                return true;
            } else if (field[0][0] === player && field[1][1] === player && field[2][2] === player) {
            return true;
        } else if (field[0][2] === player && field[1][1] === player && field[2][0] === player) {
            return true;
        } else {
            return false;
        }
    }
}

    function printResult(field) {
        field.forEach(element => {
            console.log(element.join("\t"));
        });
    }

    let gameWon = false;

    let playerField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let playerSign = 'X';

    for (let i = 0; i < input.length; i++) {
        let [x, y] = input[i].split(' ').map(Number);

        if (playerField[x][y] !== false) {
            console.log('This place is already taken. Please choose another!');
        } else {
            playerField[x][y] = playerSign;
            if (hasWin(playerField, playerSign)) {
                gameWon = true;
                console.log(`Player ${playerSign} wins!`);
                printResult(playerField);
                break;
            }
            playerSign = playerSign == "X" ? "O" : "X";
        }
    }

    if (!gameWon) {
        console.log("The game ended! Nobody wins :(");
        printResult(playerField);
    }
}


solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);