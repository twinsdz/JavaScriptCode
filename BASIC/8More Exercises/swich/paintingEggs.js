function paintingEggs(eggsSize, color, eggsSets) {
    eggsSets = Number(eggsSets);
    let pricePerSet = 0;
    let totalPrice = 0;
    let profit = 0;

    if (eggsSize === "Large") {
        switch (color) {
            case 'Red':
                pricePerSet = eggsSets * 16;
                break;
            case 'Green':
                pricePerSet = eggsSets * 12;
                break;
            case 'Yellow':
                pricePerSet = eggsSets * 9;
                break;
        }
        profit = pricePerSet * 0.65;
    } else if (eggsSize === "Medium") {
        switch (color) {
            case 'Red':
                pricePerSet = eggsSets * 13;
                break;
            case 'Green':
                pricePerSet = eggsSets * 9;
                break;
            case 'Yellow':
                pricePerSet = eggsSets * 7;
                break;
        }
        profit = pricePerSet * 0.65;
    } else {
        switch (color) {
            case 'Red':
                pricePerSet = eggsSets * 9;
                break;
            case 'Green':
                pricePerSet = eggsSets * 8;
                break;
            case 'Yellow':
                pricePerSet = eggsSets * 5;
                break;
        }
        profit = pricePerSet * 0.65;
    }
    console.log(`${profit.toFixed(2)} leva.`);
}

/* paintingEggs("Large", "Red", "7"); */

paintingEggs("Medium", "Green", "5");