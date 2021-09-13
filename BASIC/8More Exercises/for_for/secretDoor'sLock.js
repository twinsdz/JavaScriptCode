/* function secretDoor(input) {
    let maxNUm100 = Number(input[0]);
    let maxNum10 = Number(input[1]);
    let maxNum1 = Number(input[2]);
    
    for (let i = 1; i <= maxNUm100; i++) {
        let num1 = i;

        if(num1 % 2 === 0){
            num1 = i;
        }

        for (let j = 2; j <= maxNum10; j++) {
            let num2 = j;
            let isPrime = true;

            for (let p = 2; p <= Math.sqrt(num2); p++) {

                if (num2 % p === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                num2 = j;
            }
            for (let k = 1; k <= maxNum1; k++) {
                let num3 = k;

                if(num3 % 2 === 0){
                    num3 = k;
                }

                if (isPrime && num1 % 2 === 0 && num3 % 2 === 0) {
                    console.log(`${num1} ${num2} ${num3}`);
                }
            }
        }
    }
}

secretDoor(['3', '5', '5', '']);

// secretDoor ([ '8', '2', '8' ]);

// secretDoor ([ '2', '2', '2', '' ]); */

function secretDoor(input) {
    let maxNUm100 = Number(input[0]);
    let maxNum10 = Number(input[1]);
    let maxNum1 = Number(input[2]);

    for (let i = 1; i <= maxNUm100; i++) {

        for (let j = 2; j <= maxNum10; j++) {
            let isPrime = true;

            for (let p = 2; p <= Math.sqrt(j); p++) {

                if (j % p === 0) {
                    isPrime = false;
                    break;
                }
            }
            for (let k = 1; k <= maxNum1; k++) {

                if (isPrime && i % 2 === 0 && k % 2 === 0) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}

secretDoor(['3', '5', '5', '']);

// secretDoor ([ '8', '2', '8' ]);

// secretDoor ([ '2', '2', '2', '' ]);