function solve(input) {
    let n = Number(input.shift());
    let plants = {};
    let arrOfPlants = input.splice(0, n);

    // обект с вложен обект и масив
    for (let el of arrOfPlants) {
        let [plantName, rarityNum] = el.split('<->');
        rarityNum = Number(rarityNum);

        // ако го няма създаваме (празен)
        if (!plants.hasOwnProperty(plantName)) {
            plants[plantName] = {};
        }

        // при всички случаи пълня
        plants[plantName] = {
            rarity: rarityNum,
            rating: []
        };
    }
    let line = input.shift();

    while (line !== 'Exhibition') {
        let [command, data] = line.split(': ');

        if (command === 'Rate') {
            let [name, ratingNum] = data.split(' - ');
            ratingNum = Number(ratingNum);

            if (plants.hasOwnProperty(name)) {
                plants[name].rating.push(ratingNum);
            } else {
                console.log('error');
            }

        } else if (command === 'Update') {
            let [name, newRarity] = data.split(' - ');
            newRarity = Number(newRarity);

            if (plants.hasOwnProperty(name)) {
                plants[name].rarity = newRarity;
            } else {
                console.log('error');
            }

        } else if (command === 'Reset') {
            let [name] = data.split(' - ');

            if (plants.hasOwnProperty(name)) {
                // триене на всичко в масива
                plants[name].rating = []; // трябва да си е празен масив
            } else {
                console.log('error');
            }
        }
        line = input.shift();
    }

    // изчисляване на средната сума от масивите rating и пълнене в обекта
    let arr = Object.entries(plants);

    for (let el of arr) {
        let average = 0;
        let name = el[0];
        let ratingArr = el[1].rating;

        // ако масива не е празен изчислявам, ако е празен направо пиша нула
        if (ratingArr.length > 0) {
            average = ratingArr.reduce((a, b) => a + b, 0) / ratingArr.length;
            plants[name].rating = average;
        } else {
            plants[name].rating = 0;
        }
    }


    // сортиране по два критерия                      obeject[name].key (взимам името от нулевия индекс на масива sorted[а[0]])
    let sorted = Object.entries(plants).sort((a, b) => plants[b[0]].rarity - plants[a[0]].rarity || plants[b[0]].rating - plants[a[0]].rating);

    // print
    console.log('Plants for the exhibition:');

    // console.log(sorted);
    // [
    //     [ 'Woodii', { rarity: 5, rating: 7.5 } ],
    //     [ 'Arnoldii', { rarity: 4, rating: 0 } ],
    //     [ 'Welwitschia', { rarity: 2, rating: 7 } ]
    //   ]

    for (let el of sorted) {
        let {
            rarity,
            rating
        } = el[1];
        console.log(`- ${el[0]}; Rarity: ${rarity}; Rating: ${rating.toFixed(2)}`);
    }
}

solve((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]));

/* function solve(input) {
    let n = Number(input.shift());
    let plants = {};
    let arrOfPlants = input.splice(0, n);


    for (let el of arrOfPlants) {
        let [plantName, rarityNum] = el.split('<->');
        rarityNum = Number(rarityNum);

        if (!plants.hasOwnProperty(plantName)) {
            plants[plantName] = {};
        }

        plants[plantName] = {
            rarity: rarityNum,
            rating: []
        };
    }

    let line = input.shift();

    while (line !== 'Exhibition') {
        let [command, data] = line.split(': ');

        if (command === 'Rate') {
            let [name, ratingNum] = data.split(' - ');
            ratingNum = Number(ratingNum);

            if (plants.hasOwnProperty(name)) {
                plants[name].rating.push(ratingNum);
            } else {
                console.log('error');
            }

        } else if (command === 'Update') {
            let [name, newRarity] = data.split(' - ');
            newRarity = Number(newRarity);

            if (plants.hasOwnProperty(name)) {
                plants[name].rarity = newRarity;
            } else {
                console.log('error');
            }

        } else if (command === 'Reset') {
            let [name] = data.split(' - ');
            if (plants.hasOwnProperty(name)) {
                plants[name].rating = [];
            } else {
                console.log('error');
            }
        }
        line = input.shift();
    }
    
    //сортиране с извършване на изчисления за сравнението. сортиране по средно аретметично число от масив.
    // сортиране по два критерия. В масива са само ключовете от обекта сортирани и накрая по тях печатаме.
    let sorted = Object.keys(plants).sort((a, b) => plants[b].rarity - plants[a].rarity ||
        average(plants[b].rating) - average(plants[a].rating));
        // console.log(plants);
        // console.log(sorted);

    console.log(`Plants for the exhibition:`);
    sorted.forEach((el) => console.log(`- ${el}; Rarity: ${plants[el].rarity}; Rating: ${average(plants[el].rating).toFixed(2)}`));

    // ако масива не е празен изчислявай средно аретметично average
    function average(arr) {
        if (!arr.length) return 0;
        return arr.reduce((a, b) => a + b, 0) / arr.length;

    }
}

solve((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
])); */