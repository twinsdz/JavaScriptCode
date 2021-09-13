/* function equalSum(input) {
    let isIndex = false;

    for (let i = 0; i < input.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                sumLeft += input[j];
            }
        }
        if (i !== input.length - 1) {
            for (let r = i + 1; r < input.length; r++) {
                sumRight += input[r];
            }
        }
        if (sumLeft === sumRight) {
            isIndex = true;
            console.log(i);
        }
    }

    if (!isIndex) {
        console.log('no');
    }
}


// equalSum([1, 2, 3, 3]);

// equalSum([1, 2]);

// equalSum([1]);

equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); */

function equalSum(input) {
    let isIndex = false;

    for (let i = 0; i < input.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            let currentNum = input[leftIndex];
            sumLeft += currentNum;
        }

        for (let rightIndex = i + 1; rightIndex < input.length; rightIndex++) {
            let currentNum = input[rightIndex];
            sumRight += currentNum;
        }

        if (sumLeft === sumRight) {
            console.log(i);
            isIndex = true;
            break;
        }
    }
    if (!isIndex) {
        console.log('no');
    }
}

equalSum([1, 2, 3, 3]);

equalSum([1, 2]);

equalSum([1]);

equalSum([1, 2, 3]);

equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);