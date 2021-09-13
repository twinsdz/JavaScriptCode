/* function piccolo(input) {
    let parking = {};

    for (let car of input) {
        let [direction, carNum] = car.split(', ');

        if (direction === 'IN') {
            parking[carNum] = 1;
        } else {
            delete parking[carNum];
        }
    }
    let result = Object.keys(parking)
        .sort((a, b) => a.localeCompare(b))
        .join('\n');

    return result ? result : 'Parking Lot is Empty';
}

 console.log(piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])); 

console.log(piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])); */

function piccolo(input) {
    let parking = [];

    for (let car of input) {
        let [direction, carNum] = car.split(', ');

        if (direction === 'IN') {
            if (!parking.includes(carNum)) {
                parking.push(carNum);
            }
        } else {
            if (parking.includes(carNum)) {
                parking.splice(parking.indexOf(carNum), 1);
            }
        }
    }
    let sorted = parking.sort((a, b) => a.localeCompare(b));

    if (sorted.length > 0) {
        console.log(sorted.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);