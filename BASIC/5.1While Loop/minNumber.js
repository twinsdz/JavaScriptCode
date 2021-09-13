function smallestNumber(input) {
    let smallest = Number(input[0]);
    let index = 1;

    while (input[index] !== "Stop") {
        input[index] = Number(input[index]);
        if (input[index] < smallest) {
            smallest = input[index];
        }
        index++;
    }
    console.log(smallest);
}

smallestNumber(["-10", "20", "-30", "Stop"]);