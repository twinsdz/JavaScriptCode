function theMostPowWord(input) {
    let index = 0;
    let inputLine = input[index++];

    let mostPowWorld = "";
    let numMostPowWorld = Number.MIN_SAFE_INTEGER;

    while (inputLine !== "End of words") {
        let currentWord = inputLine;
        let firstChar = "";
        let charWord = "";
        let wordSum = 0;

        for (let i = 0; i < currentWord.length; i++) {
            charWord = currentWord.charAt(i);
            firstChar = currentWord.charAt(0);
            let charCodeWord = currentWord.charCodeAt(i);

            wordSum += charCodeWord;
        }

        if (firstChar == "a" || firstChar == "e" || firstChar == "i" || firstChar == "o" || firstChar == "u" || firstChar == "y" || firstChar == "A" || firstChar == "E" || firstChar == "I" || firstChar == "O" || firstChar == "U" || firstChar == "Y") {
            wordSum *= currentWord.length;
        } else {
            wordSum = Math.floor(wordSum / currentWord.length);
        }

        if (wordSum > numMostPowWorld) {
            numMostPowWorld = wordSum;
            mostPowWorld = currentWord;
        }
        inputLine = input[index++];
    }
    console.log(`The most powerful word is ${mostPowWorld} - ${numMostPowWorld}`);
}

theMostPowWord(['The', 'Most', 'Powerful', 'Word', 'Is', 'Experience', 'End of words']);

/* theMostPowWord(['But', 'Some', 'People', 'Say', "It's", 'LOVE', 'End of words']); */