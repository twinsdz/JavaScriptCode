function solve(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        if (biggest <= currentNum) {
            biggest = currentNum;
            // newArr.push(currentNum);
            newArr[newArr.length] = currentNum;
        }
    }
    return newArr.join(' ');
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));

console.log(solve([1, 2, 3, 4]));

console.log(solve([20, 3, 2, 15, 6, 1]));