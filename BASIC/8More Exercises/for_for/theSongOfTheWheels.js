function songOfThewheels(input) {
    let m = Number(input[0]);
    let count = 0;
    let string = "";
    let result = "";
    let magicNum = '';

    for (let i = 1; i <= 9; i++) {

        for (let j = 1; j <= 9; j++) {

            for (let k = 1; k <= 9; k++) {

                for (let l = 1; l <= 9; l++) {

                    if (i < j && k > l && (i * j) + (k * l) == m) {
                        string = `${i}${j}${k}${l} `;
                        count++;
                        result += string;
                        if (count == 4) {
                            magicNum = string;
                        }
                        break;
                    }
                }
            }
        }
    }
    if (result != "" && magicNum != "") {
        console.log(`${result}`);
        console.log(`Password: ${magicNum}`);
    } else if (result != "" && magicNum == '') {
        console.log(`${result}`);
        console.log('No!');
    } else {
        console.log('No!');
    }
}

songOfThewheels(['11']);

// songOfThewheels(['139']);