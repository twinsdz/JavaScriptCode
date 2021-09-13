function movieStars(...input) {
    let index = 0;
    let budget = Number(input[index++]);
    let actorFee = 0;
    let inputLine = input[index++];


    while (inputLine !== "ACTION") {
        let lengthOfActorName = Number(inputLine.length);
        actorFee = 0;

        if (lengthOfActorName > 15) {
            actorFee = budget * 0.20;
        } else {
            actorFee = Number(input[index++]);
        }

        budget = budget - actorFee;
        inputLine = input[index++];

        if (budget <= 0) {
            break;
        }
    }

    if (budget <= 0) {
        budget = Math.abs(budget);
        console.log(`We need ${budget.toFixed(2)} leva for our actors.`);
    } else {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
}

/* movieStars("90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"); */

/* movieStars("1000", "John Cena", "800", "Freddy Kim", "3000", "ACTION"); */

/* movieStars ("600000", "Michael Aniston", "400000", "Pamela Anderson", "200010", "ACTION"); */

/* movieStars ("2000000", "Krasi Radkov", "50000", "Lyben Karakostov", "Brat Pitt", "1500000", "Tom Hardy", "900000", "ACTION"); */

movieStars("2000000.5", "Jet Lee", "1000000", "Jackie Chan", "1000000", "ACTION");