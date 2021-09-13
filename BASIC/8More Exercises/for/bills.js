function bills(input) {
    let index = 0;
    let month = Number(input[index++]);
    let totalElectr = 0;
    let totalWater = month * 20;
    let totalInternet = month * 15;
    let totalOther = 0;
    let averagePerMonth = 0;

    for (let i = 1; i <= month; i++) {
        let currentElectr = Number(input[index++]);
        let currentOther = (currentElectr + 20 + 15) * 1.20;

        totalElectr += currentElectr;
        totalOther += currentOther;
    }

    averagePerMonth = (totalElectr + totalWater + totalInternet + totalOther) / month;
    console.log(`Electricity: ${totalElectr.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${averagePerMonth.toFixed(2)} lv`);
}

// bills([ '5', '68.63', '89.25', '132.53', '93.53', '63.22' ]);

bills(['8', '123.54', '231.54', '140.23','100', '122.4', '430', '178.52', '64.2']);