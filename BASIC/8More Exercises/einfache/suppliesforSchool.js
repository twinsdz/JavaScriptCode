function suppliesForSchool(penCount, markerCount, cleanerInL, discountPersent) {
    penCount = Number(penCount);
    markerCount = Number(markerCount);
    cleanerInL = Number(cleanerInL);
    discountPersent = Number(discountPersent);

    penPrice = penCount * 5.80;
    markerPrice = markerCount * 7.20;
    cleanerPrice = cleanerInL * 1.20;

    totalPrice = penPrice + markerPrice + cleanerPrice;

    discountPrice = totalPrice - ((totalPrice * discountPersent) / 100);

    console.log(`${discountPrice.toFixed(3)}`);
}

suppliesForSchool("2", "3", "2.5", "25");