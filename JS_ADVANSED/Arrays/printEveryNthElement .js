/* function solve(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += num) {
       newArr.push(arr[i]);
    }
    return newArr;
} */

function solve(arr, num) {
    let filteredArr = arr.filter((el, index) => index % num === 0);
    return filteredArr;
}

console.log(solve(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
));



// solve(['dsa',
//         'asd',
//         'test',
//         'tset'
//     ],
//     2
// );

// solve(['1',
//         '2',
//         '3',
//         '4',
//         '5'
//     ],
//     6
// );