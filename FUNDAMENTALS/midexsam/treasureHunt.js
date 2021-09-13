function treasureHunt(input) {
    let treasure = input.shift().split("|");

    for (let line of input) {
        let lineInfo = line.split(" ");
        let command = lineInfo.shift();

        if (command === "Loot") {
            loot(lineInfo);
        } else if (command === "Drop") {
            drop(lineInfo);
        } else if (command === "Steal") {
            steal(lineInfo);
        } else {
            print(treasure);
            break;
        }
    }

    function loot(loot) {
        for (const item of loot) {
            if (!treasure.includes(item)) {
                treasure.unshift(item);
            }
        }
    }

    function drop(index) {
        if (treasure[index] !== undefined) {
            let item = treasure[index];
            treasure.splice(index, 1);
            treasure.push(item);
        }
    }

    function steal(number) {
        // математическа проверка за валидност на индекса и едновременно намиране на стартовия индекс
        let startIndex = Math.max(0, treasure.length - number);
        let stolenItems = treasure.splice(startIndex, treasure.length);
        console.log(stolenItems.join(", "));
    }

    function print(treasure) {
        let count = 0;

        for (const word of treasure) {
            let wordLength = word.length;
            count += wordLength;
        }

        let numberOfElements = treasure.length;
        if (numberOfElements !== 0) {
            let average = count / numberOfElements;
            console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
        } else {
            console.log(`Failed treasure hunt.`);
        }
    }
}

treasureHunt([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]);


/* function solve(input) {
    let treasureChest = input[0].split('|');
    let index = 1;
    let line = input[index++];

    while (line !== 'Yohoho!') {
        let tokens = line.split(' ');

        if (tokens[0] === 'Loot') {
            for (let i = 1; i < tokens.length; i++) {
                let element = tokens[i];

                if (!(treasureChest.includes(element))) {
                    rotation(treasureChest);
                    treasureChest[0] = tokens[i];
                }
            }
        } else if (tokens[0] === 'Drop') {
            let index = Number(tokens[1]);
            if (index >= 0 && index < treasureChest.length) {
                let el = treasureChest[index];
                treasureChest.splice(index, 1)
                treasureChest.push(el);
            }
        } else if (tokens[0] === 'Steal') {
            let count = Number(tokens[1]);
            let stealItems = treasureChest.splice(-count);  // реже от зад напред
            console.log(`${stealItems.join(', ')}`);
        }

        line = input[index++];
    }

    let arrOfLengths = treasureChest.map(el => Number(el.length))
    let total = arrOfLengths.reduce((acc, next) => acc + next, 0);
    let average = total / treasureChest.length;

    if (treasureChest.length > 0) {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }

    function rotation(arr) {
        arr.length++;
        for (let i = arr.length - 2; i >= 0; i--) {
            let el = arr[i];
            arr[i + 1] = el;
        }
        return arr;
    }
}

solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]);

solve([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
]); */

/* function treasure(input) {

    let initialLoot = input.shift().split(`|`);
    let line = input.shift();
    let sliced = [];

    while (line != `Yohoho!`) {
        // деструктуриране на масив
        let [command, ...items] = line.split(` `);

        for (const el of items) {
            let item = el;
            switch (command) {
                case `Loot`:
                    loot(initialLoot, item);
                    break;
                case `Drop`:
                    drop(initialLoot, item);
                    break;
                case `Steal`:
                    steal(initialLoot, item);
                    break;
            }
        }
        line = input.shift();
    }

    function loot(initialLoot, item) {
        if (initialLoot.includes(item) == false) {
            initialLoot.unshift(item);
        }
    }

    function drop(initialLoot, item) {
        if (item < 0) {
            false;
        } else {
            let pushElement = initialLoot[item];
            initialLoot.splice(item, 1);
            initialLoot.push(pushElement);
        }
    }

    function steal(initialLoot, item) {
        sliced = initialLoot.slice(0, initialLoot.length - item);
        initialLoot.splice(0, initialLoot.length - item);
    }

    let newArray = sliced.join(``).split(``);
    let count = newArray.length;
    let elementsOfArr = sliced.length;
    let averageGain = count / elementsOfArr;


    if (sliced.length <= 0) {
        console.log(initialLoot.join(`, `));
        console.log(`Failed treasure hunt.`);
    } else {
        console.log(initialLoot.join(`, `));
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

treasure([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]);

// treasure([
//     'Diamonds|Silver|Shotgun|Gold',
//     'Loot Silver Medals Coal',
//     'Drop -1',
//     'Drop 1',
//     'Steal 6',
//     'Yohoho!'
// ]); */

/* function searchingForTreasure(input) {
    let initialTreasure = input.shift().split('|');
    let score = 0;
    let counter = 0;
    let finalScore = 0;

    for (let i = 0; i < input.length - 1; i++) {
        let command = input[i].split(' ');
        if (command[0] === 'Loot') {
            for (let j = 1; j < command.length; j++) {
                if (!initialTreasure.includes(command[j])) {
                    initialTreasure.unshift(command[j]);
                }
            }
        } else if (command[0] === 'Drop') {
            let idx = Number(command[1]);
            if (idx < 0 || idx > initialTreasure.length) {
                continue;
            } else {
                let sliceditem = initialTreasure.splice(idx, 1);
                initialTreasure.push(...sliceditem); // добавяне на масив от елементи
            }

        } else if (command[0] === 'Steal') {
            // let count = Number(command[1]);
            // let stealItems = initialTreasure.splice(-count);  // рязане на масив от зад напред
            // console.log(`${stealItems.join(', ')}`);
            
            let removedItems = [];
            let count = Number(command[1]);
            cut(initialTreasure, count, removedItems);
            console.log(removedItems.join(', '));
        }
    }

    for (let i = 0; i < initialTreasure.length; i++) {
        score += initialTreasure[i].length;
        counter++;
    }

    finalScore = score / counter;


    if (initialTreasure.length > 0) {
        console.log(`Average treasure gain: ${finalScore.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }

    function cut(arr, count, newArray) {
        if (count > arr.length) {
            count = arr.length;
        }

        for (let j = 0; j < count; j++) {
            let el = arr.pop();
            newArray.push(el);
        }
        return newArray.reverse();
    }
}

searchingForTreasure([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]); */

