function bitcoin(input) {
    let day = 0;
    let firstBitcounDay = 0;
    let isFirstBitcoin = false;
    let bitcoinCount = 0;
    let goldMoneyForDay = 0;


    for (let i = 0; i < input.length; i++) {
        let gramsGold = Number(input[i]);
        day++;

        if (day % 3 === 0) {
            gramsGold *= 0.70;
        }

        goldMoneyForDay += gramsGold * 67.51;

        while (goldMoneyForDay >= 11949.16) {
            bitcoinCount++;

            if (bitcoinCount >= 1 && isFirstBitcoin === false) {
                isFirstBitcoin = true;
                firstBitcounDay = day;
            }
            goldMoneyForDay -= 11949.16;
        }
    }

    if (bitcoinCount >= 1) {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
        console.log(`Day of the first purchased bitcoin: ${firstBitcounDay}`);
    } else {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
    }
    console.log(`Left money: ${goldMoneyForDay.toFixed(2)} lv.`);
}

/* bitcoin([100, 200, 300]); */
/* bitcoin ([50, 100]); */

bitcoin([3124.15, 504.212, 2511.124]);