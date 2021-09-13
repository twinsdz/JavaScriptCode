/* function smallestNumber (...input){
    let firstNum = Number (input[0]);
    let secondNum = Number (input[1]);
    let thirdNum = Number (input[2]);
    let smallestNum = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < 3; i++){
        if (input[i] < smallestNum){
            smallestNum = input[i];
        }
    }
    console.log(smallestNum);
}

// smallestNumber (2, 5, 3);

smallestNumber (600, 342, 123); */

/* function smallestNumber(x, y, z) {
    let smallest = Number.MAX_SAFE_INTEGER;
    smallest = smaller(x, smallest);
    smallest = smaller(y, smallest);
    smallest = smaller(z, smallest);

    function smaller(n, small) {
        //  if (n < small) {
        //     small = n;
        // } 
        // return small;  
return n < small ? n : small; // тернарен оператор
}

// let myFunc = (x) => x * 2;
// return myFunc (2);

return smallest;
}

console.log(smallestNumber(2, 5, 3));

// console.log(smallestNumber(600, 342, 123)); */

function smallestNumber(x, y, z) {
    let smallest = Math.min(x, y, z);
    return smallest;
}

console.log(smallestNumber(2, 5, 3));

console.log(smallestNumber(600, 342, 123));