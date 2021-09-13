function bankBalance(arr) {
    let sum = 0;
    let index = 0;
    let command = arr[index++];

    while (command !== "NoMoreMoney") {
        command = Number(command);

        if (command > 0) {
            sum += command;
            console.log(`Increase: ${command.toFixed(2)}`);
        } else {
            console.log("Invalid operation!");
            break;
        }
       command = arr[index++];
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

bankBalance(["5.51", "69.42", "100", "NoMoreMoney"]);