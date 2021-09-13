/* function oddAndEvenSum(num) {
    let arrOfNum = String(num).split('');
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < arrOfNum.length; i++) {
        const currentNum = Number(arrOfNum[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

// oddAndEvenSum (1000435);

console.log(oddAndEvenSum(3495892137259234)); */

function oddAndEvenSum(num) {
    let numberAsStr = num.toString();
    let evenSum = 0;
    let oddSum = 0;
   
    for (let digit of numberAsStr) {
       
        if (Number(digit) % 2 === 0) {
            evenSum += Number(digit);
        } else {
            oddSum += Number(digit);
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

// oddAndEvenSum (1000435);

console.log(oddAndEvenSum(3495892137259234));