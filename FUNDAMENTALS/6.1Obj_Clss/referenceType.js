/* let myVar = 5;
let newVar = myVar;

console.log(myVar);
console.log(newVar);

newVar = 6;

console.log(myVar);
console.log(newVar); */

/* let myVar = {name: 'Peter', age: 20};
let newVar = myVar;

// console.log(myVar);
// console.log(newVar);

newVar.age = 22;

console.log(myVar);
// console.log(newVar); */

/* function main(){
    let myVar = 5;
    console.log(`Starting Value: ${myVar}`);

    changed(myVar);
    console.log(`Final Value: ${myVar}`);    // оригиналната стойност си стои не променена

}

function changed(param){                     // param получава копие на числото 5 и не сочи към оригиналните данни т.е няма достъп до тях за да ги промени
    param = 6;
    console.log(`Inside Function: ${param}`);
}

main(); */

function main(){
    let myVar = {name: 'Peter', age: 20};   // това важи и за масив, и за обект, и за функция
    console.log(`Starting Value: ${Object.entries(myVar)}`);

    changed(myVar);
    console.log(`Final Value: ${Object.entries(myVar)}`);    // оригиналната стойност се променя

}

function changed(param){                     // param сочи към оригиналните данни и затова ги променя 
    
    /* let myObj = Object.assign({}, param);    // копие на обект
    myObj.age++;
    console.log(`Inside Function: ${Object.entries(myObj)}`); */
    param.age++;
    console.log(`Inside Function: ${Object.entries(param)}`);
}

main();

/* function main() {
    let myVar = ['first', 'second']
    console.log(`Starting Value: ${myVar}`);

    changed(myVar);
    console.log(`Final Value: ${myVar}`); 

}

function changed(param) {
    let myArr = param.slice();         // копие на масива с цел да не променям оригиналния
    myArr[1] = 'changed value';
    param.age++;
    console.log(`Inside Function: ${myArr}`);
}

main(); */