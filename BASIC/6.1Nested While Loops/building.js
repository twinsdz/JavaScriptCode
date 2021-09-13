/* function building(input) {
    let i = 0;
    let floors = Number(input[i++]);
    let realEstates = Number(input[i++]);

    for (let i = floors; i > 0; i--) {
        let result = "";
        for (let j = 0; j < realEstates; j++) {
            let letter;

            if (i == floors) {
                letter = "L";
            } else {
                if (i % 2 == 0) {
                    letter = "O";
                } else {
                    letter = "A";
                }
            }
            result += `${letter}${i}${j} `;
        }
        console.log(`${result}`);
    }
}

building(["6", "4"]); */

function building(input) {
    let floorNum = 0;
    let floorCount = Number(input[0]);
    let propertyNum = 0;
    let propertyCount = Number(input[1]);
    

    for (let i = floorCount; i > 0; i--) {
        let letter = '';
        let result = [];
        for (let j = 0; j < propertyCount; j++) {
            floorNum = i;
            propertyNum = j;
            if (i === floorCount) {
                letter = 'L';
            } else {
                if (i % 2 === 0) {
                    letter = 'O';
                } else {
                    letter = 'A';
                }
            }
            result.push(`${letter}${floorNum}${propertyNum}`);
        }
        console.log(result.join(' '));
    }
}

building(["6", "4"]);