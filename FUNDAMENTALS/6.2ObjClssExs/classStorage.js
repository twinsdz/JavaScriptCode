    /* class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
        }

        get totalCost() {
            // reduce(function (accumulator, currentValue) {return accumulator + currentValue.x}, initialValue)
            // If initialValue is not provided, reduce() will execute the callback function starting at index 1, skipping the first index. If initialValue is provided, it will start at index 0. If the array is empty and NO initialValue is provided, TypeError will be thrown.

            return this.storage.reduce((acc, el) => {
                return acc + el.price * el.quantity;
            }, 0);
        }

        addProduct(product) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            return;
        }

        getProducts() {
            let output = [];
            this.storage.forEach(product => {
                output.push(JSON.stringify(product));
            });
            return output.join('\n');
        }
    }

    // -------------------------------------------------------------------------------------------

    let productOne = {
        name: 'Cucamber',
        price: 1.50,
        quantity: 15
    };
    let productTwo = {
        name: 'Tomato',
        price: 0.90,
        quantity: 25
    };
    let productThree = {
        name: 'Bread',
        price: 1.10,
        quantity: 8
    };

    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    storage.getProducts();
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);
 */

    class Storage {
        constructor(capacity) {
            this.capacity = capacity,
                this.storage = [],
                this.totalCost = 0;
        }

        addProduct(obj) {
            this.storage.push(obj);
            this.capacity -= obj.quantity;
            this.totalCost += obj.quantity * obj.price;
        }

        getProducts() {
            let toJson = this.storage.map(i => JSON.stringify(i));
            return toJson.join('\n');
        }
    }
    // ---------------------------------------------------------------------
    let productOne = {
        name: 'Cucamber',
        price: 1.50,
        quantity: 15
    };
    let productTwo = {
        name: 'Tomato',
        price: 0.90,
        quantity: 25
    };
    let productThree = {
        name: 'Bread',
        price: 1.10,
        quantity: 8
    };

    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    storage.getProducts();
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);