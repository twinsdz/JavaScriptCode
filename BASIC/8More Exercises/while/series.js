function series(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let seriesCount = Number(input[index++]);


    while (index < input.length) {
        let serieName = input[index++];
        let seriePrice = Number(input[index]);

        if (serieName === "Thrones") {
            seriePrice *= 0.5;
        } else if (serieName === 'Lucifer') {
            seriePrice *= 0.6;
        } else if (serieName === 'Protector') {
            seriePrice *= 0.70;
        } else if (serieName === 'TotalDrama') {
            seriePrice *= 0.80;
        } else if (serieName === 'Area') {
            seriePrice *= 0.90;
        }

        budget -= seriePrice;
        serieName = input[index++];
        seriePrice = 0;
    }

    if (budget >= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    } else {
        budget = Math.abs(budget);
        console.log(`You need ${budget.toFixed(2)} lv. more to buy the series!`);
    }
}

/* series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]); */

series (["10", "4", "Thrones", "8", "Lucifer", "5", "Stoned", "4", "MK", "12"]);