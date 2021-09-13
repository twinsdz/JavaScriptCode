function diffOfNum(input) {
    let sumOfOdd = 0;
    let sumOfEven = 0;

    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
        
        if (input[i] % 2 === 0) {
            sumOfEven += input[i];
        } else {
            sumOfOdd += input[i];
        }
    }
    console.log(`${sumOfEven - sumOfOdd}`);
}

diffOfNum([2, 4, 6, 8, 10]);