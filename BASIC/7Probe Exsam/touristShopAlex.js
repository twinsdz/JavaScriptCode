function touristShop() {
    let arr = arguments;
    let budget = Number(arr[0]);
    let productCount = 0;
    let productSum = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == "Stop") {
            console.log(`You bought ${productCount} products for ${productSum.toFixed(2)} leva.`);
            break;
        } else {
            i++;
            productCount++;
            let currentPrice = Number(arr[i]);
            if (productCount % 3 == 0) {
                currentPrice = currentPrice / 2;
            }
            productSum += currentPrice;

            if (budget < productSum) {
                let moneyNeeded = Math.abs(budget - productSum);

                console.log(`You don't have enough money!`);
                console.log(`You need ${moneyNeeded.toFixed(2)} leva!`);
            }
        }
    }
}

touristShop("54", "Thermal underwear", "24", "Sunscreen", "45");

touristShop ("153.20", 
    "Backpack", 
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"); 