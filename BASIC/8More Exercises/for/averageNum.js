/* function averageNumber(input) {
    let index = 0;
    let n = Number(input[index++]);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i]);
        sum += currentNum;
    }

    let avgSum = sum / n;
    console.log(avgSum.toFixed(2));
} */

function averageNumber(input) {
    let index = 0;
    let n = Number(input[index++]);
    let sum = 0;

    while (index <= n) {
        let currentNum = Number(input[index++]);
        sum += currentNum;
    }
    
    let avgSum = sum / n;
    console.log(avgSum.toFixed(2));
}


averageNumber([4, 3, 2, 4, 2]);