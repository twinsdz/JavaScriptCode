function solve([input]){
    let pattern = /\w+@[A-Za-z]+\.[A-Za-z]+/g;
    let result = input.match(pattern);
    console.log(result.join('\n'));
}

solve(["valid123@email.bg invalid*name@emai1.bg 2-Juni-2021 2-Jul-2016"]);