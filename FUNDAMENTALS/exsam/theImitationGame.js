function solve(input) {
    let message = input.shift();
    let inputLine = input.shift();

    while (inputLine !== 'Decode') {
        let [command, ...info] = inputLine.split('|');

        if (command === 'Move') {
            let numOfletters = Number(info[0]);
            // преместване на брой символи от началото в края на стринг
            message = message.substring(numOfletters) + message.substring(0, numOfletters);
        } else if (command === 'Insert') {
            let [index, value] = info;
            index = Number(index);
            // вмъкване на символ в стринг
            message = message.substring(0, index) + value + message.substring(index);
            // let newMessage = message.split('');
            // newMessage.splice(index, 0, value);
            // message = newMessage.join('');
        } else if (command === 'ChangeAll') {
            let [substring, replacement] = info;
            // замяна на символи в стринг
            message = message.split(substring).join(replacement);
        }

        inputLine = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);

}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);

/* function imitationGame(arr) {
    let msg = arr.shift();

    let commandParser = {
        'Move': n => msg = msg.substring(n) + msg.substring(0, n),
        'Insert': (i, v) => msg = msg.substring(0, i) + v + msg.substring(i),
        'ChangeAll': (s, r) => {
            while (msg.includes(s)) {
                msg = msg.replace(s, r)
            }
        },
        'Decode': () => console.log(`The decrypted message is: ${msg}`)
    };

    // print с forEach
    arr.forEach(line => {
        let [command, nis, vr] = line.split('|');
        commandParser[command](nis, vr);
    });
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]); */