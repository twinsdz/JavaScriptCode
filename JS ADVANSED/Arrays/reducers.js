let myArr = [7, 6, 1, 5, 2, 13];
let moreNum = [5, 8, 11, 0, 4];

let matrix = [[4, 5, 6],
           [6, 5, 4],
           [5, 5, 5]];

let result = myArr.reduce((acc, c) => acc + c, 0);
let average = myArr.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
let maxNum = myArr.reduce((acc, curr) => acc > curr ? acc : curr);
let concatArr = matrix.reduce((acc, curr) => acc.concat(curr));
let filteredArr = myArr.reduce((acc, curr) => {
    if(curr % 2 === 0){
        acc.push(curr);
    }
    return acc;
},[]);

console.log(result);
console.log(average);
console.log(maxNum);
console.log(concatArr);
console.log(filteredArr);


