// let fruits = ['apple', 'Banana', 'grapes', 'mango', undefined, 'orange'];
let fruits = ['apple', 'Banana', 'grapes', 'mango', 'orange'];

// let filtered = fruits.filter(el => el != undefined); // return new arr, the old stay without changes
let filtered = fruits.filter(el => el[0] !== el[0].toUpperCase());
console.log(filtered);