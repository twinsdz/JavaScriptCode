function solve(input){
    let num = 0;
    input.sort((a, b) => a.localeCompare(b));

    for (let el of input){
        num++;
        console.log(`${num}.${el}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);