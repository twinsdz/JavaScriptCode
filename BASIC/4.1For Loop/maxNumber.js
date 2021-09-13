function maxNum(input) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let inputLine = '';

    for (let i = 0; i < input.length - 1; i++) {
        inputLine = input[i];

        if (inputLine === 'Stop') {
            break;
        }

        let currentNum = Number(inputLine);

        if (currentNum > biggestNum) {
            biggestNum = currentNum;
        }
    }
    console.log(biggestNum);
}

maxNum(["100", "99", "80", "70", "Stop"]);