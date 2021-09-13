function activationKeys(input) {
    let key = input.shift(); // string
    let command = input.shift();

    while (command !== 'Generate') {
        let [instruction, substr1, substr2, substr3] = command.split('>>>');

        if (instruction === 'Contains') {

            if (key.includes(substr1)) {
                console.log(`${key} contains ${substr1}`);
            } else {
                console.log('Substring not found!');
            }

        } else if (instruction === 'Flip') {
            substr2 = Number(substr2);
            substr3 = Number(substr3);

            if (substr1 === 'Upper') {
                let strToChange = key.slice(substr2, substr3);
//превръщане буквите на стринг в големи UpperCase String (сплитване и джойване по стринг заменя всички съвпадения на заменящия стринга) 
                key = key.split(strToChange).join(strToChange.toLocaleUpperCase());
                console.log(`${key}`);
            } else {
                let strToChange = key.substring(substr2, substr3);
                key = key.split(strToChange).join(strToChange.toLocaleLowerCase());
                console.log(`${key}`);
            }
        } else if (instruction === 'Slice') {
            // правя стринга на масив
            let keyAsArr = key.split('');
            substr1 = Number(substr1); // start index
            substr2 = Number(substr2); // end index
            // режа масива (триене на част от стринг)
            keyAsArr.splice(substr1, (substr2 - substr1));
            key = keyAsArr.join('');
            console.log(`${key}`);
        }

        command = input.shift();
    }
    console.log(`Your activation key is: ${key}`);
}

activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]));

// activationKeys((["134softsf5ftuni2020rockz42",
//     "Slice>>>3>>>7",
//     "Contains>>>-rock",
//     "Contains>>>-uni-",
//     "Contains>>>-rocks",
//     "Flip>>>Upper>>>2>>>8",
//     "Flip>>>Lower>>>5>>>11",
//     "Generate"
// ]));