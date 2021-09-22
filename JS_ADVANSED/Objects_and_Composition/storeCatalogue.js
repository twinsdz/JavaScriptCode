// печатане на продукти по азбучен ред и по групи
function solve(input) {
    let catalogue = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');
        let firstChar = product[0];

        // вложен обект
        if (!catalogue[firstChar]) {
            catalogue[firstChar] = {};
        }
        catalogue[firstChar][product] = Number(price);
    }

    let initialSort = Object.keys(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    for (let key of initialSort) {
        let products = Object.entries(catalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);
        products.forEach(el => {
            console.log(`  ${el[0]}: ${el[1]}`);
        });
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);


/* function solve(input) {
    let catalogue = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');

        if (!catalogue.hasOwnProperty(product)) {
            catalogue[product] = Number(price);
        }
        catalogue[product] = Number(price);
    }

    let sorted = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));


    let str = print(sorted);


    // принтиране по азбучен ред
    function print(arr) {
        let lastName = '';
        let result = '';

        for (let line of arr) {
            let [name, price] = line;
            let firstChar = name.charAt(0);

            if (firstChar !== lastName[0]) {
                result += `${firstChar}\n`;
            }

            result += `  ${name}: ${price}\n`;
            lastName = name;
        }
        return result;
    }
    return str;
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]));
 */