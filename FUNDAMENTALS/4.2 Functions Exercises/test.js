function test(x) {
    let result = pow(x) * 2;

    console.log('Hallo Desi!');

    function pow(y) {
        return x * x;
    }
    return result;
}

console.log(test(2));