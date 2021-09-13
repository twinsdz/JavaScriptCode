/* function solve(input) {
    let arr = input.pop();
    let str = input[0].split(' ');

    let result = [];

    for (let i = 0; i < str.length; i++) {
        let wordToAdd = '';
        let currentWord = str[i];

        if (currentWord.includes('_')) {
            wordToAdd = findWord(arr, currentWord);
            result.push(wordToAdd);
        } else {
            result.push(currentWord);
        }
    }

    return result.join(' ');

    function findWord(input, w) {
        let isFound = false;
        let lastChar = false;
        let wordToAdd = '';
        let currentLength = w.length;
        let char = '';

        if (w.endsWith('.') || w.endsWith(',') && lastChar === false) {
            char = w[currentLength - 1];
            currentLength -= 1;
        }

        for (let el of input) {
            if (el.length === currentLength) {
                if (w.includes('.') || w.includes(',')) {
                    isFound = true;
                    wordToAdd = el + char;
                } else {
                    isFound = true;
                    wordToAdd = el;
                }
            }
        }
        return wordToAdd;
    }
}

console.log(solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
])); */


function solve([str, words]) {
    let index = str.indexOf('_');
    counter = 0;
    while (index !== -1) {
        counter++;
        if (str[index + counter] !== '_') {
            let word = words.filter(x => x.length == counter);
            str = str.substring(0, index) + word + str.substring(index + counter);
            index = str.indexOf('_');
            counter = 0;
        }
    }
    return str;
}


console.log(solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]));