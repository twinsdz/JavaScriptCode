function coffeeMachine(drinkType, sugar, drinkCount) {
    drinkCount = Number(drinkCount);
    let priceDrink = 0;
    let totalSum = 0;

    if (sugar === "Without") {
        switch (drinkType) {
            case "Espresso":
                priceDrink = (drinkCount * 0.90) * 0.65;
                if (drinkCount >= 5) {
                    priceDrink *= 0.75;
                }
                break;
            case "Cappuccino":
                priceDrink = (drinkCount * 1.00) * 0.65;
                break;
            case "Tea":
                priceDrink = (drinkCount * 0.50) * 0.65;
                break;
        }
        totalSum += priceDrink;
    } else if (sugar === "Normal") {
        switch (drinkType) {
            case "Espresso":
                priceDrink = drinkCount * 1.00;
                if (drinkCount >= 5) {
                    priceDrink *= 0.75;
                }
                break;
            case "Cappuccino":
                priceDrink = drinkCount * 1.20;
                break;
            case "Tea":
                priceDrink = drinkCount * 0.60;
                break;
        }
        totalSum += priceDrink;
    } else if (sugar === "Extra") {
        switch (drinkType) {
            case "Espresso":
                priceDrink = drinkCount * 1.20;
                if (drinkCount >= 5) {
                    priceDrink *= 0.75;
                }
                break;
            case "Cappuccino":
                priceDrink = drinkCount * 1.60;
                break;
            case "Tea":
                priceDrink = drinkCount * 0.70;
                break;
        }
        totalSum += priceDrink;
    }

    if (totalSum > 15) {
        totalSum *= 0.80;
    }

    console.log(`You bought ${drinkCount} cups of ${drinkType} for ${totalSum.toFixed(2)} lv.`);
}

/* coffeeMachine ("Espresso", "Without", "10"); */

coffeeMachine("Cappuccino", "Normal", "13");