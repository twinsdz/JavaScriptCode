function solve(input) {
    let arr = [];
    let isNotEnough = false;

    for (let el of input) {
        let str = typeof (el);

        if (str === 'number') {
            arr.push(el);
        } else {
            if (arr.length >= 2) {
                let numbers = arr.splice(-2);
                let result = calculate(numbers, el);
                arr.push(result);
            } else {
                isNotEnough = true;
                console.log('Error: not enough operands!');
                break;
            }

        }
    }

    if (arr.length > 1) {
        console.log('Error: too many operands!');
    } else if (!isNotEnough) {
        console.log(arr[0]);
    }

    function calculate(nums, str) {
        let result = 0;
        if (str === '+') {
            result = nums[0] + nums[1];
        } else if (str === '-') {
            result = nums[0] - nums[1];
        } else if (str === '*') {
            result = nums[0] * nums[1];
        } else {
            result = nums[0] / nums[1];
        }
        return result;
    }
}

// solve([3,
//     4,
//     '+'
// ]);

// solve([5,
//     3,
//     4,
//     '*',
//     '-'
// ]);

// solve([7,
//     33,
//     8,
//     '-'
// ]);

solve([15,
    '/'
]);