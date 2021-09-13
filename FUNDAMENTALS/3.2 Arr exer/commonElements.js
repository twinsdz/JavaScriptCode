/* function commonElements(input, arr) {

    for (let el of input) {
        if (arr.includes(el)) {
                console.log(`${el}`);
            }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);

// commonElements (['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']); */


function commonElements(input, arr) {

    for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (input[i] === arr[j]) {
                console.log(`${input[i]}`);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);

// commonElements (['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);