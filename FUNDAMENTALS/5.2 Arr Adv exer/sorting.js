/* function solve(input) {
    let index = 0;
    let arr = [];

    while (input.length > 0) {
        let biggest = 0;
        let smallest = 0;

        if (index % 2 == 0) {
            input.sort((a, b) => b - a);
            biggest = input.shift();
            arr.push(biggest);
        } else {
            input.sort((a, b) => a - b);
            smallest = input.shift();
            arr.push(smallest);
        }
        index++;
    }

    console.log(arr.join(' '));
}


solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); */

/* function solve(input) {
    let arr = [];
    input = input.sort((a, b) => b - a);
    let copyInput = input.slice(0);

    for (let i = 0; i < copyInput.length; i++) {
        let num;
        if (i % 2 == 0) {
            num = input.shift();
        } else {
            num = input.pop();
        }
        arr.push(num);
    }
    console.log(arr.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); */                                    

function solve(input) {
    let sortedArr = [];
    let copyInput = input.slice(0);
    // Правя копие на Input масива, защото когато трия от него дължината му се променя. 
    // let inputLength = input.length;
    // for(let i = 0; i < inputLength; i++)                                    
    for (let i = 0; i < copyInput.length; i++) {
        let num;
        if (i % 2 == 0) {
            num = Math.max(...input);
        } else {
            num = Math.min(...input);                                           
        }                     
        sortedArr.push(num);
        input.splice(input.indexOf(num), 1);
    }
    console.log(sortedArr.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

/* // Копие със спредоператор
function solve(input) {
    // firstNum е променлива, ...rest е масив от останалите числа
    // let [firstNum, secondNum, thirdNum, ...rest] = [...input];
    let [...copy] = [...input];

    // console.log(firstNum);
    // console.log(secondNum);
    // console.log(thirdNum);
    // console.log(rest);
    console.log(copy);
   
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); */
