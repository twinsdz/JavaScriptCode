function easterShop(...input) {
    let index = 0;
    let eggsNumber = Number(input[index++]);
    let command = input[index++];

    let soldEggs = 0;

    while (command !== 'Close') {
        let currentEggsNum = Number(input[index++]);

        if (command === "Buy" && currentEggsNum > eggsNumber) {
            console.log('Not enough eggs in store!');
            console.log(`You can buy only ${eggsNumber}.`);
            break;
        } else if (command === "Fill") {
            eggsNumber += currentEggsNum;

        } else if (command === "Buy" && currentEggsNum <= eggsNumber) {
            eggsNumber -= currentEggsNum;
            soldEggs += currentEggsNum;
        }
        command = input[index++];
    }
    if (command === 'Close') {
        console.log('Store is closed!');
        console.log(`${soldEggs} eggs sold.`);
    }
}

easterShop("13", "Buy", "8", "Fill", "3", "Buy", "10");

/* easterShop ("20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"); */