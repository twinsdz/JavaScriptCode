function fuelMoney(distance, passengers, pricePerLiter) {

    let neededFluel = (distance / 100) * 7;
    neededFluel += passengers * 0.100;
    let neededMoney = neededFluel * pricePerLiter;

    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}


fuelMoney(260, 9, 2.49);