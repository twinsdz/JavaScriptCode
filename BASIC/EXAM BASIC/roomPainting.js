function solve(input) {
    let index = 0;
    let colorBoxes = Number(input[index++]);
    let papierRolle = Number(input[index++]);
    let priceForOneGloves = Number(input[index++]);
    let priceForOneBrush = Number(input[index++]);

    let totalPriceColor = colorBoxes * 21.50;
    let totalPricePapierRolle = papierRolle * 5.20;
    let glovesNeeded = Math.ceil(papierRolle * 0.35);
    let brushesNeeded = Math.floor(colorBoxes * 0.48);
    let totalPriceGloves = glovesNeeded * priceForOneGloves;
    let totalPriceBrushes = brushesNeeded * priceForOneBrush;

    let total = totalPriceColor + totalPricePapierRolle + totalPriceBrushes + totalPriceGloves;
    let delivery = total * (1 / 15);

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);

}

solve(['10', '8', '2.2', '5']);

// solve(['21', '18', '5', '2.2']);