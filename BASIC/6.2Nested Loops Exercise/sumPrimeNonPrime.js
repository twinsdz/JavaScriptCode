/* function primeNonPrime(input) {
    let index = 0;
    let primeNumSum = 0;
    let nonPrimeNumSum = 0;
    let currentNum = input[index++];

    while (currentNum !== 'stop') {
        currentNum = Number(currentNum);
        let isPrime = true;

        if (currentNum < 0) {
            console.log("Number is negative.");
            currentNum = input[index++];
            continue;
        }

        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumSum += currentNum;
        } else {
            nonPrimeNumSum += currentNum;
        }
        currentNum = input[index++];

    }
    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`);
}

primeNonPrime(["30", "83", "33", "-1", "20", "stop"]);

// primeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]); */


function demo(input) {
    let command = input[0];
    let primeSum = 0;
    let nonPrimeSum = 0;
    let index = 1;
    let isPrime = true;

    while (command != "stop") {
        let currentNumber = Number(command);
        
        if (currentNumber < 0) {
            console.log("Number is negative.");
        } else {

            for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
                if (currentNumber % i == 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                primeSum += currentNumber;
            } else {
                nonPrimeSum += currentNumber;
                isPrime = true;
            }

        }
        command = input[index++];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}

demo (["3", "9", "0", "7", "19", "4", "stop"]);

// demo(["30", "83", "33", "-1", "20", "stop"]);
