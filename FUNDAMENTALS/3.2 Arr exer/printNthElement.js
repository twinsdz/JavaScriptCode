function printEl(input){
    let arr = [];

    for (let i = 0; i < input.length - 1; i+= +input[input.length - 1]){
        arr.push(input[i]);
    }

   return arr.join(' ');
}

console.log(printEl(['5', '20', '31', '4', '20', '2']));

console.log(printEl(['dsa', 'asd', 'test', 'test', '2']));

console.log(printEl(['1', '2', '3', '4', '5', '6']));
