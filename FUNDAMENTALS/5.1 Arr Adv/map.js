/* let myArr = ['one', 'two', 'three', 'four']; 
let lengths = myArr.map(x => x.length);  // създава нов модифициран масив, като към всеки един индекс на стария прилага функция
console.log(lengths); // [3,3,5,4] */


/* let numsAsStrings = ["5","3","14","-2","8"];

let nums = numsAsStrings.map(Number);
console.log(nums);    // [5, 3, 14, -2, 8] 

let incr = nums.map(x => x+1); // превръщане в стрингове (x => x.toString())
console.log(incr); // [6, 4, 15, -1, 9] */

let numsAsStrings = ["5", "3", "14", "-2", "8"];
let nums = numsAsStrings.map(Number); // Number e вградена в JS функция
let double = nums.map(doubleNum /* n => n * 2 */);
console.log(double);

function doubleNum(num) {
    return num * 2;
}