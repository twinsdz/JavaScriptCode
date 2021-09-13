function mobileOperator(contractDuration, contractType, internet, months) {
    months = Number(months);
    let priceForMonth = 0;
    let totalPrice = 0;


    if (contractDuration === "one") {
        switch (contractType) {
            case "Small":
                priceForMonth = 9.98;
                break;
            case "Middle":
                priceForMonth = 18.99;
                break;
            case "Large":
                priceForMonth = 25.98;
                break;
            case "ExtraLarge":
                priceForMonth = 35.99;
                break;
        }
    } else if (contractDuration === "two") {
        switch (contractType) {
            case "Small":
                priceForMonth = 8.58;
                break;
            case "Middle":
                priceForMonth = 17.09;
                break;
            case "Large":
                priceForMonth = 23.59;
                break;
            case "ExtraLarge":
                priceForMonth = 31.79;
                break;
        }
    }
    if (internet === "yes") {
        if (priceForMonth <= 10) {
            priceForMonth += 5.50;
        } else if (priceForMonth <= 30) {
            priceForMonth += 4.35;
        } else if (priceForMonth > 30) {
            priceForMonth += 3.85;
        }
    } 

    totalPrice = priceForMonth * months;

    if (contractDuration === "two"){
        totalPrice *= 0.9625;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);

}

/* mobileOperator("one", "Small", "yes", "10"); */
/* mobileOperator ("two", "Large", "no", "10"); */
mobileOperator("two", "ExtraLarge", "yes", "20");