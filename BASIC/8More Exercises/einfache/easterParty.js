function easterParty(guests, pricePerPerson, budget) {
    guests = Number(guests);
    pricePerPerson = Number(pricePerPerson);
    budget = Number(budget);

    let cakePrice = budget - (budget * 0.90);
    let priceForAll = guests * pricePerPerson;

    if (guests >= 10 && guests <= 15) {
        priceForAll *= 0.85;
    } else if (guests >= 15 && guests <= 20) {
        priceForAll *= 0.80;
    } else if (guests > 20) {
        priceForAll *= 0.75;
    }

    let totalPrice = priceForAll + cakePrice;

    if (budget >= totalPrice) {
        console.log(`It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`);
    }
}

/* easterParty ("18", "30", "450"); */
easterParty("8", "25", "340");