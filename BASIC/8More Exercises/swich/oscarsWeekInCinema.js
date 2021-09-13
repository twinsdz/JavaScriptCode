function oscarWeek(filmName, salonType, ticketCount) {
    ticketCount = Number(ticketCount);
    let ticketPrice = 0;

    if (salonType === "normal") {
        switch (filmName) {
            case "A Star Is Born":
                ticketPrice = ticketCount * 7.50;
                break;
            case "Bohemian Rhapsody":
                ticketPrice = ticketCount * 7.35;
                break;
            case "Green Book":
                ticketPrice = ticketCount * 8.15;
                break;
            case "The Favourite":
                ticketPrice = ticketCount * 8.75;
                break;
        }
    } else if (salonType === "luxury") {
        switch (filmName) {
            case "A Star Is Born":
                ticketPrice = ticketCount * 10.50;
                break;
            case "Bohemian Rhapsody":
                ticketPrice = ticketCount * 9.45;
                break;
            case "Green Book":
                ticketPrice = ticketCount * 10.25;
                break;
            case "The Favourite":
                ticketPrice = ticketCount * 11.55;
                break;
        }
    } else if (salonType === "ultra luxury") {
        switch (filmName) {
            case "A Star Is Born":
                ticketPrice = ticketCount * 13.50;
                break;
            case "Bohemian Rhapsody":
                ticketPrice = ticketCount * 12.75;
                break;
            case "Green Book":
                ticketPrice = ticketCount * 13.25;
                break;
            case "The Favourite":
                ticketPrice = ticketCount * 13.95;
                break;
        }
    }

    console.log(`${filmName} -> ${ticketPrice.toFixed(2)} lv.`);

}

oscarWeek ("A Star Is Born", "luxury", "42");