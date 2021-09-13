function solve(input) {
    let biscuitsPerDay = Number(input[0]);
    let workers = Number(input[1]);
    let competingFactoryBiscuits = Number(input[2]);

    let totalForMonth = 0;

    for (let i = 1; i <= 30; i++) {
        let productionAllWorkers = biscuitsPerDay * workers;
        if (i % 3 === 0) {
            productionAllWorkers *= 0.75;
        }
        totalForMonth = Math.floor(totalForMonth + productionAllWorkers);
    }

   
    let difference = totalForMonth - competingFactoryBiscuits;
    let percent = difference / competingFactoryBiscuits * 100;

    console.log(`You have produced ${totalForMonth} biscuits for the past month.`);

    if (difference < 0) {
        percent = Math.abs(percent);
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
    } else {
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
    }
}

solve(["78",
    "8",
    "16000"
]);

solve(["65",
    "12",
    "26000"
]);

// solve(["1",
//     "1",
//     "26000"
// ]);