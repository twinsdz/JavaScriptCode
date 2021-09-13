 /* function sumOfNumbers(arr){
    
    let numberToCheck = Number (arr[0]);
    let sum = 0;
    let index = 1;

    while (sum < numberToCheck){
        // let currentNum = Number (arr[index++]);
        // sum += currentNum; 
        
        let currentNum = Number (arr[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum);
} 
 */
/* function sumOfNumbers(arr){
    let n = Number (arr[0]);
    let sum = 0;
    let index = [1];

    while (arr[0] > sum){
        sum += arr[index];
        index++;
    }
    console.log(sum);
}
 */

function sumOfNumbers(input){
    let index = 0;
    let num = Number(input[index++]);
    let sum = 0;

    while (index < input.length){
        let currentNum = Number(input[index++]);
        sum += currentNum;
        
        if(sum >= num){
            break;
        }
    }
    
    console.log(sum);
} 


sumOfNumbers (["100", "10", "20", "30", "40"]);

sumOfNumbers(["20", "1", "2", "3", "4", "5", "6"]);
