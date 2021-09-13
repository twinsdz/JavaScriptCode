/* function charInRange(...input) {
    let firstChar = input[0].charCodeAt();
    let secondChar = input[1].charCodeAt();
    let minCharNum = Math.min(firstChar, secondChar);
    let maxCharNum = Math.max(firstChar, secondChar);
    let newArr = [];

    for (let i = minCharNum; i < maxCharNum; i++) {
        let currentChar = String.fromCharCode(i);
        if (i !== minCharNum) {
            newArr.push(currentChar);
        }
    }

    console.log(newArr.join(' '));
}

// charInRange ('a', 'd');
// charInRange ('#', ':');
charInRange('C', '#'); */

/* function charInRange(a, b) {
    let firstChar = a.charCodeAt();
    let secondChar = b.charCodeAt();
    let start = firstChar < secondChar ? firstChar : secondChar;
    let end = firstChar > secondChar ? firstChar : secondChar;

    let newArr = [];

    for (let i = start + 1; i < end; i++) {
        let currentChar = String.fromCharCode(i);
        newArr.push(currentChar);
    }
    return newArr.join(' ');
}

console.log(charInRange('a', 'd'));

console.log(charInRange ('#', ':'));

console.log(charInRange('C', '#')); */

function charInRange(a, b) {
    let firstChar = a.charCodeAt();
    let secondChar = b.charCodeAt();

    let min = firstChar;
    let max = secondChar;

    if(firstChar > secondChar){
        min = secondChar;
        max = firstChar;
    }

    let newArr = [];

    for (let i = min + 1; i < max; i++) {
        let currentChar = String.fromCharCode(i);
        newArr.push(currentChar);
    }
    return newArr.join(' ');
}

console.log(charInRange('a', 'd'));

console.log(charInRange ('#', ':'));

console.log(charInRange('C', '#'));