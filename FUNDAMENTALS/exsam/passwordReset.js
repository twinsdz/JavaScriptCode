function solve(input) {
    let str = input.shift();
    let index = 0;
    let inputLine = input[index++];

    while (inputLine !== 'Done') {
        let [command, token1, token2] = inputLine.split(' ');
        let result = '';
        if (command === 'TakeOdd') {
            for (let i = 1; i < str.length; i += 2) {
                let char = str[i];
                result += char;
            }
            console.log(result);
        } else if (command === 'Cut') {
            // рязане на стринг
            let indexOf = Number(token1);
            let length = Number(token2);
            let leftStr = str.substring(0, indexOf);
            let rightStr = str.substring(indexOf + length);
            result = leftStr.concat(rightStr);
            console.log(result);
        } else if (command === 'Substitute') {
            if (str.includes(token1)) {
                while (str.includes(token1)) {
                    result = str.replace(token1, token2);
                    str = result;
                }
                console.log(result);
            } else {
                console.log("Nothing to replace!");
                result = str;
            }
        }
        str = result;
        inputLine = input[index++];
    }

    console.log(`Your password is: ${str}`);
}

// solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"
// ]));

solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
]));