function solve(input) {
    let list = input.shift().split('|');
    let inputLine = input.shift();

    while (inputLine !== 'Shop!') {
        let [command, product, secondProduct] = inputLine.split('%');

        if (command === 'Important') {
            if (list.includes(product)) {
                let index = list.indexOf(product);
                product = list.splice(index, 1);
                list.unshift(...product);
            } else {
                list.unshift(product);
            }
        } else if (command === 'Add') {
            if (!list.includes(product)) {
                list.push(product);
            } else {
                console.log('The product is already in the list.');
            }
        } else if (command === 'Swap') {
            if (list.includes(product) && list.includes(secondProduct)) {
                let indexOfProduct = list.indexOf(product);
                let secondIndex = list.indexOf(secondProduct);
                [list[indexOfProduct], list[secondIndex]] = [list[secondIndex], list[indexOfProduct]];
                // swapElements(list, indexOfProduct, secondIndex);
            } else {
                let missingProduct = list.includes(product) ? secondProduct : product;
                console.log(`Product ${missingProduct} missing!`);
            }
        } else if (command === 'Remove') {
            if (list.includes(product)) {
                let index = list.indexOf(product);
                list.splice(index, 1);
            } else {
                console.log(`Product ${product} isn't in the list.`);
            }
        } else if (command === 'Reversed') {
            list.reverse();
        }

        inputLine = input.shift();
    }

    for (let i = 0; i < list.length; i++) {
        let num = i + 1;
        let el = list[i];
        console.log(`${num}. ${el}`);
    }


    // function swapElements(arr, i, j) {
    //     let firstEl = arr[i];
    //     arr[i] = arr[j];
    //     arr[j] = firstEl;
    // }

}

solve(["eggs|milk|bread|fish",
    "Important%bread",
    "Swap%eggs%tomato",
    "Shop!"
]);

// solve(["apple|cheese|salt|bananas",
//     "Remove%cheese",
//     "Swap%salt%bananas",
//     "Shop!"
// ]);