function profit(input) {
    let count1Lv = Number(input[0]);
    let count2Lv = Number(input[1]);
    let count5Lv = Number(input[2]);
    let sum = Number(input[3]);
    let isFound = false;
    let currentSum = 0;

    for (let i = 0; i <= count1Lv; i++) {

        for (let j = 0; j <= count2Lv; j++) {

            for (let k = 0; k <= count5Lv; k++) {

                currentSum = i * 1 + j * 2 + k * 5;

                if (currentSum > sum) {
                    currentSum = 0;
                    break;
                } else if (currentSum == sum) {
                    isFound = true;
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                    break;
                } 
            }
        }
    }
}

profit(['3', '2', '3', '10', '', '']);

// profit ([ '5', '3', '1', '7', '',  '',  '']);