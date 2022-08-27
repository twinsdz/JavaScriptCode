// function solve(input) {
//     let arr = [];
//     let num = 1;

//     for (let el of input) {
//         if (el === 'add') {
//             arr.push(num);
//             num++;
//         } else {
//                 arr.pop();
//                 num++;
//         }
//     }
//     return arr.length > 0 ? arr.join('\n') : 'Empty';
// }


function solve(input) {
    let arr = [];
    let num = 1;

    input.forEach((el) => {

        if(el == "add"){
            arr.push(num); 
        } else{
            arr.pop();
        }
        num++;
    });
    return arr.length > 0 ? arr.join('\n') : 'Empty';
}

console.log(solve(['add',
    'add',
    'add',
    'add'
]));


console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add'
]));

console.log(solve(['remove',
    'remove',
    'remove'
]));