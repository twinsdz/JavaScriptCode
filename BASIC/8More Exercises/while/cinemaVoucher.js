function cinemaVoucher(...input) {
    let index = 0;
    let voucherValue = Number(input[index++]);
    let itemPrice = 0;
    let inputLine = input[index++];
    let ticketCount = 0;
    let anotherItem = 0;

    while (inputLine !== "End") {
        itemPrice = 0;

        if (inputLine.length > 8) {
            for (let i = 0; i < 2; i++) {
                let charValue = inputLine.charCodeAt(i);
                itemPrice += charValue;
            }

            if (itemPrice > voucherValue) {
                break;
            }
            ticketCount++;
        } else {
            for (let i = 0; i < 1; i++) {
                let charValue = inputLine.charCodeAt(i);
                itemPrice = charValue;

            }
            if (itemPrice > voucherValue) {
                break;
            }
            anotherItem++;
        }

        if (itemPrice > voucherValue) {
            break;
        }

        voucherValue -= itemPrice;
        inputLine = input[index++];
    }
    console.log(`${ticketCount}`);
    console.log(`${anotherItem}`);
}


cinemaVoucher("300", "Captain Marvel", "popcorn", "Pepsi");

/* cinemaVoucher("1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"); */