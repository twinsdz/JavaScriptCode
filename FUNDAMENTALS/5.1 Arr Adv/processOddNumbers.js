function oddIndex (input){
    // value e parametar na funkziata filter i e index
    let result = input.
    filter((value, i) => i % 2 == 1).            
    map(x => x * 2).
    reverse();
    return result.join(' ');
}

// console.log(oddIndex([10, 15, 20, 25]));

console.log(oddIndex([3, 0, 10, 4, 7, 3]));