function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let currentNum = i;

        while (currentNum > 0) {
            sum = parseInt(i % 10) + parseInt(i / 10);
            break;
        }

        if ((sum == 5) || (sum == 7) || (sum == 11)) {
            console.log(`${currentNum} -> True`);
        } else {
            console.log(`${currentNum} -> False`);
        }
    }
}

specialNumbers(15);