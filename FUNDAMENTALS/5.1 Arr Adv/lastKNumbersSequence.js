/* function lastNumSequence(n, k){
    let seq = [1];
    
    for(let i = 1; i < n; i++){
        let lastK = seq.slice(-k); // връща последните масив от 'k' на брой числа, ако няма достатъчно числа връща от зад напред толкова колкото има да нулевия индекс
        let sum = 0;
        
        for(let num of lastK){ // взима всички числа от масива lastK
            sum += num;
        }
        seq.push(sum);
    }
    console.log(seq.join(' '));
}

lastNumSequence(6, 3);
lastNumSequence(8, 2); */

function lastNumSequence(n, k){
    let seq = [1];
    
    for(let i = 1; i < n; i++){
        let currentElement = sumOfLastK(seq, k);        
        seq.push(currentElement);
    }
    function sumOfLastK(arr, k){
        let lastK = seq.slice(-k); 
        let sum = 0;
        for(let num of lastK){ 
            sum += num;
        }
        return sum;
    }

    console.log(seq.join(' '));
}

lastNumSequence(6, 3);
lastNumSequence(8, 2);

/* function lastNumSequence(n, k) {
    let seq = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let innerSequence = seq.slice(startIndex, i);
        let sum = 0;

        for (let j = 0; j < innerSequence.length; j++) {
            sum += innerSequence[j];
        }
        seq[i] = sum;
    }
    return seq.join(' ');
}

console.log(lastNumSequence(6, 3));
// console.log(lastNumSequence(8, 2)); */


/* function lastNumSequence(n, k) {
    let seq = [1];

    while (seq.length < n) {
        let newNum = seq.slice(-k).reduce((a, c) => a + c, 0);
        seq.push(newNum);
    }
    return seq.join(' ');
}

console.log(lastNumSequence(6, 3));
// console.log(lastNumSequence(8, 2)); */