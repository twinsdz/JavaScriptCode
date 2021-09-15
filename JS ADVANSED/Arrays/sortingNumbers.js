/* function solve(input) {
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
} */

function solve(input) {
    input.sort((a, b) => a - b);
    let end = input.length - 1;
    let arr = input.reduce((acc, curr) => {
        if (acc.length !== input.length) {
            acc.push(curr);
            if (acc.length !== input.length) {
                acc.push(input[end--]);
            }
        }
        return acc;
    }, []);
    return arr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));