function softUniReception(input) {
    let allAnswerPerHour = 0;
    let allQuestion = Number(input[3]);
    let hourCount = 0;

    // allAnswerPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);

    for (let i = 0; i < 3; i++) {
        let employeeEfficiency = Number(input[i]);
        allAnswerPerHour += employeeEfficiency;
    }

    while (allQuestion > 0) {
        allQuestion -= allAnswerPerHour;
        hourCount++;

        if (hourCount % 4 === 0) {
            hourCount++;
        }
    }
    console.log(`Time needed: ${hourCount}h.`);
}

softUniReception(['5', '6', '4', '20']);

softUniReception(['1', '2', '3', '45']);
softUniReception(['3','2','5','40']);