function solve([input]) {
    // let pattern = /\d{1,2}-(?<month>[A-Za-z]{3})-\d{4}/g;
    let pattern = /(?<date>\d{1,2})-(?<month>[A-Za-z]{3})-(?<year>\d{4})/g; 
    let result = [...input.matchAll(pattern)];
    //печатане с forEach Arrow function
    result.forEach((el) => console.log(el[0]));
    // result e матрица. Във всеки масив има индекс 0 съвпадение, индекс 1 до 3 всяка група, индекс 4 индекса на съвпадението и т.н.
    console.log(result);
}

solve(["22-Jan-2015 2-Jan-2019 2-Juni-2021 3-Jul-2016"]);

