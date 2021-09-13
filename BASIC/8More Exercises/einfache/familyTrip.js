function familyTrip(budget, nightsNum, pricePerNight, percentMoorExpenses) {
    budget = Number(budget);
    nightsNum = Number(nightsNum);
    pricePerNight = Number(pricePerNight);
    percentMoorExpenses = Number(percentMoorExpenses);

    let totalPriceNights = nightsNum * pricePerNight;

    if (nightsNum > 7) {
        totalPriceNights *= 0.95;
    }

    let budgetForMoorExpenses = (budget * percentMoorExpenses) / 100;

    let totalExpenses = totalPriceNights + budgetForMoorExpenses;

    if (totalExpenses <= budget) {
        console.log(`Ivanovi will be left with ${(budget - totalExpenses).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(totalExpenses - budget).toFixed(2)} leva needed.`);
    }
}

familyTrip("800.50", "8", "100", "2");