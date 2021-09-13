function safari(budget, lBenzin, weekDay){
    budget = Number (budget);
    lBenzin = Number (lBenzin);

    let benzinPrice = lBenzin * 2.10;
    let totalPrice = benzinPrice + 100;

    if (weekDay === "Saturday"){
        totalPrice *= 0.90;
    } else if (weekDay === "Sunday"){
        totalPrice *= 0.80;
    }

    if (budget>= totalPrice){
        let restMoney = budget - totalPrice;
        console.log(`Safari time! Money left: ${restMoney.toFixed(2)} lv.`);
    } else {
        let neededMoney = totalPrice - budget;
        console.log(`Not enough money! Money needed: ${neededMoney.toFixed(2)} lv.`);
    }
}

/* safari("1000", "10", "Sunday"); */

safari("120", "30", "Saturday");