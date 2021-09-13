function rockBand (input){
    let index = 0;
    let sumToInvest = Number (input[index++]);
    let sellPriceForOneCd = Number (input[index++]);
    let concertCounts = Number (input[index++]);
    let selledTicketsPerConcert = Number (input[index]);

    let maxCdSells = Math.ceil((selledTicketsPerConcert / 3) * concertCounts);
    let maxRateOfSellig = maxCdSells * sellPriceForOneCd;
    let neededMoneyToOrder = maxRateOfSellig * 0.65;
    let earnedMoney = maxRateOfSellig - neededMoneyToOrder;
    let canOrderCDs= Math.floor(sumToInvest / (sellPriceForOneCd * 0.65));

    if (sumToInvest >= neededMoneyToOrder){
        console.log(`You have enough money to order CDs! If you order ${maxCdSells} CDs, you'll earn ${earnedMoney.toFixed(2)}€.`);
    } else {
        console.log(`You have not enough money! You need ${(neededMoneyToOrder - sumToInvest).toFixed(2)}€ more to order enough CDs!`);
    }

    if (canOrderCDs > maxCdSells){
        console.log(`Don't order more, than ${maxCdSells} CDs! You can't sell them!`);
    } else {
        let earned = (canOrderCDs * sellPriceForOneCd) - sumToInvest;
        console.log(`You can order ${canOrderCDs.toFixed(2)} CDs and you'll earn ${earned.toFixed(2)}€.!`);
    } 
}

// rockBand (["1000","8", "30", "150"]);

rockBand (["7850", "8", "30", "150"]);

