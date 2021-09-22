function solve(input) {
    let n = Number(input.shift());
    let myCars = {};

    for (let i = 0; i < n; i++) {
        let [car, mileageKm, fuelQty] = input[i].split('|');
        mileageKm = Number(mileageKm);
        fuelQty = Number(fuelQty);
        myCars[car] = {
            mileage: mileageKm,
            fuel: fuelQty
        };
    }

    let index = n;
    let inputLine = input[index++];

    while (inputLine !== 'Stop') {
        let [command, car, token1, token2] = inputLine.split(' : ');
        token1 = Number(token1);
        token2 = Number(token2);

        if (command === 'Drive') {

            if (myCars[car].fuel >= token2) {
                myCars[car].mileage += token1;
                myCars[car].fuel -= token2;
                console.log(`${car} driven for ${token1} kilometers. ${token2} liters of fuel consumed.`);
            } else {
                console.log("Not enough fuel to make that ride");
            }

            if (myCars[car].mileage >= 100000) {
                delete myCars[car];
                console.log(`Time to sell the ${car}!`);
            }

        } else if (command === 'Refuel') {
            let freeTankSpace = 75 - myCars[car].fuel;

            if (token1 <= freeTankSpace) {
                myCars[car].fuel += token1;
                console.log(`${car} refueled with ${token1} liters`);
            } else {
                myCars[car].fuel += freeTankSpace;
                console.log(`${car} refueled with ${freeTankSpace} liters`);
            }

        } else if (command === 'Revert') {
            myCars[car].mileage -= token1;

            if (myCars[car].mileage >= 10000) {
                console.log(`${car} mileage decreased by ${token1} kilometers`);
            } else {
                myCars[car].mileage = 10000;
            }

        }
        inputLine = input[index++];
    }
    // сортиране по два критерия
    let sorted = Object.entries(myCars);
    sorted.sort((a, b) => b[1].mileage - a[1].mileage || a[0].localeCompare(b[0]));

    for (let [carName, carInfo] of sorted) {
        let {
            mileage,
            fuel
        } = carInfo;
        console.log(`${carName} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

// solve([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ]);

/* function solve(arr) {
    let cars = {};
    let n = Number(arr.shift());
    arr.splice(0, n).map(row => row.split('|')).map(row => {
        cars[row[0]] = {
            mileage: Number(row[1]),
            fuel: Number(row[2])
        }
    });

    // обект с команди
    let commandParsed = {
        'Drive': drive,
        'Refuel': refuel,
        'Revert': revert
    };

    arr.forEach(row => {
        let [command, ...args] = row.split(' : ')
        if (command !== 'Stop') {
            console.log(commandParsed[command](cars, ...args));
        }
    });

    Object.entries(cars).sort((a, b) => b[1].mileage - a[1].mileage || a[0].localeCompare(b[0]))
        .map(row => console.log(`${row[0]} -> Mileage: ${row[1].mileage} kms, Fuel in the tank: ${row[1].fuel} lt.`));

    function drive(cars, car, mileage, fuel) {
        mileage = Number(mileage);
        fuel = Number(fuel);
        let obj = cars[car];
        if (obj.fuel > fuel) {
            obj.fuel -= fuel;
            obj.mileage += mileage;
            if (obj.mileage >= 100000) {
                delete cars[car];
                return `${car} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.\nTime to sell the ${car}!`
            } else {
                return `${car} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`
            }
        } else {
            return `Not enough fuel to make that ride`;
        }
    }

    function refuel(cars, car, fuel) {
        fuel = Number(fuel);
        let obj = cars[car];
        let oldValue = obj.fuel;
        obj.fuel = Math.min(75, obj.fuel + fuel);
        return `${car} refueled with ${obj.fuel-oldValue} liters`;
    }

    function revert(cars, car, mileage) {
        mileage = Number(mileage);
        let obj = cars[car];
        obj.mileage -= mileage;
        if (obj.mileage > 10000) {
            return `${car} mileage decreased by ${mileage} kilometers`;
        }
        obj.mileage = 10000;
    }
}

// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]); */