/* function login(input) {
    let user = input.shift();
    let pass = user.split('').reverse().join('');

    for (let i = 0; i < input.length; i++) {
        if (input[i] === pass) {
            console.log(`User ${user} logged in.`);
        } else {
            if (i == 3) {
                console.log(`User ${user} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }
    }
} */

function login(input) {
    let user = input[0];
    let reversedUser = '';

    for (let i = user.length - 1; i >= 0; i--) {
        reversedUser += user[i];        
    }

    for (let index = 1; index < input.length; index++) {

        if (input[index] !== reversedUser) {
            if (index === 4) {
                console.log(`User ${user} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);

        } else {
            console.log(`User ${user} logged in.`);
            break;
        }
    }
}

/* login(['Acer', 'login', 'go', 'let me in', 'recA']); */
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);