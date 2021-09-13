function theLift(input) {
    let people = Number(input[0]);
    let lift = input[1].split(' ').map(Number);
    let i = 0;


    while (people > 0 && i < lift.length) {
        let freePlaces = 4 - lift[i];

        if (people >= freePlaces) {
            lift[i] += freePlaces;
            people -= freePlaces;
        } else {
            lift[i] += people;
            people -= freePlaces;
        }
        i++;
    }

    let filtered = lift.filter(x => x < 4);
    if (people <= 0 && filtered.length > 0) {
        console.log(`The lift has empty spots!\n${lift.join(' ')}`);
    } else if (people > 0 && filtered.length <= 0) {
        console.log(`There isn't enough space! ${people} people in a queue!\n${lift.join(' ')}`);
    } else {
        console.log(`${lift.join(' ')}`);
    }
}

// theLift([
//     "15",
//     "0 0 0 0 0"
// ]);

theLift([
    "20",
    "0 2 0"
]);


/* function solve(input) {
    let peopleWaiting = input.shift();
    let currLift = input.shift().split(' ');
    let wagonMaxCapacity = 4;
    let currWagCapacity = 0;

    // iterate over the wagons
    for (let i = 0; i < currLift.length; i++) {

        if (currLift[i] != 4) {
            if (currLift[i] > 0 && currLift[i] < 4) {
                if (peopleWaiting > 0) {
                    let toMax = wagonMaxCapacity - currLift[i];
                    currLift[i] = wagonMaxCapacity;
                    peopleWaiting -= toMax;
                }
            } else if (peopleWaiting >= 4) {
                currLift[i] = wagonMaxCapacity;
                peopleWaiting -= wagonMaxCapacity;

            } else {
                currLift[i] = peopleWaiting;
                peopleWaiting -= peopleWaiting;
            }
        }
    }
    let hasFreeSpace = currLift.filter(x => x < 4);
    if (peopleWaiting <= 0) {
        if (hasFreeSpace.length > 0) {
            console.log(`The lift has empty spots!`);
            console.log(currLift.join(' '));
        } else {
            console.log(currLift.join(' '));
        }
    } else if (hasFreeSpace.length <= 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(currLift.join(' '));
    }
}

solve([
    "15",
    "0 0 0 0 0"
]);

solve([
    "20",
    "0 2 0"
]); */