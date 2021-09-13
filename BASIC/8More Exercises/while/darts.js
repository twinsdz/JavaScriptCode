function darts(...input) {
    let index = 0;
    let gamerName = input[index++];
    let points = 301;
    let inputLine = input[index++];
    let failCount = 0;
    let succsessCount = 0;

    while (inputLine !== "Retire") {
        let sector = inputLine;
        let currentPoints = Number(input[index++]);

        if (sector === "Double") {
            currentPoints = currentPoints * 2;
        } else if (sector === "Triple") {
            currentPoints = currentPoints * 3;
        }

        if (points >= currentPoints) {
            succsessCount++;
            points -= currentPoints;
        } else {
            failCount++;
        }

        if (points === 0) {
            console.log(`${gamerName} won the leg with ${succsessCount} shots.`);
            break;
        }

        inputLine = input[index++];
    }

    if (inputLine === "Retire") {
        console.log(`${gamerName} retired after ${failCount} unsuccessful shots.`);
    } 
}

/* darts ("Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"); */

darts ("Stephen Bunting", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "7", "Single", "12", "Double", "1", "Single","1");

/* darts("Rob Cross", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "20", "Triple", "20", "Double", "5", "Triple", "10", "Double", "6", "Retire"); */