function fact(input) {
    let num = Number(input[0]);
    let factorial = 1;

   /*  for (let multiplier = 2; multiplier <= num; multiplier++) {
        factorial *= multiplier;
    } */

    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    console.log(factorial);
}

fact("4");