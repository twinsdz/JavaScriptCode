function mergeArr(input, arr) {
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            let sum = Number(input[i]) + Number(arr[i]);
            newArr.push(sum);
        } else {
            let concat = input[i] + arr[i];
            newArr.push(concat);
        }
    }
    console.log(newArr.join(' - '));
}

/* mergeArr(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']); */

mergeArr(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);