function solve(input) {
    let index = 0;
    let maxNumOne = Number(input[index++]);
    let maxNumTwo = Number(input[index++]);
    let maxNumThree = Number(input[index++]);

    for (let i = 1; i <= maxNumOne; i++) {
        let currentNum1 = i;

        if (currentNum1 % 2 === 0) {
            currentNum1 = i;
        }

        for (let j = 2; j <= maxNumTwo; j++) {
            let currentNum2 = j;
            let prime = true;

            for (let p = 2; p <= Math.sqrt(currentNum2); p++) {

                if (currentNum2 % p === 0) {
                    prime = false;
                    break;
                }

            }

            if (prime) {
                currentNum2 = j;
            }
            
            for (let k = 1; k <= maxNumThree; k++) {
                let currentNum3 = k;

                if (currentNum3 % 2 == 0) {
                    currentNum3 = k;
                }

                if (currentNum1 % 2 === 0 && currentNum3 % 2 === 0 && prime) {
                    console.log(`${currentNum1} ${currentNum2} ${currentNum3}`);
                }
            }
        }
    }
}

/* solve(['3', '5', '5', '']); */

solve(['8', '2', '8']);