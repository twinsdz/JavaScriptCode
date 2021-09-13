/* function solve(text, wordToFind){
    let words = text.split(' ');
    let counter = 0;

    for(let word of words){
        if(word === wordToFind){
            counter++;
        }
    }

    return counter;
}

console.log(solve("This is a word and it also is a sentence", "is")); */

/* function solve(text, wordToFind){
    return text.split(' ').filter(word => word === wordToFind).length;
}

console.log(solve("This is a word and it also is a sentence", "is"));
 */

function solve(text, wordToFind) {
    let macher = ` ${wordToFind} `
    let index = text.indexOf(macher);
    let counter = 0;

    while (index != -1) {
        counter++;
        index = text.indexOf(macher, index + 1);
    }

    return counter;
}

console.log(solve("This is a word and it also is a sentence", "is"));