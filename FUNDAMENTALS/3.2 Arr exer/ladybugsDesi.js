function solve(input) {
    let arrLength = +input[0];
    let initialIndexes = input[1].split(' ').map(Number);
    let arr = [];

    for (let i = 0; i < arrLength; i++) {
        if (initialIndexes.includes(i)) {
            arr[i] = 1;
        } else {
            arr[i] = 0;
        }
    }
    // take the direction and delete the el of the arr[i]
    for (let i = 2; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let index = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        let indexToChange = 0;

        if (direction === 'right') {
            indexToChange = index + flyLength;
        } else {
            indexToChange = index - flyLength;
        }

        if (arr[index] === 0 || index >= arr.length) {
            continue;
        }

        arr[index] = 0;

        // flying array
        for (let j = indexToChange; j < arr.length; j++) {
            if (arr[indexToChange] === 0) {
                arr[indexToChange] = 1;
                break;
            } else {
                if (direction === 'right') {
                    indexToChange += flyLength;
                } else {
                    indexToChange -= flyLength;
                }
            }

            // fly away
            if (!isValidIndex(arr, indexToChange)) {
                break;
            }
        }
    }
    console.log(arr.join(' '));

    function isValidIndex(arr, index) {
        let isValid = index < arr.length && index >= 0 ?
            true :
            false;
    }
}

solve([3, '0 1', '0 right 1', '2 right 1']);

solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);

solve([5, '3', '3 left 2', '1 left -2']);


/* function solve(input) {
    let arrLength = +input[0];
    let initialIndexes = input[1].split(' ').map(Number);
    let arr = [];

    for (let i = 0; i < arrLength; i++) {
        if (initialIndexes.includes(i)) {
            arr[i] = 1;
        } else {
            arr[i] = 0;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let index = Number (tokens[0]);
        let command = tokens[1];
        let flyLength = Number(tokens[2]);
        action = command === 'right' ? '+' : '-';

        let indexToChange = 0;
        switch (action) {
            case '-':
                indexToChange = index - flyLength;
                break;
            default:
                indexToChange = index + flyLength;
                break;
        }

        if (arr[index] === 0 || index >= arr.length) {
            continue;
        }
        arr[index] = 0;

        for (let j = indexToChange; j < arr.length; j++) {
            if (arr[indexToChange] === 0) {
                arr[indexToChange] = 1;
                break;
            } else {
                switch (action) {
                    case '-':
                        indexToChange -= flyLength;
                        break;
                    default:
                        indexToChange += flyLength;
                        break;
                }

                if (indexToChange >= arr.length) {
                    break;
                }
            }
        }
    }
    console.log(arr.join(' '));
}

solve([3, '0 1', '0 right 1', '2 right 1']);

solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);

solve([5, '3', '3 left 2', '1 left -2']);  */