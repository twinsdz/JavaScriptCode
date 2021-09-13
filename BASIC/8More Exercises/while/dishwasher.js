function dishwasher (input){
    let index = 0;
    let countBottle = Number (input[index++]);
    let totalMlDetergent = countBottle * 750;
    let inputLine = input[index++];
    let cleanDishes = 0;
    let cleanPots = 0;
    let dishwasherCounter = 0;
    
    while(inputLine !== 'End'){
        if (index > input.length || totalMlDetergent < 0){
            break;
        }
        dishwasherCounter++;
        let currentWare = Number (inputLine);

        if (dishwasherCounter % 3 === 0){
            cleanPots += currentWare;
            totalMlDetergent -= currentWare * 15;
        } else {
            cleanDishes += currentWare;
            totalMlDetergent -= currentWare * 5;
        }
        inputLine = input[index++];
    }

    if (totalMlDetergent >= 0){
        console.log(`Detergent was enough!`);
        console.log(`${cleanDishes} dishes and ${cleanPots} pots were washed.`);
        console.log(`Leftover detergent ${totalMlDetergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(totalMlDetergent)} ml. more necessary!`);
    }
}

// dishwasher (["2", "53", "65", "55", "End"]);

dishwasher (["1", "10", "15", "10", "12", "13", "30"]);