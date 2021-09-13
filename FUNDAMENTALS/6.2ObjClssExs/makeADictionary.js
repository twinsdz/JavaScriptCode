/* function dictionar(arr) {
    let dictionary = {};

    for (let line of arr) {
        let obj = JSON.parse(line);    
        dictionary = Object.assign(dictionary, obj);    // Object.assign(target къде, sources какво)
    }
    let sortedKeys = Object.keys(dictionary)
    .sort((a, b) => a.localeCompare(b));

    for (let term of sortedKeys) {
        let def = dictionary[term];
        console.log(`Term: ${term} => Definition: ${def}`);
    }
}

dictionar([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]); */

/* function dictionar(arr) {
    let dictionary = {};

    arr.forEach(element => {
        element = JSON.parse(element);
        let tuple = Object.entries(element);
        let term = tuple[0][0];
        let def = tuple[0][1];
        dictionary[term] = def;
    });

    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(e => {
            console.log(`Term: ${e[0]} => Definition: ${e[1]}`);
        });
}

dictionar([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]); */

/* function dictionar(arr) {
    let dictionary = {};

    for (let line of arr) {
        let obj = JSON.parse(line);
        dictionary = Object.assign(dictionary, obj); // Object.assign(target къде, sources какво)
    }

    let sortedKeys = Object.keys(dictionary)
        .sort((a, b) => a.localeCompare(b));

    print(sortedKeys);

    function print(arr) {
        for (let term of arr) {
            console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
        }
    }
}

dictionar([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]); */

function createDictionary(terms) {
    let dictObject = {};
    let keysList = [];
    let valuesList = [];

    class Dictionary {
        constructor(term, definition) {
            this.term = term;
            this.definition = definition;
        }
    }

    for (term of terms) {
        let termObject = JSON.parse(term);
        Object.assign(dictObject, termObject);
    }

    let entries = Object.entries(dictObject);
    for ([key, value] of entries) {
        keysList.push(key);
        valuesList.push(value);
    }

    keysList.sort();
    for (let i = 0; i < keysList.length; i++) {
        console.log(`Term: ${keysList[i]} => Definition: ${dictObject[keysList[i]]}`);
    }
}

createDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);