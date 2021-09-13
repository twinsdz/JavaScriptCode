function suitcasesLoad(input) {
    let index = 0;
    let luggageBoot = Number(input[index++]);
    let inputLine = input[index++];
    let counterLoaded = 0;
    let ifEnoughSpace = true;


    while (inputLine !== 'End') {
        let currentSuitcase = Number(inputLine);
        
        if ((counterLoaded + 1) % 3 == 0) {
            currentSuitcase *= 1.10;
            // currentSuitcase +=  currentSuitcase * 0.10;
        }

        luggageBoot -= currentSuitcase;

        if (luggageBoot < 0) {
            ifEnoughSpace = false;
            break;
        }

        counterLoaded++;
        inputLine = input[index++];
    }

    if (ifEnoughSpace) {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }

    console.log(`Statistic: ${counterLoaded} suitcases loaded.`);
}

 suitcasesLoad(['550', '100', '252', '72', 'End']);

/* suitcasesLoad (['700.5', '180', '340.6', '126', '220']); */

/* suitcasesLoad(['1200.2', '260', '380.5', '125.6', '305', 'End' ]); */  