function solve(text) {
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z\s]{2,})\1/g;
    let points = 0;
    let arr = pattern.exec(text);
    let dest = [];

    while (arr !== null) {
        // arr[2] връща съвпадението във втора група. На нулев индекс е винаги цялото съвпадение, на първи 1ва група и т.н
        let name = arr[2];
        points += name.length;
        dest.push(name);
        arr = pattern.exec(text);
    }

    console.log(`Destinations: ${dest.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');

solve('ThisIs some InvalidInput');