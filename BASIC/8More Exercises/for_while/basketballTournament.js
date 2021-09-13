function basketball (input){
    let index = 0;
    let tournamentName = input[index++];

    let winCount = 0;
    let lostCount = 0;
    let winPercent = 0;
    let lostPercent = 0;
    let gameSum = 0;

    while (tournamentName !== "End of tournaments"){
        let gamesCount = Number (input[index++]);
        let gameNumber = 0;

        for (let i = 1; i <= gamesCount; i++){
            let desisPoints = Number (input[index++]);
            let rivalPoints = Number (input[index++]);
            let difference = 0;
            

            if (desisPoints > rivalPoints){
                winCount++;
                gameNumber++;
                difference = desisPoints - rivalPoints;
                console.log(`Game ${gameNumber} of tournament ${tournamentName}: win with ${difference} points.`);
            } else {
                lostCount++;
                gameNumber++;
                difference = rivalPoints - desisPoints;
                console.log(`Game ${gameNumber} of tournament ${tournamentName}: lost with ${difference} points.`);
            }
            gameSum = winCount + lostCount;
        }
        tournamentName = input[index++];
    }

    winPercent = (winCount / gameSum) * 100;
    lostPercent = (lostCount / gameSum) * 100;

    console.log(`${winPercent.toFixed(2)}% matches win`);
    console.log(`${lostPercent.toFixed(2)}% matches lost`);

}

/* basketball([ 'Dunkers', '2', '75', '65', '56', '73', 'Fire Girls', '3', '67', '34', '83', '98', '66', '45', 'End of tournaments', '']); */

basketball(['Ballers', '3', '87', '63', '56', '65', '75', '64', 'Sharks',  '4', '64', '76', '65', '86', '68', '99', '45', '78', 'End of tournaments', '']);