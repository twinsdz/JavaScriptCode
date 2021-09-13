function football(input) {
    let index = 0;
    let teamName = input[index++];
    let gamesNum = Number(input[index++]);
    let inputLine = input[index++];
    let wGamesSum = 0;
    let dGamesSum = 0;
    let lGamesSum = 0;
    let winnRatePercent = 0;
    let points = 0;


    for (let i = 2; i < input.length; i++) {
        inputLine = input[i];

        if (inputLine === 'W') {
            points += 3;
            wGamesSum++;
        } else if (inputLine === 'D') {
            points += 1;
            dGamesSum++;
        } else {
            lGamesSum++;
        }
        winnRatePercent = (wGamesSum / gamesNum) * 100;

    }
    if (gamesNum <= 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    } else {
        console.log(`${teamName} has won ${points} points during this season.`);
        console.log('Total stats:');
        console.log(`## W: ${wGamesSum}`);
        console.log(`## D: ${dGamesSum}`);
        console.log(`## L: ${lGamesSum}`);
        console.log(`Win rate: ${winnRatePercent.toFixed(2)}%`);
    }
}

/* football(['Liverpool', '10',
    'W', 'D',
    'D', 'W',
    'L', 'W',
    'D', 'D',
    'W', 'W']); */

/* football (['Barcelona', '7', 'W', 'D', 'L', 'L', 'W', 'W', 'D' ]);  */
football(['Chelsea', '0']);