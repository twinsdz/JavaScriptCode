/* function reverseArray(n, input) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(input[i]);
    }

    console.log(arr.reverse().join(' '));

}

reverseArray(3, [10, 20, 30, 40, 50]); */

/* function reverseArray(n, input) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(input[i]);
    }

    let result = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
        result += ' ';
    }
    console.log(`${result}`);

}

reverseArray(3, [10, 20, 30, 40, 50]); */

function reverseArray(n, input) {
    let arr = [];

    for (let i = n - 1; i >= 0; i--) {
        arr.push(input[i]);
    }

    console.log(arr.join(' '));

}

reverseArray(3, [10, 20, 30, 40, 50]);