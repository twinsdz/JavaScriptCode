/* function solve(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    return text;
}

console.log(solve("A small sentence with small some words", "small")); */

function solve(text, word) {
    
    let repeat = (length => '*'.repeat(length));  // функция

    while (text.includes(word)) {
        text = text.replace(word, repeat(word.length));
    }
    return text;
}

console.log(solve("A small sentence with small some words", "small"));