function equalArr(input1, input2) {
    let isEqual = true;
    let sum = 0;

    // превръщане в числа
    for (let i = 0; i < input1.length; i++) {
        input1[i] = Number(input1[i]);
    }

    for (let i = 0; i < input2.length; i++) {
        input2[i] = Number(input2[i]);
    }

    for (let i = 0; i < input1.length; i++) {
        if (input1[i] !== input2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        } else {
            sum += input1[i];
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArr(['10', '20', '30'], ['10', '20', '30']);
// equalArr(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);