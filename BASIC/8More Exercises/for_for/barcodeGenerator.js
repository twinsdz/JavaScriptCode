/* Взимаме първата, втората, третата и четвъртата цифра от двете четирицифрени числа, 
съответно от първото като начална и от второто като крайна стойност. 
Проверяваме в интервалите между всяка от цифрите на първото четирицифрено число и всяка от цифрите на второто дали съществува 
четна цифра и ако съществува я игнорираме в резултата.
 */

function barCode(input) {
    let index = 0;
    let firstNum = input[index++];
    let secondNum = input[index++];
    let result = '';
    let toPrint = '';


    for (let i = Number(firstNum[0]); i <= Number(secondNum[0]); i++) {
        for (let j = Number(firstNum[1]); j <= Number(secondNum[1]); j++) {
            for (let k = Number(firstNum[2]); k <= Number(secondNum[2]); k++) {
                for (let p = Number(firstNum[3]); p <= Number(secondNum[3]); p++) {

                    if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0 && p % 2 != 0) {
                        result = `${i}${j}${k}${p}`;
                        toPrint += result + ' ';
                    }
                }
            }
        }
    }
    console.log(`${toPrint}`);
}

barCode(['2345', '6789']);

