function solve(input) {
    let n = input.shift();
    let pieces = input.splice(0, n);
    let myPieces = {};

    for (let piece of pieces) {
        let [opus, composer, pieceKey] = piece.split('|');
        myPieces[opus] = {
            autor: composer,
            mode: pieceKey
        };
    }

    let line = input.shift();

    while (line !== 'Stop') {
        let [command, ...data] = line.split('|');

        if (command === 'Add') {
            let [opus, composer, pieceKey] = data;
            if (!myPieces.hasOwnProperty(opus)) {
                
                myPieces[opus] = {
                    autor: composer,
                    mode: pieceKey
                };

                console.log(`${opus} by ${composer} in ${pieceKey} added to the collection!`);

            } else {
                console.log(`${opus} is already in the collection!`);
            }
        } else if (command === 'Remove') {
            let opus = data[0];

            if (myPieces.hasOwnProperty(opus)) {
                delete myPieces[opus];
                console.log(`Successfully removed ${opus}!`);
            } else {
                console.log(`Invalid operation! ${opus} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {
            let [opus, newKey] = data;

            if (myPieces.hasOwnProperty(opus)) {
                myPieces[opus].mode = newKey;
                console.log(`Changed the key of ${opus} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${opus} does not exist in the collection.`);
            }
            
        }
        line = input.shift();
    }

    // сортиране на масив от масиви и обекти
    let sorted = Object.entries(myPieces).sort(([keyA, refA], [keyB, refB]) => keyA.localeCompare(keyB) || [refA.autor].localeCompare([refB.autor]));

    // print
    for (let el of sorted) {
        let {
            autor,
            mode
        } = el[1];
        console.log(`${el[0]} -> Composer: ${autor}, Key: ${mode}`);
    }
}

// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);


/* function thePianist(arr) {
    let collection = {};
    let commandParser = {
        'Add': add,
        'Remove': remove,
        'ChangeKey': changeKey
    }; 

    let n = Number(arr.shift())
    arr.splice(0, n).map(row => row.split('|')).forEach(row => {
        collection[row[0]] = { composer: row[1], key: row[2] }
    });

    arr.map(row => {
        let [command, ...args] = row.split('|')
        if (command !== 'Stop') {
            console.log(commandParser[command](collection, ...args))
        }
    });

    Object.entries(collection).sort((a, b) => a[0].localeCompare(b[0]) || (a[1].composer).localeCompare(b[1].composer))
        .map(row => console.log(`${row[0]} -> Composer: ${row[1].composer}, Key: ${row[1].key}`));

    function add(collection, piece, composer, key) {
        if (!collection.hasOwnProperty(piece)) {
            collection[piece] = { composer: composer, key: key }
            return `${piece} by ${composer} in ${key} added to the collection!`;
        } else {
            return `${piece} is already in the collection!`;
        }
    }

    function remove(collection, piece) {
        if (!collection.hasOwnProperty(piece)) {
            return `Invalid operation! ${piece} does not exist in the collection.`;
        } else {
            delete collection[piece]
            return `Successfully removed ${piece}!`;
        }
    }

    function changeKey(collection, piece, key) {
        if (!collection.hasOwnProperty(piece)) {
            return `Invalid operation! ${piece} does not exist in the collection.`;
        } else {
            collection[piece].key = key
            return `Changed the key of ${piece} to ${key}!`;
        }
    }
}
thePianist([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ])
    // thePianist([
    //     '4',
    //     'Eine kleine Nachtmusik|Mozart|G Major',
    //     'La Campanella|Liszt|G# Minor',
    //     'The Marriage of Figaro|Mozart|G Major',
    //     'Hungarian Dance No.5|Brahms|G Minor',
    //     'Add|Spring|Vivaldi|E Major',
    //     'Remove|The Marriage of Figaro',
    //     'Remove|Turkish March',
    //     'ChangeKey|Spring|C Major',
    //     'Add|Nocturne|Chopin|C# Minor',
    //     'Stop'
    // ]) */