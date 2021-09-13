function smallestTwoNum (input){
    input.sort((a, b) => a - b);
    let result = input.slice(0, 2);
    return result.join(' ');
}

console.log(smallestTwoNum([30, 15, 50, 5]));