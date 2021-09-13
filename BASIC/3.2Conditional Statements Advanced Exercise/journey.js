function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = ("Bulgaria", "Balkans", "Europe");
    let holidayType = "";
    let price = 0;

    if (budget <= 100) {
            if (season === "summer") {
            destination = "Bulgaria";
            holidayType = "Camp";
            price = budget * 0.3;
        } else {
            destination = "Bulgaria";
            holidayType = "Hotel";
            price = budget * 0.7;
        }
    } else if (budget <= 1000) {
        if (season === "summer") {
            destination = "Balkans";
            holidayType = "Camp";
            price = budget * 0.40;
        } else {
            destination = "Balkans";
            holidayType = "Hotel";
            price = budget * 0.8;
        }
    } else {
            destination = "Europe";
            holidayType = "Hotel";
            price = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${price.toFixed(2)}`);
}

journey (["50", "summer"]);
    
