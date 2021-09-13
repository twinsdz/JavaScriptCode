function solve(input) {
    let message = input.shift();
    let inputLine = input.shift();

    while (inputLine !== 'Reveal') {
        let [command, token, replacement] = inputLine.split(':|:');

        if (command === 'InsertSpace') {
            let arr = message.split('');
            let index = Number(token);
            let space = ' ';
            arr.splice(index, 0, space);
            message = arr.join('');
            console.log(message);
        } else if (command === 'Reverse') {
            let reversedSubstr = token.split("").reverse().join("");
            if (message.includes(token)) {
                // let arr = message.split(token); // премахва всички съвпадения на токен, а не само първото
                let firstIndex = message.indexOf(token[0]);
                let endOfString = firstIndex + token.length;
                let firstPart = message.substring(0, firstIndex);
                let secondPart = message.substring(endOfString);
                message = firstPart + secondPart + reversedSubstr;
                console.log(message);
            } else {
                console.log("error");
            }

        } else if (command === 'ChangeAll') {
            while (message.includes(token)) {
                let replacedText = message.replace(token, replacement);
                message = replacedText;
            }
            console.log(message);
        }
        inputLine = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}

// solve([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);