function solve(...input){
    num = Number(input.shift());
    let arr = [];

    for(let el of input){
        if(el === 'chop'){
            num = num / 2
           arr.push(num);
        } else if(el === 'dice'){
            num = Math.sqrt(num);
            arr.push(num);
        } else if(el === 'spice'){
            num += 1;
            arr.push(num);
        } else if(el === 'bake'){
            num *= 3;
            arr.push(num);
        } else if(el === 'fillet'){
            num *= 0.80;
            arr.push(num.toFixed(1));
        }
    }
    console.log(arr.join('\n'));
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');