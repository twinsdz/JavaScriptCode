// function solve(input) {
//     let obj = {};

//     for (const line of input) {
//         let [townName, productName, price] = line.split(' | ');
//         price = Number(price);

//         if (!obj.hasOwnProperty(productName)) {
//             obj[productName] = {};
//         }

//         obj[productName][townName] = price;
//     }

//     for (let product in obj) {
//         let sorted = Object.entries(obj[product]).sort((a, b) => a[1] - b[1]);
//         console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
//     }
// }

function solve(array) {
    let obj = {};

    array.forEach((element) => {
        let [town, productName, price] = element.split(' | ');
        price = Number(price);

        if (!obj[productName]) {
            obj[productName] = {};
        }

        obj[productName][town] = price;

    });

    for (let product in obj) {
        let sorted = Object.entries(obj[product]).sort((a, b) => a[1] - b[1]);
        let price = sorted[0][1];
        let town = sorted[0][0];
        console.log(`${product} -> ${price} (${town})`);
    }
}


solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);