function sumOfTwoNum(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let noMagicSumCounter = 0;
    let sum = 0;
    let isSumMagic = false;

    for (let i = firstNum; i <= secondNum; i++) {
        for (let j = firstNum; j <= secondNum; j++) {
            sum = i + j;
            noMagicSumCounter++;
            if (sum == magicNum) {
                counter++;
                if (counter == 1) {
                    console.log(`Combination N:${noMagicSumCounter} (${i} + ${j} = ${magicNum})`);
                    isSumMagic = true;
                    break;
                }
            }
        }
    }
    if (isSumMagic == false) {
        console.log(`${noMagicSumCounter} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNum(['1', '10', '5']);

// sumOfTwoNum ([ '23', '24', '20' ]);

// sumOfTwoNum([ '88', '888', '1000' ]);

// sumOfTwoNum(['88', '888', '2000']);