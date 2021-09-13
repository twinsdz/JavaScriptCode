/* function solve(word, sentance) {
    let isFound = false;
    sentance = sentance.toLowerCase().split(' ');
    for (let el of sentance) {
        if (el === word) {
            isFound = true;
            console.log(el);
        }
    }
    if (isFound == false) {
        console.log(`${word} not found!`);
    }
}

// solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language'); */

function solve(word, sentance) {
    sentance = sentance.toLowerCase().split(' ');
    
        if (sentance.includes(word.toLowerCase())) {
            return word;
        }
      return  `${word} not found!`;
}

// console.log(solve('javascript', 'JavaScript is the best programming language'));
console.log(solve('python', 'JavaScript is the best programming language'));
