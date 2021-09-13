/* function train(input) {
    let wagonArr = input.
    shift().
    split(' ').
    map(Number);
    let maxCapacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let arrNew = input[i].split(" ");
        let command = arrNew[0];
        let firstValue = +arrNew[1];

        if (arrNew.length === 2 && command === "Add") {
            wagonArr.push(firstValue);
        } else {
            let passengers = Number(arrNew[0]);
            for (let j = 0; j < wagonArr.length; j++) {
                if (passengers + wagonArr[j] <= maxCapacity) {
                    wagonArr[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagonArr.join(" "));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']); */

/* function train(input) {
    let wagonArr = input.
    shift().
    split(' ').
    map(Number);
    let maxCapacity = Number(input.shift());

    for (let command of input) {
        if (command.includes("Add")) {
            wagonArr.push(Number (command.split(' ')[1]));
        } else {
            let passengers = Number(command);
            for (let i = 0; i < wagonArr.length; i++) {
                if (passengers + wagonArr[i] <= maxCapacity) {
                    wagonArr[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagonArr.join(" "));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']); */

function train(input) {
    let wagonArr = input.
    shift().
    split(' ').
    map(Number);
    let maxCapacity = Number(input.shift());

    while (input.length > 0) {
        let command = input.shift().split(' ');

        if (command.length == 1) {
            command = Number(command);
            wagonArr = addPassengers(wagonArr, command);
        }

        if (command.length > 1) {
            let numForAdd = Number(command[1]);
            wagonArr.push(numForAdd);
        }
    }

    function addPassengers(arr, numOfPassengers) {
        for (let i = 0; i < arr.length; i++) {
            let currentWagonSize = maxCapacity - arr[i];

            // or numOfPassengers + arr[i] <= maxCapacity  Пасажерите + заетите места <= максималния капацитет
            if (numOfPassengers <= currentWagonSize) {
                arr[i] += numOfPassengers;
                break;
            }
        }
        return arr;
    }
    console.log(wagonArr.join(" "));
}



train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);