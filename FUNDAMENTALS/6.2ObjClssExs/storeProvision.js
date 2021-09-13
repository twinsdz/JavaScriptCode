/* function storeProvision(stock, ordered) {
    let shop = {};

    for (let i = 0; i < stock.length; i += 2) {
        const element = stock[i];
        shop[element] = Number(stock[i + 1]);
    }

    for (let i = 0; i < ordered.length; i += 2) {
        const element = ordered[i];
        if (shop.hasOwnProperty(element)) {
            shop[element] += Number(ordered[i + 1]);
        } else {
            shop[element] = Number(stock[i + 1]);
        }
    }
    Object.keys(shop).forEach(key => {
        console.log(`${key} -> ${shop[key]}`);
    });
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']); */

/* function storeProvision(stock, ordered) {
    let shop = {};

    for (let i = 0; i < stock.length; i += 2) {
        const element = stock[i];
        shop[element] = Number(stock[i + 1]);
    }

    for (let i = 0; i < ordered.length; i += 2) {
        const element = ordered[i];
        if (!shop.hasOwnProperty(element)) {
            shop[element] = 0;
        }
        shop[element] += Number(ordered[i + 1]);
    }
    Object.keys(shop).forEach(key => {
        console.log(`${key} -> ${shop[key]}`);
    });
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']); */


function storeProvision(stock, order) {
    class Product {
        constructor(name, quantity) {
            this.name = name,
                this.quantity = quantity;
        }
    }

    let store = [];
    for (let i = 0; i < stock.length; i += 2) {
        let product = new Product(stock[i], Number(stock[i + 1]));
        store.push(product);
    }

    for (let i = 0; i < order.length; i += 2) {
        let productName = order[i];
        let quantityAdd = Number(order[i + 1]);
        // намирам индекса на името и ако индекса не съществува
        if (store.findIndex(x => x.name == productName) == -1) {
            store.push(new Product(productName, quantityAdd));
        } else {
            let index = store.findIndex(x => x.name == productName);
            store[index].quantity += quantityAdd;
        }
    }
    // forEach
    store.forEach(el => console.log(`${el.name} -> ${el.quantity}`));
}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);