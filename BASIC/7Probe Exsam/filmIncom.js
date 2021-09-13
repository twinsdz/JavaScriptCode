function filmIncome(filmName, dayCount, tickets, ticketPrice, studioPercent) {
    dayCount = Number(dayCount);
    tickets = Number(tickets);
    ticketPrice = Number(ticketPrice);
    studioPercent = Number(studioPercent);

    let sumPerDay = tickets * ticketPrice;
    let totalIncome = dayCount * sumPerDay;
    let studioIncome = totalIncome - ((totalIncome * studioPercent) / 100);

    console.log(`The profit from the movie ${filmName} is ${(studioIncome).toFixed(2)} lv.`);
}

filmIncome("The Programmer", "20", "500", "7.50", "7");