/* let words = ['SoftUni', 'Teletik', 'AMTII'];

// копиране на масив със спред оператор
// let copy = [...words];
// console.log(copy);

let secondWords = ['First', 'Second', 'Third'];

words.push(...secondWords);
console.log(words); */



// spread operator

/* function solve(...args){
console.log(args);
}

solve(1,2,3,4,5);
// solve(1,2,3);
// solve(1,5,8,7,9,5,6,4,4,4); */


// rest parameter спред оператор и map()
function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
      return multiplier * element;
    });
  }
  
  let arr = multiply(2, 15, 25, 42)
  console.log(arr);  // [30, 50, 84]


  
  /* //спред оператор
  function sortRestArgs(...theArgs) {
    let sortedArgs = theArgs.sort();
    return sortedArgs;
  }
  
  console.log(sortRestArgs(5, 3, 7, 1)) // 1, 3, 5, 7 */



  /* // сортиране с празен sort() 
  function sortArguments() {             
    let args = Array.from(arguments); //създаване на масив от аргументи 
    let sortedArgs = args.sort();
    return sortedArgs;
  }
  console.log(sortArguments(5, 3, 7, 1))  // 1, 3, 5, 7 */