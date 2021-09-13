function biggestNumber(input) {
    let biggest = Number(input[0]);
    let index = 1;

    while (input[index] !== "Stop") {
        input[index] = Number(input[index]);
        if (input[index] > biggest) {
            biggest = input[index];
        }

        index++;
    }

    console.log(biggest);
}

biggestNumber(["-1", "-2", "Stop"]);