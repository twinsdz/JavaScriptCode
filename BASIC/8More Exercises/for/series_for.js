function series(input){
    let budget = Number(input[0]);
    let seriesCount = Number(input[1]);
    let counter = 2;

    for (let i = 1; i <= seriesCount; i++){
        let serieName = input[counter++];
        let seriePrice = Number(input[counter++]);

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
        seriePrice = 0;
    }

    if (budget >= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    } else {
        budget = Math.abs(budget);
        console.log(`You need ${budget.toFixed(2)} lv. more to buy the series!`);
    }
}

/* series (["10", "4", "Thrones", "8", "Lucifer", "5", "Stoned", "4", "MK", "12"]); */

series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);