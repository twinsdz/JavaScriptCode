// групи от регекс

let text = 'Peter: 123 Mark: 456';
let regex = /(?<names>[A-Z][a-z]+:\s\d+)/g;

// информацията от обекта groups от масива firstMatch
let firstMatch = regex.exec(text);

while (firstMatch !== null) {
    console.log(firstMatch.groups.names);
    firstMatch = regex.exec(text);
}

// информацията от масива firstMatch
text = 'Peter: 123 Mark: 456';
regex1 = /(?<name>[A-Z][a-z]+): (\d+)/g;

firstMatch = regex1.exec(text);
let secondMatch = regex.exec(text);

console.log(firstMatch); // целия масив
console.log(firstMatch[0]); // Peter: 123 
console.log(firstMatch[1]); // Peter
console.log(firstMatch[2]); // 123

// информацията от масива arr
text = 'Peter: 123 Mark: 456';
regex1 = /(?<name>[A-Z][a-z]+): (\d+)/g;

let arr = regex1.exec(text);

while (arr !== null) {
    console.log(arr[0]); // съвпадението на нулев индекс
    console.log(arr[1]); // информацията от първа група
    console.log(arr[2]); // информацията от втората група
    console.log(arr.input); // информацията от обекта input
    console.log(arr.index); // информацията от обекта index
    arr = regex1.exec(text);
}