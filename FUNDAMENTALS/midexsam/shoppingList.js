/* function shoppingList(arr) {
    let index = 0;
    let list = arr.shift().split('!');
    let command = arr[index++];

    while (command !== 'Go Shopping!') {
        let tokens = command.split(' ');
        let item = tokens[1];

        if (tokens[0] === 'Urgent' && !(list.includes(item))) {
            list.unshift(item);
        } else if (tokens[0] === 'Unnecessary' && list.includes(item)) {
            let index = list.indexOf(item);
            list.splice(index, 1);
        } else if (tokens[0] === 'Correct' && list.includes(item)) {
            let index = list.indexOf(item);
            let itemToAdd = tokens[2];
            list.splice(index, 1, itemToAdd);
        } else if(tokens[0] === 'Rearrange' && list.includes(item)){
            let index = list.indexOf(item);
            item = list.splice(index, 1)[0];
            list.push(item);
        }
        command = arr[index++];
    }
    console.log(list.join(', '));
}

// shoppingList([
//     'Tomatoes!Potatoes!Bread',
//     'Unnecessary Milk',
//     'Urgent Tomatoes',
//     'Go Shopping!'
// ]);

// shoppingList([
//     'Milk!Pepper!Salt!Water!Banana',
//     'Urgent Salt',
//     'Unnecessary Grapes',
//     'Correct Pepper Onion',
//     'Rearrange Grapes',
//     'Correct Tomatoes Potatoes',
//     'Go Shopping!'
// ]);

shoppingList([
    'Milk!Pepper!Water!Banana',
    'Urgent Salt',
    'Unnecessary Banana',
    'Correct Pepper Onion',
    'Rearrange Salt',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]); */


/* function shoppingList(arr) {
    let list = arr.shift().split('!');

    for (let line of arr) {
        let [command, item, itemNew] = line.split(' ');

        if (command === 'Go') {
            break;
        }

        urgent(command, list, item);
        unnecessary(command, list, item);
        correct(command, list, item, itemNew);
        rearrange(command, list, item);
    }
    console.log(list.join(', '));

    function urgent(command, arr, item) {
        if (command === 'Urgent') {
            if (!arr.includes(item)) {
                arr.unshift(item);
            }
        }
    }

    function unnecessary(command, arr, item) {
        if (command === 'Unnecessary') {
            if (arr.includes(item)) {
                let index = arr.indexOf(item);
                arr.splice(index, 1);
            }
        }
    }

    function correct(command, arr, oldItem, newItem) {
        if (command === 'Correct') {
            if (arr.includes(oldItem)) {
                let index = arr.indexOf(oldItem);
                arr[index] = newItem;
            }
        }
    }

    function rearrange(command, arr, item) {
        if (command === 'Rearrange') {
            if (arr.includes(item)) {
                let index = arr.indexOf(item);
                arr.splice(index, 1);
                arr.push(item);
            }
        }
    }
}

// shoppingList([
//     'Tomatoes!Potatoes!Bread',
//     'Unnecessary Milk',
//     'Urgent Tomatoes',
//     'Go Shopping!'
// ]);

shoppingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);

// shoppingList([
//     'Milk!Pepper!Water!Banana',
//     'Urgent Salt',
//     'Unnecessary Banana',
//     'Correct Pepper Onion',
//     'Rearrange Salt',
//     'Correct Tomatoes Potatoes',
//     'Go Shopping!'
// ]); */

/* function shoppingList(arr) {
    let list = arr.shift().split('!');

    for (let line of arr) {
        let [command, item, itemNew] = line.split(' ');
        
        if (command === 'Go') {
            break;
        } else if (command === 'Urgent') {
            urgent(list, item);
        } else if (command === 'Unnecessary') {
            unnecessary(list, item);
        } else if (command === 'Correct') {
            correct(list, item, itemNew);
        } else {
            rearrange(list, item);
        }
    }
    console.log(list.join(', '));

    function urgent(arr, item) {
        if (!arr.includes(item)) {
            arr.unshift(item);
        }
    }

    function unnecessary(arr, item) {
        if (arr.includes(item)) {
            let index = arr.indexOf(item);
            arr.splice(index, 1);
        }
    }

    function correct(arr, oldItem, newItem) {
        if (arr.includes(oldItem)) {
            let index = arr.indexOf(oldItem);
            arr[index] = newItem;
        }
    }

    function rearrange(arr, item) {
        if (arr.includes(item)) {
            let index = arr.indexOf(item);
            arr.splice(index, 1);
            arr.push(item);
        }
    }
}

// shoppingList([
//     'Tomatoes!Potatoes!Bread',
//     'Unnecessary Milk',
//     'Urgent Tomatoes',
//     'Go Shopping!'
// ]);

shoppingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);

// shoppingList([
//     'Milk!Pepper!Water!Banana',
//     'Urgent Salt',
//     'Unnecessary Banana',
//     'Correct Pepper Onion',
//     'Rearrange Salt',
//     'Correct Tomatoes Potatoes',
//     'Go Shopping!'
// ]); */

function shoppingList(input) {
 
    let products = input.shift().split('!');
    let line = input.shift();

    while (line !== 'Go Shopping!') {
        let [command, product, newProduct] = line.split(' ');
 
        switch (command) {
            case 'Urgent':
                urgent(products, product);
                break;
            case 'Unnecessary':
                unnecessary(products, product);
                break;
            case 'Correct':
                correct(products, product, newProduct);
                break;
            case 'Rearrange':
                rearrange(products, product);
                break;
        }
        line = input.shift();
    }
 
    console.log(products.join(', '));
 
    function urgent(products, product) {
        if (!products.includes(product)) {
            products.unshift(product);
        }
    }
 
    function unnecessary(products, product) {
        if (products.includes(product)) {
            let index = products.indexOf(product);
            products.splice(index, 1);
        }
    }
 
    function correct(products, product, newProduct) {
        if (products.includes(product)) {
            let index = products.indexOf(product);
            products[index] = newProduct;
        }
    }
 
    function rearrange(products, product) {
        if (products.includes(product)) {
            let index = products.indexOf(product);
            products.splice(index, 1);
            products.push(product);
        }
    }
}

shoppingList([
        'Milk!Pepper!Water!Banana',
        'Urgent Salt',
        'Unnecessary Banana',
        'Correct Pepper Onion',
        'Rearrange Salt',
        'Correct Tomatoes Potatoes',
        'Go Shopping!'
    ]);