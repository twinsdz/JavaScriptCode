function goldMine(input) {
    let index = 0;
    let locations = Number(input[index++]);

    for (let i = 1; i <= locations; i++) {
        let expectedAverageGold = Number(input[index++]);
        let workDays = Number(input[index++]);
        let sumGoldPerDay = 0;

        for (let j = 1; j <= workDays; j++) {
            let currentGold = Number(input[index++]);
            sumGoldPerDay += currentGold;
        }
        let averageGoldPerDay = sumGoldPerDay / workDays;

        if (averageGoldPerDay >= expectedAverageGold) {
            console.log(`Good job! Average gold per day: ${averageGoldPerDay.toFixed(2)}.`);
        } else {
            // let goldNeeded = Math.abs(ex)
            console.log(`You need ${(expectedAverageGold - averageGoldPerDay).toFixed(2)} gold.`);
        }
    }
}

// goldMine(['2', '10', '3', '10', '10', '11', '20', '2', '20', '10']);

// goldMine([ '1', '5', '3', '10', '1', '3' ]);

goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);