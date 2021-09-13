function sumPositionNum(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let oddSum = 0;
        let evenSum = 0;
        let currentNum = "" + i;
        // превръщане в стринг
        // let currentNum = i.toString();

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        
        if (evenSum === oddSum) {
            printLine += `${i} `;
        }
    }
    console.log(`${printLine}`);
}

sumPositionNum(["100000", "100050"]);
