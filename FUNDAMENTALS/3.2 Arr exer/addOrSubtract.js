function addOrSubstr(input) {
    let newArr = [];
    let sumInput = 0;
    let sumNewArr = 0;

    for (let i = 0; i < input.length; i++) {
        let evenNumSum = 0;
        if (input[i] % 2 === 0) {
            sumInput += input[i];
            evenNumSum = input[i] + i; // input[i] += i;
            newArr.push(evenNumSum);
        } else {
            sumInput += input[i];
            evenNumSum = input[i] - i;
            newArr.push(evenNumSum);
        }
    }

    console.log(newArr);
    for (let num of newArr) {
        sumNewArr += num;
    }

    
    console.log(`${sumInput}`);
    console.log(`${sumNewArr}`);
}

// addOrSubstr([5, 15, 23, 56, 35]);

addOrSubstr ([-5, 11, 3, 0, 2]);