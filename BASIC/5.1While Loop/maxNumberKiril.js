function biggestNumber(input){
    //let biggest = Number (input[0]);
    let biggest = Number.MIN_SAFE_INTEGER;
    let index = 0; // let index = 1;
    let command = input[index++];
    

    while (command !== "Stop"){
        let currentNumber = Number (command);
        if (currentNumber > biggest){
            biggest = currentNumber;
        }
        command = input[index++];
    }
 console.log(biggest);
}

/* biggestNumber(["-1", "-2", "Stop"]); */

biggestNumber (["100", "99", "80", "70", "Stop"]);

