function specialNum(input) {
    let number = Number(input[0]);
    let output = "";

    for (let currentNum = 1111; currentNum <= 9999; currentNum++) {
        // превръщане в стринг
        let currentNumStr = currentNum.toString();
        let isSpecial = true;

        for (let index = 0; index < currentNumStr.length; index++) {
            let digit = Number(currentNumStr[index]);

            if (number % digit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            output += currentNum + " ";
        }

    }

    console.log(output);
}

specialNum(["3"]);


/* function specialNum (input){
    let number = Number (input[0]);
    let output = "";
    
    for (let currentNum = 1111; currentNum <= 9999; currentNum++){
        let currentNumStr = currentNum.toString();
        let firstDifit = Number (currentNumStr[0]);
        let secondDigit = Number (currentNumStr[1]);
        let thirdDigit = Number (currentNumStr[2]);
        let fourthDigit = Number (currentNumStr[3]);

        let firstIsSprcial = number % firstDifit === 0;
        let secondIsSpecial = number % secondDigit === 0;
        let thirdIsSpecial = number % thirdDigit === 0;
        let fourthIsSpecial = number % fourthDigit === 0;

        if (firstIsSprcial && secondIsSpecial && thirdIsSpecial && fourthIsSpecial){
            output += currentNum + " ";
        }

    }
    
    console.log(output);
} 

specialNum(["3"]);*/

 /* function specialNumbers(input) {
     let n = Number(input[0]);
     let specialNumbers = "";
  
     for(let i = 1111; i <= 9999; i++) {
         let newNum = i;
         newNum += "";
         for(let j = 0; j < 4; j++) {

             if(n % newNum[0] === 0 && n % newNum[1] === 0 && n % newNum[2] === 0 && n % newNum[3] === 0) {
                 specialNumbers += `${newNum} `;
                 break;              
             } 
         }  
     }
 console.log(specialNumbers)
 } */


 /* function specialNumbers(input) {
     let n = Number(input[0]);
     let result = '';
     let str = '';

     for (let i = 1; i <= 9; i++) {
         for (let j = 1; j <= 9; j++) {
             for (let k = 1; k <= 9; k++) {
                 for (let l = 1; l <= 9; l++) {

                     if (n % i === 0 &&
                         n % j === 0 &&
                         n % k === 0 &&
                         n % l === 0) {
                         result = `${i}${j}${k}${l} `;
                         str += result;
                     }
                 }
             }
         }
     }
     console.log(`${str}`);
 }


 specialNumbers("3"); */