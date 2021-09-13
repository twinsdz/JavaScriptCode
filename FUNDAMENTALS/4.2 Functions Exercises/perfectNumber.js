function perfectNum(n) {
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n ? "We have a perfect number!" : "It's not so perfect.";
}

console.log(perfectNum(6));