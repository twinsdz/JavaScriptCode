function balls(input) {
    let num = Number(input[0]);
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherCollorBalls = 0;
    let points = 0;

    for (let i = 1; i <= num; i++) {
        let currentCollor = input[i];

        if (currentCollor === "red") {
            points += 5;
            redBalls++;
        } else if (currentCollor === "orange") {
            points += 10;
            orangeBalls++;
        } else if (currentCollor === "yellow") {
            points += 15;
            yellowBalls++;
        } else if (currentCollor === "white") {
            points += 20;
            whiteBalls++;
        } else if (currentCollor === "black") {
            points = Math.floor(points / 2);
            blackBalls++;
        } else {
            otherCollorBalls++;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Points from red balls: ${redBalls}`);
    console.log(`Points from orange balls: ${orangeBalls}`);
    console.log(`Points from yellow balls: ${yellowBalls}`);
    console.log(`Points from white balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherCollorBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}

// balls(['3', 'white', 'black', 'pink', '']);

// balls ([ '5', 'red', 'red', 'ddd', 'ddd', 'ddd' ]);

balls([
    '10', 'white',
    'white', 'ee',
    'red', 'orange',
    'red', 'black',
    'black', 'black',
    'black'
]);