function solve(input) {
    let index = 0;
    let goalSum = Number(input[index++]);
    let command = Number(input[index++]);
    let sum = 0;
    let sumCash = 0;
    let sumCard = 0;
    let payCount = 0;
    let cardPayCount = 0;
    let cashPayCount = 0;

    while (command !== 'End') {
        if (sum >= goalSum || index > input.length) {
            break;
        }

        let currentPrice = Number(command);
        payCount++;

        if (payCount % 2 === 0) {
            if (currentPrice < 10) {
                console.log(`Error in transaction!`);
            } else {
                sum += currentPrice;
                sumCard += currentPrice;
                cardPayCount++;
                console.log(`Product sold!`);
            }
        } else {
            if (currentPrice > 100) {
                console.log(`Error in transaction!`);
            } else {
                sum += currentPrice;
                sumCash += currentPrice;
                cashPayCount++;
                console.log(`Product sold!`);
            }
        }
        command = input[index++];
    }

    if (sum >= goalSum) {
        let averageCash = Math.abs(sumCash / cashPayCount);
        let averageCard = Math.abs(sumCard / cardPayCount);
        console.log(`Average CS: ${averageCash.toFixed(2)}`);
        console.log(`Average CC: ${averageCard.toFixed(2)}`);
    } else {
        console.log(`Failed to collect required money for charity.`);
    }
}


// solve(["500", "120", "8", "63", "256", "78", "317"]);

solve(["600", "86", "150", "98", "227", "End"]);