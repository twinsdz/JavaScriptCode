function bombNum(input, arr) {
    let sum = 0;
    let [bomb, power] = arr;
    let copyInput = input.slice(0); // копие на input заради дължината
    // let inputLength = input.length;
    
    for (let i = 0; i < copyInput.length; i++) {

        if (copyInput[i] === bomb) {
            let index = input.indexOf(bomb);
            let count = (power * 2) + 1;
            // едновременно изчисляване на индекса от който ще трия и проверка за валидност.
            let startIndex = Math.max(0, (index - power)); 

            // index !== -1 ако индекса съществува. Ако е различен от невалиден.
            if (index !== -1) {
                input.splice(startIndex, count);
            }
        }
    }
    for (let num of input) {
        sum += num;
    }
    return sum;
}

console.log(bombNum([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNum([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(bombNum([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(bombNum([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));


/* function bombNum(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[0]) {
            arr1.splice(i - arr2[1] > 0 ? i - arr2[1] : 0, arr2[1] * 2 + 1)
            i = 0
        }
    }
    console.log(arr1.reduce((a, v) => a + v, 0))
}

console.log(bombNum([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNum([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(bombNum([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(bombNum([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])); */

/* function bombNum(numsArray, bomb){
    let bombNumber = bomb[0];
    let bombPower = bomb[1];
    let sum = 0;
    while(numsArray.includes(bombNumber)){
            let bombIndex = numsArray.indexOf(bombNumber);
            let startIndex = Math.max(bombIndex - bombPower,0);
            numsArray.splice(bombIndex, bombPower + 1);
            numsArray.splice(startIndex, bombPower);
 
    }
    for(let num of numsArray){
        sum += num;
    }
    console.log(sum);
}

bombNum([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);

bombNum([1,2,2,1], [2, 0]); */