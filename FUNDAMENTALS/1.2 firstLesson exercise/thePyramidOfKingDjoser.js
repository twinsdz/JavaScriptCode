/* function pyramid(...input) {
    let base = Number(input[0]);
    let increment = Number(input[1]);

    let finalHeight = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let rowCount = 0;


    while (base > 2) {
        rowCount++;
        let totalAria = base * base;
        let outerLayer = base * 4 - 4;
        let insideLayer = totalAria - outerLayer;
        stone += insideLayer;

        if (rowCount % 5 === 0) {
            lapisLazuli += outerLayer;
        } else {
            marble += outerLayer;
        }

        base -= 2;
    }

    rowCount++;
    let gold = base * base;

    stone *= increment;
    marble *= increment;
    lapisLazuli *= increment;
    gold *= increment;
    finalHeight = rowCount * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight)}`);
}


pyramid(1, 1); */

function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let iner = 0;
    let outer = 0;
    let step = 0;
 
    for (let i = base; i >= 1; i -= 2) {
        step++;
        if (step % 5 == 0 && i > 2) {
            iner = (i - 2) * (i - 2);
            stone += iner * increment;
            outer = (4 * i) - 4;
            lapis += outer * increment;
        } else if (i <= 2) {
            gold += (i * i) * increment;
        } else {
            iner = (i - 2) * (i - 2);
            stone += iner * increment;
            outer = (4 * i) - 4;
            marble += outer * increment;
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}

// pyramid(1, 1);
pyramid(11, 1);