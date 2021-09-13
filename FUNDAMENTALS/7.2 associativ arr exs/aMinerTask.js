/* function minerTask(array) {
    let mine = {};
    for (let i = 0; i < array.length; i += 2) {
        let resource = array[i];
        let quantity = Number(array[i + 1])

        if (!Object.keys(mine).includes(resource)) {
            mine[resource] = quantity;
        } else {
            mine[resource] += quantity;
        }
    }

    let mineAsArray = Object.entries(mine);

    for (let el of mineAsArray) {
        let resource = el[0];
        let quantity = el[1];
        console.log(`${resource} -> ${quantity}`);
    }
} */

/* function minerTask(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i += 2) {
        !result.hasOwnProperty(arr[i]) ? result[arr[i]] = Number(arr[i + 1]) : result[arr[i]] += Number(arr[i + 1]);
    }
    Object.entries(result).map(x => console.log(`${x[0]} -> ${x[1]}`));
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]); */

function solve(input) {
    let quantity = 0;
    let resource = 0;
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            resource = input[i];
            if (!map.has(input[i])) {
                map.set(resource, 0);
            }
        } else {
            quantity = Number(input[i]);
            let prevQuantity = map.get(resource);
            prevQuantity += quantity;
            map.set(resource, prevQuantity);
        }
    }
    //Печатане итериране на Map
    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);