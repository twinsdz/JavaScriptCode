
function touristShop(...input) {
    let index = 1;
    let budget = Number(input[0]);
    let productName = input[index++];
    let productCount = 0;
    let productSum = 0;


    while (productName !== "Stop") {
        let productPrice = Number(input[index++]);
        productCount++;

        if (productCount % 3 == 0) {
            productPrice = productPrice / 2;
        }

        if (productName === undefined) {
            break;
        }

        productSum += productPrice;
        productName = input[index++];
    }
    if (budget < productSum) {
        let moneyNeeded = Math.abs(budget - productSum);

        console.log(`You don't have enough money!`);
        console.log(`You need ${moneyNeeded.toFixed(2)} leva!`);
    } else {
        console.log(`You bought ${productCount} products for ${productSum.toFixed(2)} leva.`);
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