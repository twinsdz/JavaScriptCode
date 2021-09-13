function gameName(input) {
    let index = 0;
    let inputLine = input[index++];
    let winnerPoints = Number.MIN_SAFE_INTEGER;
    let winnerName = "";
    // let secondWinner = "";


    while (inputLine !== "Stop") {
        let gamerName = inputLine;
        let currentPointsSum = 0;
        

        for (let i = 0; i < gamerName.length; i++) {
            let gamerNumber = Number(input[index++]);
            let charCodeOfName = gamerName.charCodeAt(i);
            
            if (charCodeOfName == gamerNumber) {
                currentPointsSum += 10;
            } else {
                currentPointsSum += 2;
            }

            if (currentPointsSum >= winnerPoints) {
                winnerPoints = currentPointsSum;
                winnerName = gamerName;
            }
            
        }

        inputLine = input[index++];
    }
    console.log(`The winner is ${winnerName} with ${winnerPoints} points!`);
}


gameName(['Ivan', '73', '20', '98', '110', 'Ivo', '80', '65', '87', 'Stop']);

/* gameName ([ 'Pesho', '124', '34', '111', '97', '99', 'Gosho', '98',  '124', '88', '76', '18', 'Stop']); */