function easterLunch (breadCount, eggsSets, kgCookie){
    breadCount = Number (breadCount);
    eggsSets = Number (eggsSets);
    kgCookie = Number (kgCookie);

    let breadPrice = breadCount * 3.20;
    let eggsPrice = eggsSets * 4.35;
    let cookiesPrice = kgCookie * 5.40;
    let colorPrice = eggsSets * 12 * 0.15;
    let totalPrice = breadPrice + eggsPrice + cookiesPrice + colorPrice;

    console.log(`${totalPrice.toFixed(2)}`);
}

easterLunch ("3", "2", "3");