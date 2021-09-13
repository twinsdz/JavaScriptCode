function manOWar(input) {
    let pirateShip = input[0].split('>').map(Number);
    let warship = input[1].split('>').map(Number);
    let maxhealth = Number(input[2]);
    let index = 3;
    let command = input[index++];

    while (command !== 'Retire') {
        let tokens = command.split(' ');
        command = tokens[0];

        switch (command) {
            case 'Fire':
                let idx = Number(tokens[1]);
                let damage = Number(tokens[2]);
                if (isValidIndex(warship, idx)) {
                    warship[idx] -= damage;

                    if (warship[idx] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
                break;
            case 'Defend':
                let startIdx = Number(tokens[1]);
                let endIdx = Number(tokens[2]);
                let piratesDamage = Number(tokens[3]);

                if (isValidIndex(pirateShip, startIdx) && isValidIndex(pirateShip, endIdx)) {
                    // вкарване на масив от елементи в масив със splice()
                    let numbers = pirateShip.slice(startIdx, endIdx + 1).map(el => el -= piratesDamage);
                    pirateShip.splice(startIdx, numbers.length, ...numbers);
                    let filteredNum = numbers.filter(x => x <= 0);

                    if (filteredNum.length > 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
                break;
            case 'Repair':
                let repairIdx = Number(tokens[1]);
                let health = Number(tokens[2]);

                if (isValidIndex(pirateShip, repairIdx)) {
                    pirateShip[repairIdx] += health;
                    
                    if (pirateShip[repairIdx] > maxhealth) {
                        pirateShip[repairIdx] = maxhealth;
                    }
                }
                break;
            case 'Status':
                let percentNum = maxhealth * 0.2;
                let count = pirateShip.filter(x => x < percentNum);
                console.log(`${count.length} sections need repair.`);
                break;
        }
        command = input[index++];
    }

    console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b, 0)}`);
    console.log(`Warship status: ${warship.reduce((accumulator, current) => accumulator + current, 0)}`);

    // проверка за валидност на индекс
    function isValidIndex(arr, index) {
        let isValid = index < arr.length && index >= 0 ? true : false;
        return isValid;
    }
}

manOWar([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
]);

manOWar([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
]);

/* function manOWar(input) {
    let pirateShip = input[0].split('>').map(Number);
    let warship = input[1].split('>').map(Number);
    let maxhealth = Number(input[2]);
    let index = 3;
    let command = input[index++];

    while (command !== 'Retire') {
        let tokens = command.split(' ');
        command = tokens[0];

        switch (command) {
            case 'Fire':
                let idx = Number(tokens[1]);
                let damage = Number(tokens[2]);
                if (isValidIndex(warship, idx)) {
                    warship[idx] -= damage;

                    if (warship[idx] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
                break;
            case 'Defend':
                let startIdx = Number(tokens[1]);
                let endIdx = Number(tokens[2]);
                let piratesDamage = Number(tokens[3]);

                if (isValidIndex(pirateShip, startIdx) && isValidIndex(pirateShip, endIdx)) {
                    let numbers = pirateShip.slice(startIdx, endIdx + 1);

                    for (let el of numbers) {

                        let i = pirateShip.indexOf(el);
                        pirateShip[i] -= piratesDamage;

                        if (pirateShip[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            return;
                        }
                    }
                }
                break;
            case 'Repair':
                let repairIdx = Number(tokens[1]);
                let health = Number(tokens[2]);

                if (isValidIndex(pirateShip, repairIdx)) {
                    pirateShip[repairIdx] += health;
                    if (pirateShip[repairIdx] > maxhealth) {
                        pirateShip[repairIdx] = maxhealth;
                    }
                }
                break;
            case 'Status':
                let percentNum = maxhealth * 0.2;
                let count = pirateShip.filter(x => x < percentNum);
                console.log(`${count.length} sections need repair.`);
                break;
        }
        command = input[index++];
    }

    console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b, 0)}`);
    console.log(`Warship status: ${warship.reduce((accumulator, current) => accumulator + current, 0)}`);

    function isValidIndex(arr, index) {
        let isValid = index < arr.length && index >= 0 ? true : false;
        return isValid;
    }
}

manOWar([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
]);

manOWar([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
]); */


/* function manOWar(input) {
    let pirateShip = input[0].split('>').map(Number);
    let warship = input[1].split('>').map(Number);
    let maxhealth = Number(input[2]);
    let index = 3;
    let command = input[index++];

    while (command !== 'Retire') {
        let tokens = command.split(' ');
        command = tokens[0];

        switch (command) {
            case 'Fire':
                let idx = Number(tokens[1]);
                let damage = Number(tokens[2]);
                if (isValidIndex(warship, idx)) {
                    warship[idx] -= damage;

                    if (warship[idx] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
                break;
            case 'Defend':
                let startIdx = Number(tokens[1]);
                let endIdx = Number(tokens[2]);
                let piratesDamage = Number(tokens[3]);
                if (isValidIndex(pirateShip, startIdx) && isValidIndex(pirateShip, endIdx)) {
                    for (let i = startIdx; i <= endIdx; i++) {
                        pirateShip[i] -= piratesDamage;

                        if (pirateShip[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            return;
                        }
                    }
                }
                break;
            case 'Repair':
                let repairIdx = Number(tokens[1]);
                let health = Number(tokens[2]);
                if (isValidIndex(pirateShip, repairIdx)) {
                    pirateShip[repairIdx] += health;
                    if (pirateShip[repairIdx] > maxhealth) {
                        pirateShip[repairIdx] = maxhealth;
                    }
                }
                break;
            case 'Status':
                let percentNum = maxhealth * 0.2;
                let count = statusCheck(pirateShip, percentNum);
                console.log(`${count} sections need repair.`);
                break;
        }
        command = input[index++];
    }

    console.log(`Pirate ship status: ${sum(pirateShip)}`);
    console.log(`Warship status: ${sum(warship)}`);

    function isValidIndex(arr, index) {
        let isValid = index < arr.length && index >= 0 ? true : false;
    }

    function statusCheck(arr, num) {
        let count = 0;
        for (let n of arr) {
            if (n < num) {
                count++;
            }
        }
        return count;
    }

    function sum(arr) {
        let sum = 0;
        for (let n of arr) {
            sum += n;
        }
        return sum;
    }
}

manOWar([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
]);

manOWar([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
]); */