function solve(input) {
    let n = Number(input[0]);

    // i - iterator
    for (let i = 0; i <= n; i += 2) {
        console.log(Math.pow(2, i));
    }
}

solve(["4"]);