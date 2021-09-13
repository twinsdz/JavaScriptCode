function searchForNum(input, arr) {
    // splice(index) връща стойностите от дадения индекс до края и в оригиналния масив ги трие до края
    let newArr = input.slice(0, arr[0]).splice(arr[1]);
    let count = 0;

    for (let num of newArr) {
        if (num === arr[2]) {
            count++;
        }
    }
    console.log(`Number ${arr[2]} occurs ${count} times.`);
}

searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);