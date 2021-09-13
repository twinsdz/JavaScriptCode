/* function readText(input1, input2, input3, input4) {
    let firstName = input1;
    let lastName = input2;
    let age = Number(input3);
    let town = input4;
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
} */

function readText(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number (input[2]);
    let town = input[3];
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}


readText(["Maria", "Ivanova", "19", "Pleven"]);