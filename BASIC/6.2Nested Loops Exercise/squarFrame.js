function drawSquareFrame(input) {
    input = Number(input);
    let topRow = "+";

    for (let top = 0; top < input - 2; top++) {
        topRow += "-";
    }

    topRow += "+";
    console.log(`${topRow}`);

    for (let mid = 0; mid < input - 2; mid++) {
        let middleRow = "|";

        for (let j = 0; j < input - 2; j++) {
            middleRow += "-";
        }

        middleRow += "|";

        console.log(`${middleRow}`);
    }

    let bottomRow = "+";

    for (let bottom = 0; bottom < input - 2; bottom++) {
        bottomRow += "-";
    }

    bottomRow += "+";
    console.log(`${bottomRow}`);

}

drawSquareFrame(4);