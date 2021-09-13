function solve(str){
    let result = '';
    for (let char of str){
        if(char !== result[result.length -1]){
            result += char;
        }
    }
    return result;
}

// console.log(solve('aaaaabbbbbcdddeeeedssaa'));
console.log(solve('qqqwerqwecccwd'));