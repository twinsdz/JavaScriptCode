function solve(input) {
    let arr = [];

    while (input.length > 0) {
        let minNum = Math.min(...input);
        let numMin = input.splice(input.indexOf(minNum), 1);
        arr.push(...numMin);

        let maxNum = Math.max(...input);
        let numMax = input.splice(input.indexOf(maxNum), 1);
        arr.push(...numMax);
    }
    return arr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));