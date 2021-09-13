function catFood(input) {
    let index = 0;
    let cats = Number(input[index++]);
    let smallCats = 0;
    let bigCats = 0;
    let hugeCats = 0;
    let sumFood = 0;

    for (let i = 1; i <= cats; i++) {
        let foodGr = Number(input[index++]);

        if (foodGr >= 100 && foodGr < 200) {
            smallCats++;
            sumFood += foodGr;
        } else if (foodGr >= 200 && foodGr < 300) {
            bigCats++;
            sumFood += foodGr;
        } else if (foodGr >= 300 && foodGr < 400) {
            hugeCats++;
            sumFood += foodGr;
        }
    }

    let totalFoodKg = sumFood / 1000;
    let totalFoodPrice = totalFoodKg * 12.45;

    console.log(`Group 1: ${smallCats} cats.`);
    console.log(`Group 2: ${bigCats} cats.`);
    console.log(`Group 3: ${hugeCats} cats.`);
    console.log(`Price for food per day: ${totalFoodPrice.toFixed(2)} lv.`);
}

catFood(['6', '102','236', '123','399', '342','222', '']);

// catFood([ '10', '256', '348', '198', '322', '186', '294', '321', '100', '200', '300', '']);