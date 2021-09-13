function snooker(championshRound, ticketType, ticketCount, photoWithCup){
    ticketCount = Number(ticketCount);
    let totalPrice = 0;

    if (championshRound === "Quarter final") {
        switch (ticketType) {
            case "Standard":
                totalPrice = ticketCount * 55.50;
                break;
            case "Premium":
                totalPrice = ticketCount * 105.20;
                break;
            case "VIP":
                totalPrice = ticketCount * 118.90;
                break;
        }
    } else if (championshRound === "Semi final") {
        switch (ticketType) {
            case "Standard":
                totalPrice = ticketCount * 75.88;
                break;
            case "Premium":
                totalPrice = ticketCount * 125.22;
                break;
            case "VIP":
                totalPrice = ticketCount * 300.40;
                break;
        }
    } else if (championshRound === "Final") {
        switch (ticketType) {
            case "Standard":
                totalPrice = ticketCount * 110.10;
                break;
            case "Premium":
                totalPrice = ticketCount * 160.66;
                break;
            case "VIP":
                totalPrice = ticketCount * 400;
                break;
        }
    }

    if (totalPrice > 4000 && photoWithCup === 'Y' || totalPrice > 4000 && photoWithCup === 'N') {
        totalPrice = totalPrice * 0.75;
    } else if (totalPrice >= 2500 && photoWithCup === 'Y') {
        totalPrice = (totalPrice * 0.90) + (ticketCount * 40);
    } else if (totalPrice > 2500 && photoWithCup === 'N') {
        totalPrice *= 0.90;
    } else if (totalPrice <= 2500 && photoWithCup === 'Y') {
        totalPrice += (ticketCount * 40);
    }
    console.log(`${totalPrice.toFixed(2)}`);

}

snooker("Final", "Premium", "25", "Y");

snooker("Semi final", "VIP", "9", "Y");

snooker("Quarter final", "Standard", "11", "N");