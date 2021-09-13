function primeNumberChecker(n) {
    n = Number(n);
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            isPrime = false;
        }
    }
    return isPrime;
}

console.log(primeNumberChecker('7'));
console.log(primeNumberChecker('8'));
console.log(primeNumberChecker('81'));