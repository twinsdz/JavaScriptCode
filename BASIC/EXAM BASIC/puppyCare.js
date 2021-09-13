function puppCare(input) {
    let index = 0;
    let foodGr = Number(input[index++]) * 1000;
    let inputLine = input[index++];
    let eatenFoot = 0;

    while (inputLine !== 'Adopted') {
        let currentFood = Number(inputLine);
        eatenFoot += currentFood;
        inputLine = input[index++];
    }

    if (eatenFoot <= foodGr) {
        console.log(`Food is enough! Leftovers: ${foodGr - eatenFoot} grams.`);
    } else {
        let foodNeeded = Math.abs(eatenFoot - foodGr);
        console.log(`Food is not enough. You need ${foodNeeded} grams more.`);
    }
}

// puppCare (['4', '130', '345', '400', '180', '230', '120', 'Adopted','', '']);

//   puppCare ([ '3', '1000', '1000', '1000', 'Adopted', '', '' ]);

puppCare([ '2', '999', '456', '999', '999', '123', '456', 'Adopted', '', '']);