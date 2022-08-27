function solve(input) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const arr = input.filter((el) => {
        if (el >= biggest) {
            biggest = el;
            return true;   
        }
        return false;
});
    return arr;
}


// function solve(input) {
//     let biggest = Number.MIN_SAFE_INTEGER;
//     let arr = [];
//     for (let i = 0; i < input.length; i++) {

//         if (input[i] >= biggest) {
//             biggest = input[i];
//             arr.push(input[i]);
//         }
//     }
//     return arr;
// }

// function solve(input) {
//     let biggest = Number.MIN_SAFE_INTEGER;
//     let filtered = input.reduce((acc, current) => {
//         if (current >= biggest) {
//             biggest = current;
//             acc.push(current);
//         }
//         return acc;
//     }, []);
//     return filtered;
// }


console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([20, 3, 2, 15, 6, 1]));