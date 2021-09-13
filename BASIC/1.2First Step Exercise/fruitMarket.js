function fruitPrice(input) {

    strawbPrice = Number(input[0]);
    bananas = Number(input[1]);
    oranges = Number(input[2]);
    raspber = Number(input[3]);
    strawb = Number(input[4]);

    let raspberPrice = strawbPrice - (0.5 * strawbPrice);
    let orangesPrice = raspberPrice * 0.6;
    let bananasPrice = raspberPrice * 0.2;

    strawbPriceAll = strawbPrice * strawb;
    raspberPriceAll = raspberPrice * raspber;
    orangesPriceAll = orangesPrice * oranges;
    bananasPriceAll = bananasPrice * bananas;

    let total = strawbPriceAll + raspberPriceAll + orangesPriceAll + bananasPriceAll;
    console.log(total);
}

fruitPrice(["48", "10", "3.3", "6.5", "1.7"]);