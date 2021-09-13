/* function oddOccurr(input) {
    let map = new Map();
    input.split(' ').forEach(el => {
        el = el.toLowerCase();
        if (!map.has(el)) {
            map.set(el, 0);
        }
        map.set(el, map.get(el) + 1);
    });
    return Array.from(map.keys()).filter(x => map.get(x) % 2 !== 0).join(' ');
}

console.log(oddOccurr('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')); */

function oddOccurr(input) {
    let occurr = {};
    let listOfStrings = input.split(' ');

    for(let string of listOfStrings){
        let stringToLower = string.toLowerCase();
        if(!Object.keys(occurr).includes(stringToLower)){
            occurr[stringToLower] = 0;
        }

        occurr[stringToLower] += 1;
    }

    let result = [];

    for(let [key, value] of Object.entries(occurr)){
        if(value % 2 !== 0){
            result.push(key);
        }
    }
    
    return result.join(' ');
}

console.log(oddOccurr('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));