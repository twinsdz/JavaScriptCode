function equalNeighbors(input) {
    let count = 0;
    // сравняване на масиви в матрица
    for (let row = 0; row < input.length - 1; row++) {
        // въртя до края на съответния масив в масива 
        for (let col = 1; col < input[row].length; col++) {
            // сравнявам следващия масив в същата колона (едно под друго числата от 1ви индекс натам)
            // let oneArr = input[row][col];
            // let twoArr = input[row + 1][col];
            if (input[row][col] === input[row + 1][col]) {
                count++;
            }
            // сравнявам в същия масив съседното число отляво, защото вървя надясно и на последния индекс няма какво да сравня 
            let a = input[row][col];
            let b = input[row][col - 1];
            if (input[row][col] === input[row][col - 1]) {
                count++;
            }
        }
    }

    // сравнявам последния масив от матрицата от ляво надясно, защото в предния цикъл сравнението спира на предпоследния
    for (let i = 0; i < input[input.length - 1].length; i++) {
        let a = input[input.length - 1][i];
        let b = input[input.length - 1][i + 1];
        if (input[input.length - 1][i] === input[input.length - 1][i + 1]) {
            count++;
        }
    }

    // сравнявам първата колона, защото в първия цикъл започвам от втората. Спирам на предпоследния масив.
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i][0] === input[i + 1][0]) {
            count++;
        }
    }
    return count;
}

// console.log(equalNeighbors([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]));

// console.log(equalNeighbors([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']
// ]));

console.log(equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
]));