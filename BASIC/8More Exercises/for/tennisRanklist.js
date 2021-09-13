function tenis(input) {
    let index = 0;
    let tournamentCount = Number(input[index++]);
    let points = Number(input[index++]);
    let inputLine = input[index++];

    let avaragePoints = 0;
    let percentWin = 0;
    let games = 0;
    let currentPointsSum = 0;
    let winTournam = 0;

    for (let i = 2; i < input.length; i++) {
        inputLine = input[i];
        let currentPoints = 0;

        if (inputLine == 'W') {
            currentPoints = 2000;
            winTournam++;
        } else if (inputLine == 'F') {
            currentPoints = 1200;
        } else {
            currentPoints = 720;
        }

        currentPointsSum += currentPoints;
        games++;
    }
    points += currentPointsSum;
    avaragePoints = currentPointsSum / games;
    percentWin = (winTournam / tournamentCount) * 100;

    console.log(`Final points: ${Math.floor(points)}`);
    console.log(`Average points: ${Math.floor(avaragePoints)}`);
    console.log(`${percentWin.toFixed(2)}%`);
}

/* tenis (["5", "1400", "F", "SF", "W", "W", "SF"]); */

tenis(["4", "750", "SF", "W", "SF", "W"]);