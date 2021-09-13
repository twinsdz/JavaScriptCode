function sumOfOdds (n){
    let count = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i++){

        if(i % 2 !== 0){
            count++;
            console.log(`${i}`);
            sum += i;
            if (count === n){
                break;
            }
        }
    }
    console.log(`Sum: ${sum}`);
}

sumOfOdds(3);