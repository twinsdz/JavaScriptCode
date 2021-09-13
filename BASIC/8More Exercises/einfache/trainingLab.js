function trainingLab(input) {

    let height = Number(input[0]) * 100; // in cm
    let widht = Number(input[1]) * 100; // in cm

    let freeWidht = widht - 100;
    let countDesksRow = Math.floor(freeWidht / 70);
    let conutDesksColumn = Math.floor(height / 120);
    let totalSeets = (countDesksRow * conutDesksColumn) - 3;

    console.log(totalSeets);

}

trainingLab(["15", "8.9"]);