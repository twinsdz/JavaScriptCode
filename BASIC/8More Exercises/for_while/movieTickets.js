function solve(input) {
    let index = 0;
    let a1 = Number(input[index++]);
    let a2 = Number(input[index++]);
    let n = Number(input[index++]);


    for (let i = a1; i <= (a2 - 1); i++) {

        let asciiSymbol = String.fromCharCode(i);
        let symbol1 = asciiSymbol;
        let symbol4 = i;

        for (let j = 1; j <= (n - 1); j++) {

            let symbol2 = j;

            for (let k = 1; k <= (n / 2 - 1); k++) {

                let symbol3 = k;
                let symbolSum = symbol2 + symbol3 + symbol4;


                if (i % 2 != 0 && symbolSum % 2 != 0) {

                    console.log(`${symbol1}-${symbol2}${symbol3}${symbol4}`);

                }
            }
        }
    }
}

solve(["86", "88", "4"]);