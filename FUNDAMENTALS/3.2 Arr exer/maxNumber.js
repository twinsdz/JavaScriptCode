function maxNum(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        let isBigger = true;

        for (let j = i + 1; j < input.length; j++) {

            if (input[i] <= input[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newArr.push(input[i]);
        }
    }
    console.log(newArr.join(' '));
}

maxNum([1, 4, 3, 2]);

maxNum([41, 41, 34, 20]);

maxNum([14, 24, 3, 19, 15, 17]);

maxNum([27, 19, 42, 2, 13, 45, 48]); 