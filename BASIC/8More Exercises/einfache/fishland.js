function fishLand(input) {
    let index = 0;
    let mackerelPrice = Number(input[index++]);
    let spratPrice = Number(input[index++]);
    let beltedBonitoKg = Number(input[index++]);
    let scadKg = Number(input[index++]);
    let musselKg = Number(input[index++]);

    let priceBeltedBonito = mackerelPrice * 1.60;
    let PriceScad = spratPrice * 1.80;

    let total = (beltedBonitoKg * priceBeltedBonito) + (scadKg * PriceScad) + (musselKg * 7.50);

    console.log(`${total.toFixed(2)}`);
}

fishLand(['6.90', '4.20', '1.5', '2.5', '1']);

fishLand(['5.55', '3.57', '4.3', '3.6', '7']);