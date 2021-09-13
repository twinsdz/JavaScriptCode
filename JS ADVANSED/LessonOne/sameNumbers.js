function solve(num) {
    let numAsStr = num.toString();
    let ifSame = true;
    let sum = Number(numAsStr[0]);
    for (let i = 1; i < numAsStr.length; i++) {
        let currNum = Number(numAsStr[i]);

        if (currNum !== Number(numAsStr[i - 1])) {
            ifSame = false;
        }
        sum += currNum;
    }
    console.log(ifSame);
    console.log(sum);
}

solve(2222222);
solve(1234);