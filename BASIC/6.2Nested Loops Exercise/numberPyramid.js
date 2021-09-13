function pyramid(input) {
    let n = Number(input[0]);

    let currentNum = 1;
    let isBigger = false;

    for (let rows = 1; rows <= n; rows++) {
        let printCurrentLine = "";

        for (let cols = 1; cols <= rows; cols++) {
            printCurrentLine += `${currentNum} `;

            if (currentNum === n) {
                isBigger = true;
                break;
            }
            currentNum++;
        }
        console.log(printCurrentLine);
        if (isBigger) {
            break;
        }
    }
}

pyramid(["10"]);