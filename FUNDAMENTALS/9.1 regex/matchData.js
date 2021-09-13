/* function solve([input]){
    let pattern = /\d{1,2}-(?<month>[A-Za-z]{3})-\d{4}/g;
    let result = input.match(pattern);
    console.log(result.join('\n'));
}

solve(["22-Jan-2015 2-Jan-2019 2-Juni-2021 2-Jul-2016"]); */

// групи от регекс
function solve([input]) {
    // let pattern = /\d{1,2}-(?<month>[A-Za-z]{3})-\d{4}/g;
    let pattern = /(?<date>\d{1,2})-(?<month>[A-Za-z]{3})-(?<year>\d{4})/g;
    let result = pattern.exec(input);
    console.log(result);
    
    while (result !== null) {
        // console.log(result.groups.month); //от обекта groups взимам month
        console.log(result[1], result[2], result[3]); // Взимам date, month, year от 1ви, 2 и 3 индекси от масива
        result = pattern.exec(input);
    }

}

solve(["22-Jan-2015 2-Jan-2019 2-Juni-2021 3-Jul-2016"]);