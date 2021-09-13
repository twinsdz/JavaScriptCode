function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let priceStudio = 0;
    let priceApart = 0;

    switch (month) {
        case "May":
        case "October":
            priceStudio = nights * 50;
            if (nights > 7 && nights <= 14) {
                priceStudio = priceStudio * 0.95;
            } else if (nights > 14) {
                priceStudio *= 0.70;
            }
            priceApart = nights * 65;
            if (nights > 14) {
                priceApart *= 0.90;
            }
            break;

        case "June":
        case "September":
            priceStudio = nights * 75.20;
            if (nights > 14) {
                priceStudio *= 0.80;
            }
            priceApart = nights * 68.70;
            if (nights > 14) {
                priceApart *= 0.90;
            }
            break;

        case "July":
        case "August":
            priceStudio = nights * 76;
            priceApart = nights * 77;
            if (nights > 14) {
                priceApart *= 0.90;
            }
            break;
    }

    console.log(`Apartment: ${priceApart.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoom (["May", "15"]);

// hotelRoom(["June", "14"]);

// hotelRoom (["August", "20"]);