function averageVal(input) {
    let index = 0;
    let juryCount = Number(input[index++]);
    let presentationCount = 0;
    let averageSum = 0;

    let presentationName = input[index++];

    while (presentationName !== 'Finish') {
        let presentationSum = 0;

        for (let i = 0; i < juryCount; i++) {
            let currentGrade = Number(input[index++]);
            presentationSum += currentGrade;
        }

        let presentationAverage = presentationSum / juryCount;

        console.log(`${presentationName} - ${(presentationAverage).toFixed(2)}.`);

        presentationCount++;
        averageSum += presentationAverage;
        presentationName = input[index++];
    }
    console.log(`Student's final assessment is ${(averageSum / presentationCount).toFixed(2)}.`);
}

averageVal(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);