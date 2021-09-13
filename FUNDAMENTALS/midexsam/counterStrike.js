function solve(input) {
    let index = 0;
    let energy = Number(input[index++]);
    let wonBattles = 0;
    let inputLine = input[index++];

    while (inputLine !== "End of battle") {
        let currentDistance = Number(inputLine);

        if (energy < currentDistance) {
            return `Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`;
        } else {
            energy -= currentDistance;
            wonBattles++;

            if (wonBattles % 3 === 0) {
                energy += wonBattles;
            }
        }

        inputLine = input[index++];
    }

    if (inputLine === "End of battle") {
        return `Won battles: ${wonBattles}. Energy left: ${energy}`;
    }
}

console.log(solve(['100', '10', '10', '10', '1', '2', '3', '73', '10']));

console.log(solve(['200', '54', '14', '28', '13', 'End of battle']));

