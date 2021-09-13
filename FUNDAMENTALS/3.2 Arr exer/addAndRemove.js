/* function solve(input) {
    let arr = [];
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        count++;
        if (input[i] === 'add') {
            arr.push(count);
        } else {
            arr.pop();
        }
    }
    if(arr.length > 0){
        return arr.join(' ');
    } else {
        return "Empty";
    }
}

// console.log(solve(['add', 'add', 'add', 'add']));

console.log(solve(['add', 'add', 'remove', 'add', 'add'])); */

function solve(input) {
    let arr = [];
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        count++; 
        if (input[i] === 'add') {
            arr[arr.length] = count; // добавяне на края на масива без push()
        } else {

            if (arr.length > 0) {
                arr.length = arr.length - 1; // триене на последен елемент от масива без pop()
            } else {}
        }
    }
    if (arr.length > 0) {
        return arr.join(' ');
    } else {
        return "Empty";
    }
}

console.log(solve(['add', 'add', 'add', 'add']));

console.log(solve(['add', 'add', 'remove', 'add', 'add']));

console.log(solve(['remove', 'remove', 'remove']));

console.log(solve('add', 'add', 'remove', 'remove'));