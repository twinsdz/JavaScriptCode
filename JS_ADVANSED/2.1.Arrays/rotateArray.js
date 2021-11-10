function solve(input, n) {
n = n % input.length;
    for (let i = 0; i < n; i++) {
        let el = input.pop();
        input.unshift(el);
    }
    console.log(input.join(' '));
}

solve(['1', '2', '3', '4'], 2);

solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);