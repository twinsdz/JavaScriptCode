function skiTrip(input) {
    let days = Number(input[0]);
    let roomMode = input[1];
    let evaluation = input[2];
    let nights = days - 1;
    price = 0;

    if (nights <= 9 && evaluation == "positive") {
        switch (roomMode) {
            case "room for one person":
                price = nights * 18;
                priceTotal = price + (price * 0.25);
                console.log(priceTotal.toFixed(2));
                break;

            case "apartment":
                price = nights * 25;
                priceDiscount = price - (price * 0.3);
                priceTotal = priceDiscount + (priceDiscount * 0.25);
                console.log(priceTotal.toFixed(2));
                break;

            case "president apartment":
                price = nights * 35;
                priceDiscount = price - (price * 0.1);
                priceTotal = priceDiscount + (priceDiscount * 0.25);
                console.log(priceTotal.toFixed(2));
                break;
        }
    } else if (nights > 9 && nights <= 14 && evaluation == "positive") {
        switch (roomMode) {
            case "room for one person":
                price = nights * 18;
                priceTotal = price + (price * 0.25);
                console.log(priceTotal.toFixed(2));
                break;

            case "apartment":
                price = nights * 25;
                priceDiscount = price - (price * 0.35);
                priceTotal = priceDiscount + (priceDiscount * 0.25);
                console.log(priceTotal.toFixed(2));
                break;

            case "president apartment":
                price = nights * 35;
                priceDiscount = price - (price * 0.15);
                priceTotal = priceDiscount + (priceDiscount * 0.25);
                console.log(priceTotal.toFixed(2));
                break;
        }
    } else if (nights >= 15 && evaluation == "positive") {
        switch (roomMode) {
            case "room for one person":
                price = nights * 18;
                priceTotal = price + (price * 0.25);
                console.log(priceTotal.toFixed(2));
                break;

            case "apartment":
                price = nights * 25;
                priceDiscount = price - (price * 0.5);
                priceTotal = priceDiscount + (priceDiscount * 0.25);
                console.log(priceTotal.toFixed(2));
                break;

            case "president apartment":
                price = nights * 35;
                priceDiscount = price - (price * 0.2);
                priceTotal = priceDiscount + (priceDiscount * 0.25);
                console.log(priceTotal.toFixed(2));
                break;
        }
    } else if (nights <= 9 && evaluation == "negative") {
        switch (roomMode) {
            case "room for one person":
                price = nights * 18;
                priceTotal = price - (price * 0.1);
                console.log(priceTotal.toFixed(2));
                break;

            case "apartment":
                price = nights * 25;
                priceDiscount = price - (price * 0.5);
                priceTotal = priceDiscount - (priceDiscount * 0.1);
                console.log(priceTotal.toFixed(2));
                break;

            case "president apartment":
                price = nights * 35;
                priceDiscount = price - (price * 0.2);
                priceTotal = priceDiscount - (priceDiscount * 0.1);
                console.log(priceTotal.toFixed(2));
                break;
        }
    } else if (nights > 9 && nights <= 14 && evaluation == "negative") {
        switch (roomMode) {
            case "room for one person":
                price = nights * 18;
                priceTotal = price - (price * 0.1);
                console.log(priceTotal.toFixed(2));
                break;

            case "apartment":
                price = nights * 25;
                priceDiscount = price - (price * 0.35);
                priceTotal = priceDiscount - (priceDiscount * 0.1);
                console.log(priceTotal.toFixed(2));
                break;

            case "president apartment":
                price = nights * 35;
                priceDiscount = price - (price * 0.15);
                priceTotal = priceDiscount - (priceDiscount * 0.1);
                console.log(priceTotal.toFixed(2));
                break;
        }
    } else if (nights > 15 && evaluation == "negative") {
        switch (roomMode) {
            case "room for one person":
                price = nights * 18;
                priceTotal = price - (price * 0.1);
                console.log(priceTotal.toFixed(2));
                break;
            case "apartment":
                price = nights * 25;
                priceDiscount = price - (price * 0.5);
                priceTotal = priceDiscount - (priceDiscount * 0.1);
                console.log(priceTotal.toFixed(2));
                break;
            case "president apartment":
                price = nights * 35;
                priceDiscount = price - (price * 0.2);
                priceTotal = priceDiscount - (priceDiscount * 0.1);
                console.log(priceTotal.toFixed(2));
                break;
        }
    } else {
        console.log("error");
    }

}

skiTrip(["14", "apartment", "positive"]);