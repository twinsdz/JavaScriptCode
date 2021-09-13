function primePairs(input){
    let startFirstPair = Number(input[0]);
    let startSecondPair = Number(input[1]);
    let differenceFirstPair = Number(input[2]);
    let differenceSecondPair = Number(input[3]);

    let firstEndValue = startFirstPair + differenceFirstPair;
    let secondEndValue = startSecondPair + differenceSecondPair;

    for (let i = startFirstPair; i <= firstEndValue; i++) {
        for (let j = startSecondPair; j <= secondEndValue; j++) {
            let isPrime1 = true;
            let isPrime2 = true;

            for (let p = 2; p <= Math.sqrt(i); p++) {

                if (i % p == 0) {
                    isPrime1 = false;
                    break;
                }
            }

            for (let p = 2; p <= Math.sqrt(j); p++) {

                if (j % p == 0) {
                    isPrime2 = false;
                    break;
                }
            }

            if (isPrime1 == true && isPrime2 == true) {
                console.log(`${i}${j}`);
            }
        }
    }
}

primePairs(['10', '20', '5', '5']);

/* primePairs([ '13', '22', '4', '2' ]); */

/* primePairs(['10', '30', '9', '6']); */