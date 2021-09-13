function bankBalance(input) {
    let total = 0;
    let index = 0;
    let command = input[index++];

    while (command !== "NoMoreMoney") {
        let currentAmount = Number(command);

        if (currentAmount < 0) {
            console.log("Invalid operation!");
            break;
        }

        total += currentAmount;
        console.log(`Increase: ${currentAmount.toFixed(2)}`);
        command = input[index++];

    }
    console.log(`Total: ${total.toFixed(2)}`);
}

bankBalance(["120", "45.55", "-150"]);