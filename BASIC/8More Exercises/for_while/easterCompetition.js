function easterCompetition(input) {
    let index = 1;
    let breadCount = Number(input[0]);
    let inputLine = input[index++];
    

    let valuationSum = 0;
    let biggestVal = Number.MIN_SAFE_INTEGER;
    let bestBakerName = "";
    
    //for (let i = breadCount; i > 0; i--)

    for (let i = 1; i <= breadCount; i++) {
        let currentbakerName = inputLine;
        inputLine = input[index++];
        let currentValuationSum = 0;

        while (inputLine !== "Stop") {
            let valuation = Number(inputLine);
            currentValuationSum += valuation;
            inputLine = input[index++];
        }

        valuationSum = currentValuationSum;

        console.log(`${currentbakerName} has ${valuationSum} points.`);

        if (valuationSum > biggestVal) {
            biggestVal = valuationSum;
            bestBakerName = currentbakerName;
            console.log(`${bestBakerName} is the new number 1!`);
        }

        currentValuationSum = 0;
        inputLine = input[index++];
    }

    console.log(`${bestBakerName} won competition with ${biggestVal} points!`);
}

easterCompetition(['3', 'Chef Manchev', '10', '10', '10', '10', 'Stop', 'Natalie', '8', '2', '9', 'Stop', 'George', '9', '2', '4', '2', 'Stop']);

/* easterCompetition (['2', 'Chef Angelov', '9', '9', '9', 'Stop', 'Chef Rowe', '10', '10', '10', '10','Stop']); */