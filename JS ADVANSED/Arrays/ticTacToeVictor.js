function solve(input) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let isPlayerX = true;

    //пълня матрицата
    for (let line of input) {
        let [currRow, currCol] = line.split(' ').map(Number);

        if (board[currRow][currCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        board[currRow][currCol] = isPlayerX ? 'X' : 'O';
        isPlayerX = !isPlayerX;

        let gameOver = checkIfGameOver(board);

        if (gameOver) {
            break;
        }

    }

    printMatrix(board);

    function checkIfGameOver(board) {

        //check horizontal
        for (let row = 0; row < 3; row++) {
            let isSameX = board[row].every(x => x === 'X');
            let isSameO = board[row].every(x => x === 'O');

            if (isSameX || isSameO) {
                console.log(`Player ${isSameX ? 'X' : 'O'} wins!`);
                return true;
            }
        }

        // check vertical
        for (let col = 0; col < 3; col++) {
            if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[0][col] !== false) {
                console.log(`Player ${board[0][col]} wins!`);
                return true;
            }
        }

        // check diagonal
        if (
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0] &&
            board[0][2] !== false
        ) {
            console.log(`Player ${board[0][2]} wins!`);
            return true;
        } else if (
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2] &&
            board[0][0] !== false
        ) {
            console.log(`Player ${board[0][0]} wins!`);
            return true;
        }

        // check if there is false
        let thereIsFalse = false;

        for (let row = 0; row < board.length; row++) {
            if (board[row].includes(false)) {
                thereIsFalse = true;
            }
        }

        if (!thereIsFalse) {
            console.log('The game ended! Nobody wins :(');
            return true;
        }
    }

    function printMatrix() {
        for (let row = 0; row < board.length; row++) {
            console.log(board[row].join('\t'));
        }
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

solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
]);

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);