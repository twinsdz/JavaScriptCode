function flowerPrices(input) {
    let flowerName = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (flowerName) {
        case "Roses":
            price = flowerCount * 5;
            if (flowerCount > 80) {
                price = price * 0.9;
            }
            break;
        case "Dahlias":
            price = flowerCount * 3.80;
            if (flowerCount > 90) {
                price = price * 0.85;
            }
            break;
        case "Tulips":
            price = flowerCount * 2.80;
            if (flowerCount > 80) {
                price = price * 0.85;
            }
            break;
        case "Narcissus":
            price = flowerCount * 3;
            if (flowerCount < 120) {
                price = price * 1.15;
            }
            break;
        case "Gladiolus":
            50
            price = flowerCount * 2.50;
            if (flowerCount < 80) {
                price = price * 1.20;
            }
            break;
    }

    let money = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerName} and ${money.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`);
    }

}

flowerPrices(["Roses", "55", "250"]);