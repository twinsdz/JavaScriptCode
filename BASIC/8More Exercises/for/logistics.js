function logistic(input) {
    let index = 0;
    let loadCount = Number(input[index++]);


    let tonneSum = 0;
    let priceSum = 0;
    let averagePrice = 0;
    let busCount = 0;
    let heavyVehicle = 0;
    let train = 0;

    for (let i = 0; i < loadCount; i++) {
        let loadTonne = Number(input[index++]);
        tonneSum += loadTonne;

        if (loadTonne <= 3) {
            priceSum += loadTonne * 200;
            busCount += loadTonne;
        } else if (loadTonne <= 11) {
            priceSum += loadTonne * 175;
            heavyVehicle += loadTonne;
        } else {
            priceSum += loadTonne * 120;
            train += loadTonne;
        }


    }
    averagePrice = priceSum / tonneSum;
    console.log(`${averagePrice.toFixed(2)}`);
    console.log(`${(busCount / tonneSum * 100).toFixed(2)}%`);
    console.log(`${(heavyVehicle / tonneSum * 100).toFixed(2)}%`);
    console.log(`${(train / tonneSum * 100).toFixed(2)}%`);
}

logistic(["4", "1", "5", "16", "3"]);