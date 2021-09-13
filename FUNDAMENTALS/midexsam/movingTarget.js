/* function solve(input) {
    let index = 0;
    let targets = input[index++].split(' ').map(Number);
    let command = input[index++];

    while (command !== 'End') {
        let tokens = command.split(' ');
        let currentCommand = tokens[0];
        let shotIndex = Number(tokens[1]);
        let power = Number(tokens[2]);

        if (currentCommand === 'Shoot') {
            shoot(targets, shotIndex, power);

        } else if (currentCommand === 'Add') {
            add(targets, shotIndex, power);

        } else if (currentCommand === 'Strike' && shotIndex >= 0 && shotIndex < targets.length) {
            strike(targets, shotIndex, power);
        }
        command = input[index++];
    }

    console.log(targets.join('|'));

    function shoot(arr, i, power) {

        if (arr[i]) {
            arr[i] -= power;
        }

        if (arr[i] <= 0) {
            arr.splice(i, 1);
        }
        return arr;
    }

    function add(arr, i, power) {
        if (i >= 0 && i < arr.length) {
            arr.splice(i, 0, power);
        } else {
            console.log("Invalid placement!");
        }
        return arr;
    }

    function strike(arr, i, radius) {
        let radiusRange = 1 + (radius * 2);
        let radiusStart = i - radius;
        let radiusEnd = i + radius;

        if (radiusStart >= 0 && radiusEnd < arr.length) {
            targets.splice(radiusStart, radiusRange);
        } else {
            console.log(`Strike missed!`);
        }
        return arr;
    }
}


solve([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
]);

solve(['1 2 3 4 5', 'Strike 0 1', 'End']); */

/* function movingTarget(input) {
    let targets = input.shift().split(" ").map(Number);

    for (let line of input) {

        if (line === "End") {
            break;
        }

        line = line.split(" ");
        let command = line[0];
        let index = Number(line[1]);
        let value = Number(line[2]);

        if (command === "Shoot") {
            if (index <= targets.length - 1) {
                targets[index] -= value;
            }
            if (targets[index] <= 0) {
                targets.splice(index, 1);
            }
        }

        if (command === "Add") {
            if (index > targets.length - 1 || index < 0) {
                console.log("Invalid placement!");
            } else {
                targets.splice(index, 0, value);
            }
        }

        if (command === "Strike") {
            if (index + value <= targets.length - 1 && index - value >= 0) {
                let start = index - value;
                let end = value * 2 + 1;
                targets.splice(start, end);
            } else {
                console.log(`Strike missed!`);
            }
        }
    }
    console.log(targets.join("|"));
}

movingTarget([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
]); */

function movingTarget(array) {
    let targetList = array.shift().split(" ").map(Number);
    let command = array.shift();

    while (command != "End") {
        let tokens = command.split(" ");
        let action = tokens[0];
        let index = Number(tokens[1]);
        let actionValue = Number(tokens[2]);

        switch (action) {
            case "Shoot":
                shoot(targetList, index, actionValue);
                break;
            case "Add":
                add(targetList, index, actionValue);
                break;
            case "Strike":
                strike(targetList, index, actionValue);
                break;
        }

        command = array.shift();
    }

    console.log(`${targetList.join("|")}`);

    //проверка за валидност на индекс
    function isValidIndex(arr, index) {
        let isValid = index < arr.length && index >= 0 ?
            true :
            false;
    }

    function shoot(targetList, index, actionValue) {
        let target = targetList[index];
        if (isValidIndex(targetList, index)) {
            target -= actionValue;
            targetList.splice(index, 1, target);
            if (target <= 0) {
                targetList.splice(index, 1);
            }
        }
    }

    function add(targetList, index, actionValue) {
        if (isValidIndex(targetList, index)) {
            targetList.splice(index, 0, actionValue);
        } else {
            console.log(`Invalid placement!`);
        }
    }

    function strike(targetList, index, actionValue) {
        let start = index - actionValue; // изчисляване на началния индекс
        let end = actionValue * 2 + 1;   // изчисляване на крайния индекс
        if (isValidIndex(targetList, start) && isValidIndex(targetList, end)) {
            targetList.splice(start, end);
        } else {
            console.log(`Strike missed!`);
        }
    }
}

// movingTarget([
//     '52 74 23 44 96 110',
//     'Shoot 5 10',
//     'Shoot 1 80',
//     'Strike 2 1',
//     'Add 22 3',
//     'End'
// ]);

movingTarget(['1 2 3 4 5', 'Strike 0 1', 'End']);