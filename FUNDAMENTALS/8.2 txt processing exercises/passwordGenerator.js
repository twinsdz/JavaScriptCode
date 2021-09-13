function solve([firstStr, secondStr, word]) {
    let pass = firstStr + secondStr;
    let counter = 0;
    let base = word.length;

    let isVowel = (x) => 'aeiou'.indexOf(x.toLowerCase()) !== -1;  // indexOf връща -1 ако буквата не се съдържа в стринга

    for (let i = 0; i < pass.length; i++) {
        if (isVowel(pass[i])) {
            pass = pass.substring(0, i) + word[counter % base].toUpperCase() + pass.substring(i + 1);
            counter++;
        }
    }
    return `Your generated password is ${pass.split('').reverse().join('')}`;
}

console.log(solve(['ilovepizza', 'ihatevegetables', 'orange']));

/* function solve(input) {
    let pass = input[0].concat(input[1]).split('');
    let letters = input[2].split('');

    let vowels = 'AEIOUaeiou';
    let letterIntex = 0;

    for (let i = 0; i < pass.length; i++) {
        if (vowels.includes(pass[i])) {
            pass[i] = letters[letterIntex].toUpperCase();
            letterIntex === letters.length - 1 ? letterIntex = 0 : letterIntex++;
        }
    }
    return `Your generated password is ${pass.reverse().join('')}`;
}

console.log(solve(['ilovepizza', 'ihatevegetables', 'orange'])); */