function memoryGame(input) {
    let index = 0;
    let arr = input[index++].split(' ');
    let inputLine = input[index++];
    let moves = 0;

    while (inputLine !== 'end') {
        inputLine = inputLine.split(' ');
        moves++;
        let i = Number(inputLine[0]);
        let j = Number(inputLine[1]);

        if (validCheck(arr, i, j)) {
            if (arr[i] !== arr[j]) {
                console.log('Try again!');
            } else {
                console.log(`Congrats! You have found matching elements - ${arr[i]}!`);
                cut(arr, i);
            }
        } else {
            let addNum = `-${moves}a`;
            let index = Math.trunc(arr.length / 2);
            arr.splice(index, 0, addNum, addNum);
            console.log('Invalid input! Adding additional elements to the board');
        }

        if (arr.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        inputLine = input[index++];
    }

    // проверка за валидност на индексите
    function validCheck(array, i, j) {
        let isValid = true;
        if (i === j || i < 0 || i >= array.length || j < 0 || j >= array.length) {
            isValid = false;
        }
        return isValid;
    }

    function cut(array, idx) {
        let el = array[idx];

        for (let i = 0; i < array.length; i++) {
            if (array[i] === el) {
                array.splice(i, 1);
                i = i - 1;  // връщам i с едно назад, за да не прескоча елемент
            }
        }
        return array;
    }

    if (arr.length > 0) {
        console.log(`Sorry you lose :(\n${arr.join(' ')}`);
    }
}


memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);

// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ]);


/* function memoryGame(input) {
 
    let sequence = input.shift().split(' ');
    let command = input.shift();
    let turns = 0;
 
    while (command !== 'end') {
        let [index1, index2] = command.split(' ').map(Number);
        turns++;
 
        if (sequence[index1] === sequence[index2]) {
            console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
            sequence = removeElements(index1, index2);
        } else {
            if (index1 < 0 || index1 >= sequence.length || index2 < 0 || index2 >= sequence.length) {
                console.log("Invalid input! Adding additional elements to the board");
                let index = Math.trunc(sequence.length / 2);
                sequence.splice(index, 0, `-${turns}a`, `-${turns}a`);
            } else {
                console.log("Try again!");
            }
        }
        if (sequence.length === 0) {
            console.log(`You have won in ${turns} turns!`);
            break;
        }
        command = input.shift();
    }
    if (sequence.length > 0) {
        console.log("Sorry you lose :(");
        console.log(sequence.join(' '));
    }
 
 
    function removeElements(index1, index2) {
         const num1 = sequence[index1];
         const num2 = sequence[index2];
         if (num1 === num2) {
             sequence.splice(index1, 1);
             index2 = sequence.indexOf(num2);
             sequence.splice(index2, 1);
         }
        return sequence;
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]); */

/* function solve(input) {

    const numbers = input.shift().trim().split(' ');
    let moves = 0;

    // превръщане на всички букви в малки
    while (numbers.length > 1 && input[0].toLowerCase() !== 'end') {

        let [index1, index2] = input.shift().split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        moves++;

        if (index1 < 0 || index1 >= numbers.length || index1 === index2 || index2 < 0 || index2 >= numbers.length) {

            const index = Math.trunc(numbers.length / 2);
            const symbol = '-' + moves + 'a';

            numbers.splice(index, 0, symbol, symbol);
            console.log('Invalid input! Adding additional elements to the board')

        } else {
            const num1 = numbers[index1];
            const num2 = numbers[index2];

            if (num1 === num2) {
                numbers.splice(index1, 1);
                index2 = numbers.indexOf(num2);
                numbers.splice(index2, 1);
                console.log(`Congrats! You have found matching elements - ${num1}!`);

            } else if (num1 !== num2) {
                console.log('Try again!');
            }
        }
    }

    if (numbers.length === 0 || numbers.length === 1) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${numbers.join(' ')}`);
    }
}

solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]); */