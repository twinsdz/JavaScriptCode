function carNum(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let result = "";
    let string = "";

    for (let i = firstNum; i <= secondNum; i++) {
        // let char1 = i.toString();

        for (let j = firstNum; j <= secondNum; j++) {

            for (let k = firstNum; k <= secondNum; k++) {

                for (let p = firstNum; p <= secondNum; p++) {    

                    if (i > p && (j + k) % 2 == 0 && ((i % 2 == 0 && p % 2 != 0) || (p % 2 == 0 && i % 2 != 0))) {
                        result = `${i}${j}${k}${p} `;
                        string += result;
                    }
                }
            }
        }
    }
    console.log(`${string}`);
}


// carNum(['3', '5', '']);

carNum(["5", "8"]);