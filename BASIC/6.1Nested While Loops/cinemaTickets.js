/* function solve(input) {
    let index = 0;
    let standartTickets = 0;
    let studentTickets = 0;
    let kidsTickets = 0;

    let inputLine = input[index++];

    while (inputLine !== "Finish") {
        let mooveName = inputLine;
        let ticketCount = Number(input[index++]);
        let availableTickets = ticketCount;
        let ticketType = input[index++];

        while (ticketType !== "End") {

            if (ticketType === "standard") {
                standartTickets++;
            } else if (ticketType === 'kid') {
                kidsTickets++;
            } else {
                studentTickets++;
            }

            availableTickets--;

            if (availableTickets === 0) {
                break;
            }

            ticketType = input[index++];
        }

        let boughtTickets = ticketCount - availableTickets;
        let percent = boughtTickets / ticketCount * 100;
        console.log(`${mooveName} - ${percent.toFixed(2)}% full.`);

        inputLine = input[index++];
    }

    let totalTickets = standartTickets + studentTickets + kidsTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);

}

solve(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]); */

function solve(input) {
    let index = 0;
    let filmName = input[index++];
    
    let totalStudent = 0;
    let totalStandart = 0;
    let totalKids = 0;

    while (filmName !== 'Finish') {
        let countTickets = Number(input[index++]);
        let soldTickets = 0;
        let availableTickets = countTickets;
        let typeTicket = input[index++];

        while (typeTicket !== 'End') {

            if (typeTicket === 'student') {
                totalStudent++;
            } else if (typeTicket === 'standard') {
                totalStandart++;
            } else {
                totalKids++;
            }
            availableTickets--;
            if (availableTickets == 0) {
                break;
            }
            soldTickets = countTickets - availableTickets;
            typeTicket = input[index++];
        }
        console.log(`${filmName} - ${((soldTickets / countTickets) * 100).toFixed(2)}% full.`);
        filmName = input[index++];
    }

    let totalSoldTickets = totalStandart + totalStudent + totalKids;
    console.log(`Total tickets: ${totalSoldTickets}`);
    console.log(`${((totalStudent / totalSoldTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((totalStandart / totalSoldTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((totalKids / totalSoldTickets) * 100).toFixed(2)}% kids tickets.`);
}

solve(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);

/* solve(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]); */