/* function words(firstWord, char, secondWord) {
    let replacedWord = '';

    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord[i] === '_') {
            replacedWord += char;
        } else {
            replacedWord += firstWord[i];
        }
    }

    if (replacedWord === secondWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
} */

function words(firstWord, char, secondWord) {
    let replacedWord = firstWord.replace('_', char);

    
    if (replacedWord === secondWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}



words('Str_ng', 'I', 'Strong');