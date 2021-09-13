function factorialDev(x, y) {

    function factorial(n) {
        let factorialNum = 1;
        for (let i = 2; i <= n; i++) {
            factorialNum *= i;
        }
        return factorialNum;
    }

    let devision = factorial(x) / factorial(y);
    return devision.toFixed(2);
}

console.log(factorialDev(5, 2));