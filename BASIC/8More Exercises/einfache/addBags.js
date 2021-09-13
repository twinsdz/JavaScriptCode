function bagsAdd(priceOver20Kg, kg, days, bags) {
    priceOver20Kg = Number(priceOver20Kg);
    kg = Number(kg);
    days = Number(days);
    bags = Number(bags);

    let price = 0;

    if (kg < 10) {
        price = priceOver20Kg * 0.20;
    } else if (kg >= 10 && kg <= 20) {
        price = priceOver20Kg * 0.50;
    } else {
        price = priceOver20Kg;
    }

    if (days > 30) {
        price *= 1.10;
    } else if (days >= 7 && days <= 30) {
        price *= 1.15;
    } else if (days < 7) {
        price *= 1.40;
    }

    let total = bags * price;

    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);

}

bagsAdd("30", "18", "15", "2");