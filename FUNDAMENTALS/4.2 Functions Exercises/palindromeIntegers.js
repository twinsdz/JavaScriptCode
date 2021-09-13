/* function palindromeInt(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let isPalindrome = 'false';
        let currentNum = String(input[i]);
        let currentNumArr = currentNum.split('').reverse().join('');

        //  for (let j = currentNumArr.length - 1; j >= 0; j--) {
        //     reverseArr.push(currentNumArr[j]);
        // } 

        if (currentNum !== currentNumArr) {
            isPalindrome = 'false';
        } else {
            isPalindrome = 'true';
        }
        result += isPalindrome + '\n';
    }
    return result;
}

console.log(palindromeInt([123, 323, 421, 121]));

// console.log(palindromeInt([32, 2, 232, 1010])); */

function palindromeInt(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let currentNum = String(input[i]);
        let currentNumArr = currentNum.split('').reverse().join('');

        let isPalindrome = currentNum !== currentNumArr ? 'false' : 'true';
        result.push(isPalindrome);
    }
    return result.join('\n');
}

console.log(palindromeInt([123, 323, 421, 121]));

// console.log(palindromeInt([32, 2, 232, 1010]));