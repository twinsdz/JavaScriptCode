function solve(input) {
    let index = 0;
    let targets = input[index++].split(' ').map(Number);
    let command = input[index++];
    let count = 0;

    while (command !== 'End') {
        let idx = Number(command);
        let currentTarget = targets[idx];
        
        for (let i = 0; i < targets.length; i++) {
            
            if (idx >= 0 && idx < targets.length) {
                targets[idx] = -1;
                count++;
            } else {
                break;
            }

            manipulateTheTargets(targets, currentTarget);
            break;
        }
        command = input[index++];
    }

    function manipulateTheTargets(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === -1) {
                continue;
            }
            if (arr[i] <= num) {
                arr[i] += num;
            } else {
                arr[i] -= num;
            }
        }
        return arr;
    }
    return `Shot targets: ${count} -> ${targets.join(' ')}`;
}

// console.log(solve(['24 50 36 70', '0', '4', '3', '1', 'End']));

console.log(solve(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']));
