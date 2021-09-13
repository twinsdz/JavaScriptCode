function binaryToDecimal (binaryNumber){
    let sum = 0;
    let position = 0;

    for (let i = binaryNumber.length -1; i >= 0; i--){
        let currentNum = Number (binaryNumber[i]);

        sum += currentNum * (2 ** position);
        position++;
    }
    console.log (sum);
}

binaryToDecimal('1010');



/* function x(z) {
    return parseInt(z, 2);
}
console.log(x('1010')); */
