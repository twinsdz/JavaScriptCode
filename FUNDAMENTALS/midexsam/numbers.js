/* function solve(input) {
    let arr = input.split(' ').map(Number);
    let average = arr.reduce((a, b) => a + b, 0) / arr.length;

    let greater = arr.filter(x => x > average).sort((a, b) => b - a).splice(0, 5);

    if(greater.length !== 0){
        console.log(greater.join(' '));
    } else {
        console.log('No');
    }
}

solve('10 20 30 40 50');

solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');

solve('1');

solve('-1 -2 -3 -4 -5 -6'); */

function solve(input) {
    let arr = input.split(' ').map(Number);
    let sum = 0;
    for (let n of arr) {
        sum += n;
    }

    let average = sum / arr.length;

    let filtered = arr.filter(x => x > average).sort((a, b) => b - a);

    if (filtered.length > 0) {
        console.log(`${filtered.slice(0,5).join(' ')}`);
    } else {
        console.log('No');
    }
}

solve('10 20 30 40 50');

solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');

solve('1');

solve('-1 -2 -3 -4 -5 -6');