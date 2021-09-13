function ticket(input) {
    let day = input[0];
    ticketPrice = 0;
    switch (day) {
        case "Monday":
        case "Tuesday":
            ticketPrice = 12;
            break;
        case "Wednesday":
        case "Thursday":
            ticketPrice = 14;
            break;
        case "Friday":
            ticketPrice = 12;
            break;
        case "Saturday":
        case "Sunday":
            ticketPrice = 16;
            break;
        default:
            console.log("Error");
            break;
    }
    console.log(ticketPrice);
}

ticket(["Monday"]);
ticket(["Friday"]);
ticket(["Sunday"]);