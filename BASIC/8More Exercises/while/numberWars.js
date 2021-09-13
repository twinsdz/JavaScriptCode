function numberWars(...input) {
    let index = 0;
    let gamerName1 = input[index++];
    let gamerName2 = input[index++];
    let inputLine = input[index++];
    let gamer1Sum = 0;
    let gamer2Sum = 0;


    while (inputLine !== "End of game") {
        let gamerCard1 = Number(inputLine);
        let gamerCard2 = Number(input[index++]);

        if (gamerCard1 > gamerCard2) {
            gamer1Sum = gamer1Sum + (gamerCard1 - gamerCard2);
        } else if (gamerCard2 > gamerCard1) {
            gamer2Sum = gamer2Sum + (gamerCard2 - gamerCard1);
        } else if (gamerCard1 == gamerCard2){

            console.log("Number wars!");
            gamerCard1 = Number(input[index++]);
            gamerCard2 = Number(input[index++]);
            
            if (gamerCard1 > gamerCard2) {
                console.log(`${gamerName1} is winner with ${gamer1Sum} points`);
                break;
            } else {
                console.log(`${gamerName2} is winner with ${gamer2Sum} points`);
                break;
            }
        }

        inputLine = input[index++];
    }

    if (inputLine === "End of game") {
        console.log(`${gamerName1} has ${gamer1Sum} points`);
        console.log(`${gamerName2} has ${gamer2Sum} points`);
    }
}

/* numberWars("Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"); */

/* numberWars ("Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game");
 */
numberWars("Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2");