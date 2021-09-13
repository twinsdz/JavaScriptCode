function wordsCount(input) {
    let text = input[0];
    let count = 0;


    for (let i = 0; i < text.length; i++) {
        let current = text[i];
        if (current === " ") {
            count++;
        }
    }
    count++;
    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`);
    } else {
        console.log("The message was send successfully!");
    }
}

wordsCount(["This message has exactly eleven words. One more as it's allowed!"]);