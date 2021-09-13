function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);

    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }

    if (fishermans <= 6) {
        price = price * 0.9;
    } else if (fishermans >= 7 && fishermans <= 11) {
        price = price * 0.85;
    } else {
        price = price * 0.75;
    }


    if (fishermans % 2 === 0 && season !== "Autumn") {
        price = price * 0.95;
    }

    let money = Math.abs(budget - price).toFixed(2);

    if (budget >= price) {
        console.log(`Yes! You have ${money} leva left.`);
    } else {
        console.log(`Not enough money! You need ${money} leva.`);
    }
}

// solve(["3000", "Summer", "11"]);

solve(["3600", "Autumn", "6"]);