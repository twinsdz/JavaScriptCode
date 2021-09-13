function biggestNum(...input) {
    let filtered = input.sort((a, b) => b - a);
    let biggest = filtered[0];
    return biggest;
}

console.log(biggestNum(-2, 7, 3));
console.log(biggestNum(130, 5, 99 ));
console.log(biggestNum(43, 43.2, 43.1 ));