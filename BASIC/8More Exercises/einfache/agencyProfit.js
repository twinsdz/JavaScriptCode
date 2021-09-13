function agensyProfit(name, adultTicketsCount, kidsTicketsCount, priceNetto, agencyFee) {
    adultTicketsCount = Number(adultTicketsCount);
    kidsTicketsCount = Number(kidsTicketsCount);
    priceAdultNetto = Number(priceNetto);
    agencyFee = Number(agencyFee);

    let priceKidTicket = priceAdultNetto * 0.30;
    let priceAdultFee = priceAdultNetto + agencyFee;
    let priceKidsFee = priceKidTicket + agencyFee;
    let total = (adultTicketsCount * priceAdultFee) + (kidsTicketsCount * priceKidsFee);
    let profit = total * 0.20;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);

}

agensyProfit("WizzAir", "15", "5", "120", "40");