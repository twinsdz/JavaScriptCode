/* function sortNum (num1, num2, num3){
    num1 = Number (num1);
    num2 = Number (num2);
    num3 = Number (num3);
    
    let arr = [num1, num2, num3];
    let result = arr.sort();
    result = result.reverse();
    result = result.join("\n")

    console.log(`${result}`);
} */

function sortNum(...input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    let result = input.sort();
    // обръщане на масив
    result = result.reverse();
    // нов ред
    result = result.join("\n")

    console.log(`${result}`);
}

sortNum("2", "1", "3");