function solve(input) {
    let inputElements = input.split(' ');
    let sum = 0;

    for (let i = 0; i < inputElements.length; i++) {
        let currentEl = inputElements[i];
        let firstLetter = currentEl[0];
        let lastLetter = currentEl[currentEl.length - 1];
        let num = Number(currentEl.substring(1, currentEl.length - 1));
        let bigLettersStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let smallLettersStr = 'abcdefghijklmnopqrstuvwxyz';

        let result = 0;

        if (bigLettersStr.includes(firstLetter)) {
            let letterNum = bigLettersStr.indexOf(firstLetter) + 1;
            result = num / letterNum;
        } else if (smallLettersStr.includes(firstLetter)) {
            let letterNum = smallLettersStr.indexOf(firstLetter) + 1;
            result = num * letterNum;
        }

        if (bigLettersStr.includes(lastLetter)) {
            let letterNum = bigLettersStr.indexOf(lastLetter) + 1;
            result = result - letterNum;
        } else if (smallLettersStr.includes(lastLetter)) {
            let letterNum = smallLettersStr.indexOf(lastLetter) + 1;
            result = result + letterNum;
        }
        sum += result;
    }
    console.log(sum.toFixed(2));
}


// solve('A12b s17G');
solve('P34562Z q2576f   H456z');
// solve('a1A');