function easterEggs(input) {
    let index = 0;
    let eggsCount = Number(input[index++]);
    let eggColor = input[index++];

    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;
    let biggest = Number.MIN_SAFE_INTEGER;

    let biggestColor = "";



    for (let i = 1; i < input.length; i++) {
        eggColor = input[i];

        if (eggColor === "red") {
            redEggs++;
        } else if (eggColor === "orange") {
            orangeEggs++;
        } else if (eggColor === "blue") {
            blueEggs++;
        } else if (eggColor === "green") {
            greenEggs++;
        } else {
            break;
        }

        let eggsNumbs = [redEggs, orangeEggs, blueEggs, greenEggs];
        
        for (let j = 0; j < eggsNumbs.length; j++) {
            let currentNumber = eggsNumbs[j];
            if (currentNumber > biggest) {
                biggest = currentNumber;

            }
        }

        if (biggest == redEggs) {
            biggestColor = 'red';
        } else if (biggest == orangeEggs) {
            biggestColor = 'orange';
        } else if (biggest == blueEggs) {
            biggestColor = 'blue';
        } else if (biggest == greenEggs) {
            biggestColor = 'green';
        }

    }

    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${biggest} -> ${biggestColor}`);
}

/* easterEggs(['7', 'orange', 'blue', 'green', 'green', 'blue', 'red', 'green', '']); */

easterEggs(['4', 'blue', 'red', 'blue', 'orange', '', '']);