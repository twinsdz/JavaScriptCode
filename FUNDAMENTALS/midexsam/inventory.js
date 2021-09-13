function inventory(arr) {
    let index = 0;
    let collection = arr.shift().split(', ');
    let line = arr[index++];

    while (line !== "Craft!") {
        let [command, item] = line.split(' - ');

        if (command === 'Collect' && !(collection.includes(item))) {
            collection.push(item);
        } else if (command === 'Drop' && collection.includes(item)) {
            let index = collection.indexOf(item);
            collection.splice(index, 1);
        } else if (command === 'Combine Items') {
            let items = item.split(':');
            let index = collection.indexOf(items[0]);
            if (collection.includes(items[0])) {
                collection.splice(index + 1, 0, items[1]); // добавяне на нов елемен (items[1]) след дадения (index + 1) 
            }
        } else if (command === 'Renew' && collection.includes(item)) {
            let index = collection.indexOf(command[1]);
            let str = collection.splice(index, 1);
            collection.push(str);
        }

        line = arr[index++];
    }
    return collection.join(', ');
}

console.log(inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']));

console.log(inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]));

/* function solve(input) {
    let list = input.shift().split(', ');

    for (let token of input) {
        let tokens = token.split(" - ");

        if (tokens == 'Craft!') {
            console.log(list.join(', '));
            break;
        }
        if (tokens[0] == 'Collect') {
            if (list.includes(tokens[1]) == false) {
                list.push(tokens[1]);
            }
        }

        if (tokens[0] == 'Drop') {
            if (list.includes(tokens[1]) == true) {
                let index = list.indexOf(tokens[1]);
                list.splice(index, 1);
            }
        }
        if (tokens[0] == "Combine Items") {
            let newItem = tokens[1].split(':');
            let index = list.indexOf(newItem[0]);
            if (list.includes(newItem[0]) == true) {
                list.splice(index + 1, 0, newItem[1]); // добавям след стария елемент новия
            }
        }
        if (tokens[0] == 'Renew') {
            if (list.includes(tokens[1]) == true) {
                let index = list.indexOf(tokens[1]);
                list.splice(index, 1);
                list.push(tokens[1]);
            }
        }
    }
}

// solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]); */