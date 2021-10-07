function sumRange(arr, start, end) {
    let sum = 0;

    if(Array.isArray(arr) == false){
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > arr.length - 1) {
        end = arr.length - 1;
    }

    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

console.log(sumRange([10, 20, 30, 40, 50, 60], 1, 3));
console.log(sumRange([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sumRange([10, 'twenty', 30, 40], 0, 2));
console.log(sumRange([], 1, 2));
console.log(sumRange('text', 0, 2));