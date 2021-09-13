function prindAndSum(n1, n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    let sum = 0;
    let string = "";

    for (let i = n1; i <= n2; i++) {
        sum += i;
        string += `${i}` + ' ';
    }
    console.log(`${string}`);
    console.log(`Sum: ${sum}`);
}

prindAndSum("5", "10");