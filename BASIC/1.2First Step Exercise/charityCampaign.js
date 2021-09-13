function donateSum(input) {
    let days = Number(input[0]);
    let countConfectioner = Number(input[1]);
    let cakes = Number(input[2]);
    let gofers = Number(input[3]);
    let pancakes = Number(input[4]);

    let priceCakes = cakes * 45;
    let priceGofers = gofers * 5.80;
    let pricePancakes = pancakes * 3.20;
    let sumPerDay = (priceCakes + priceGofers + pricePancakes) * countConfectioner;
    let sumTotal = sumPerDay * days;
    let sumEnd = sumTotal - (sumTotal / 8);

    console.log(sumEnd);
}

donateSum(["23", "8", "14", "30", "16"]);