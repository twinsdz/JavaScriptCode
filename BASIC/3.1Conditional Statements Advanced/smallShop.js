function prices(input) {
    let product = input[0];
    let town = input[1];
    let n = Number(input[2]);

    if (town == "Sofia") {
        switch (product) {
            case "coffee":
                price = n * 0.50;
                break;
            case "water":
                price = n * 0.80;
                break;
            case "beer":
                price = n * 1.20;
                break;

            case "sweets":
                price = n * 1.45;
                break;
            case "peanuts":
                price = n * 1.60;
                break;
            default:
                console.log("unknown");
                break;
        }
    } else if (town == "Plovdiv") {
        switch (product) {
            case "coffee":
                price = n * 0.40;
                break;
            case "water":
                price = n * 0.70;
                break;
            case "beer":
                price = n * 1.15;
                break;

            case "sweets":
                price = n * 1.30;
                break;
            case "peanuts":
                price = n * 1.50;
                break;
            default:
                console.log("unknown");
                break;
        }
    } else if (town == "Varna") {
        switch (product) {
            case "coffee":
                price = n * 0.45;
                break;
            case "water":
                price = n * 0.70;
                break;
            case "beer":
                price = n * 1.10;
                break;
            case "sweets":
                price = n * 1.35;
                break;
            case "peanuts":
                price = n * 1.55;
                break;
            default:
                console.log("unknown");
                break;
        }
    }
    console.log(price);
}

prices(["coffee", "Varna", "2"]);

/* prices("peanuts", "Plovdiv", "1");
prices("beer", "Sofia", "6"); */