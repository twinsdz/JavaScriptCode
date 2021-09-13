function luckyNum(input) {
    let num = Number(input[0]);
    let result = "";
    let string = "";

    for (let i = 1; i <= 9; i++) {
        // превръщане в стринг
        let char1 = i.toString();

        for (let j = 1; j <= 9; j++) {

            for (let k = 1; k <= 9; k++) {

                for (let p = 1; p <= 9; p++) {
                    result = char1 + j + k + p;

                    if ((i + j) == (k + p) && num % (i + j) == 0) {
                        string += result + " ";
                    }
                }
            }
        }
    }
    console.log(`${string}`);
}

luckyNum(['24']);