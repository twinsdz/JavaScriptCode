function solve(char) {
    let print = '';
    // регекс
    let regUpper = /[A-Z]/g;

    // ако съвпада с един от дадените символи
    if (char.match(regUpper)) {
        print = 'upper-case';
    } else {
        print = 'lower-case';
    }
    return print;
}

console.log(solve('A'));