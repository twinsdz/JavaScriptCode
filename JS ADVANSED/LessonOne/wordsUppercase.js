function solve(str) {
    let pattern = /\w+/g;
    let newArr = [];
    let arr = str.match(pattern);

    if (arr !== null) {
        for (let el of arr) {
            el = el.toLocaleUpperCase();
            newArr.push(el);
        }
        console.log(newArr.join(', '));
    }
}

solve('Hi, how are you?');
solve('hello');
