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


// Unit Testing function
function test(name, actual, expected){
    if(Number.isNaN(expected) && Number.isNaN(actual)){
        console.log(name, 'Pass');
    } else if(actual == expected){
        console.log(name, 'Pass');
    } else {
        console.error(name, 'Failed');
    }
}

test('Case: 0', sumRange([10, 20, 30, 40, 50, 60], 1, 3), 90);
test('Case: 1', sumRange([10, 20, 30, 40, 50, 60], 3, 300), 150);
test('Case: 2', sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(2), 3.3);
test('Case: 3', sumRange([10, 'twenty', 30, 40], 0, 2), NaN);
test('Case: 4', sumRange([], 1, 2), 0);
test('Case: 5', sumRange('text', 0, 2), NaN);



