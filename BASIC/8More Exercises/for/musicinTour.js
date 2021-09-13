/* function musicTour(input) {
    let index = 0;
    let fee = Number(input[index++]);
    let germanFee = Number(input[index++]);
    let inputLine = input[index++];
    let feeInEuro = fee * 0.92;

    while (inputLine !== "Home") {
        let location = inputLine;
        let expense = Number(input[index++]);

        if (location === "Germany") {
            feeInEuro -= expense;
        } else {
            expense *= 0.92;
            feeInEuro -= expense;
        }
        inputLine = input[index++];
    }

    feeInEuro *= 0.90;
    germanFee *= 0.56;

    if (feeInEuro > germanFee){
        console.log(`You earned ${(feeInEuro - germanFee).toFixed(2)} € more, than in Germany!`);
    } else {
        console.log(`It was bad deal! You earned ${(germanFee - feeInEuro).toFixed(2)} €, less than in Germany!`);
    }
}

// musicTour(["2100", "1904", "Germany", "45", "Germany", "48", "CH", "40", "CH", "160", "CH", "21", "CH", "65", "CH", "21", "Germany", "48.50", "Home"]);

musicTour(["2100", "2500", "Germany", "45", "Germany", "48", "CH", "40", "CH", "160", "CH", "21", "CH", "65", "CH", "21", "Germany", "48.50", "Home"]); */

function musicTour(input) {
    let index = 0;
    let fee = Number(input[index++]);
    let germanFee = Number(input[index++]);
    let earnedSumForYear = Number(input[index++]);
    let inputLine = input[index++];
    let feeInEuro = fee * 0.92;

    while (inputLine !== "Home") {
        let location = inputLine;
        let expense = Number(input[index++]);

        if (location === "Germany") {
            feeInEuro -= expense;
        } else {
            expense *= 0.92;
            feeInEuro -= expense;
        }
        inputLine = input[index++];
    }

    feeInEuro *= 0.90;
    chEarnedPerPerson = earnedSumForYear / 2;
    
    if(chEarnedPerPerson >= 2300){
        feeInEuro *= 0.90;
    }

    germanFee *= 0.56;

    if (feeInEuro > germanFee){
        console.log(`You earned ${(feeInEuro - germanFee).toFixed(2)}€ more, than in Germany!`);
    } else {
        console.log(`It was bad deal! You earned ${(germanFee - feeInEuro).toFixed(2)}€, less than in Germany!`);
    }
}

musicTour(["2100", "1904", "5200", "Germany", "45", "Germany", "48", "CH", "40", "CH", "160", "CH", "21", "CH", "65", "CH", "21", "Germany", "48.50", "Home"]);

// musicTour(["2100", "2500", "1200", "Germany", "45", "Germany", "48", "CH", "40", "CH", "160", "CH", "21", "CH", "65", "CH", "21", "Germany", "48.50", "Home"]);