const {sum, product} = require('./sumForExport.js');
const mySum = require('./sumForExport.js').sum;  //р3ферирам към обект

console.log(sum(6, 4), product(6, 4));
console.log(mySum(8, 8));