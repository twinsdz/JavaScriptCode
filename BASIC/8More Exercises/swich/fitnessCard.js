function fitnesCard(money, gender, age, sport) {
    money = Number(money);
    age = Number(age);
    let cardPrice = 0;

    if (gender === "m") {
        switch (sport) {
            case 'Gym':
                cardPrice = 42;
                break;
            case 'Boxing':
                cardPrice = 41;
                break;
            case 'Yoga':
                cardPrice = 45;
                break;
            case 'Zumba':
                cardPrice = 34;
                break;
            case 'Dances':
                cardPrice = 51;
                break;
            case 'Pilates':
                cardPrice = 39;
                break;
        }
    } else if (gender === "f") {
        switch (sport) {
            case 'Gym':
                cardPrice = 35;
                break;
            case 'Boxing':
                cardPrice = 37;
                break;
            case 'Yoga':
                cardPrice = 42;
                break;
            case 'Zumba':
                cardPrice = 31;
                break;
            case 'Dances':
                cardPrice = 53;
                break;
            case 'Pilates':
                cardPrice = 37;
                break;
        }
    }
    if (age <= 19) {
        cardPrice *= 0.80;
    }

    if (money >= cardPrice) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${Math.abs(money - cardPrice).toFixed(2)} more.`);
    }
}

/* fitnesCard("50", "m", "23", "Gym"); */
fitnesCard("20", "f", "15", "Yoga");