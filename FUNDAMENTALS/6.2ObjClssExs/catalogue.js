function catalogue(arr) {
    let obj = {};

    for (let line of arr) {
        let [productName, price] = line.split(' : ');
        obj[productName] = price;
    }

    let sortedItem = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));

    let string = print(sortedItem);

    function print(arr) {
        let lastName = '';
        let result = '';

        for (let line of arr) {
            let name = line[0];
            let firstChar = name.charAt(0);

            if (firstChar !== lastName[0]) {
                result += `${firstChar}\n`;
            }

            result += `  ${name}: ${line[1]}\n`;
            lastName = name;
        }
        return result;
    }
    return string;
}


console.log(catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]));


/* function orderedCatalogue(array) {
    let catalogue = [];
    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(' : ');
        let product = {
            name: elements[0],
            price: parseFloat(elements[1])
        };
        catalogue.push(product);
    }
    // catalogue.sort((a,b) => a.name > b.name ? 1 : -1);
    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';
    for (const product of catalogue) {
        if (product.name.charAt(0).toUpperCase() === currentLetter) {
            console.log(`  ${product.name}: ${product.price}`);
        } else {
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`);

        }
    }
}

orderedCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]); */

/* function catalogue(arr) {
    let obj = {};

    for (let line of arr) {
        let [productName, price] = line.split(' : ');
        obj[productName] = price;
    }

    let sortedItem = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));

    let result = '';
    let currentName = '';
    for (let line of sortedItem) {
        let name = line[0];
        let price = line[1];
        let firstChar = name.charAt(0);

        if (firstChar !== currentName[0]) {
            result += `${firstChar}\n`;
        }
        currentName = name;
        result += `  ${name}: ${price}\n`;
    }
    return result;
}

console.log(catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])); */

/* function solve(arr) {
    arr.sort();
 
    let lastLetter;
    while(arr.length!=0){
        if(arr[0][0]!=lastLetter){
            lastLetter = arr[0][0];
            console.log(lastLetter);
        }
        let [product, price]= arr.shift().split(' : ');
        console.log(`  ${product}: ${price}`);
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]); */


/* function solve(input) {
    const catalog = {};
    
    for (let line of input) {
        const arr = line.split(' : ');
        const [product, price] = line.split(' : ');
        const letter = product[0];

        if (catalog.hasOwnProperty(letter) === false) {
            catalog[letter] = {};
        }

        catalog[letter][product] = price;
    }

    const sortedKeys = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    for (let key of sortedKeys) {
        console.log(key);
        const sortedProducts = Object.keys(catalog[key])
            .sort((a, b) => a.localeCompare(b));

        for (let keyP of sortedProducts) {
            console.log(`  ${keyP}: ${catalog[key][keyP]}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]); */