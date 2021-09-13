function solve(input) {
    let numRotation = +input.pop();

    for (let i = 0; i < numRotation; i++) {
        let lastEl = input[input.length - 1];

        for (let j = input.length - 2; j >= 0; j--) {
            input[j + 1] = input[j];
        }
        input[0] = lastEl;
    }
    console.log(input.join(' '));
}

// solve(['1', '2', '3', '4', '2']);

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
