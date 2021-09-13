/* function arrModi(input) {
    let index = 0;
    let arr = input[index++].split(' ').map(Number);
    let line = input[index++];

    while (line !== 'end') {
        lineArr = line.split(' ');
        let command = lineArr[0];
        let indexOne = Number(lineArr[1]);
        let indexTwo = Number(lineArr[2]);

        if (command === 'swap') {
            swap(arr, indexOne, indexTwo);
        } else if (command === 'multiply') {
            multiply(arr, indexOne, indexTwo);
        } else {
          arr =  arr.map((el) => el - (1));
        }

        line = input[index++];
    }

    // размяна на елементи
    function swap(array, indexOne, indexTwo) {
        let temp = array[indexOne];
        array[indexOne] = array[indexTwo];
        array[indexTwo] = temp;
        return array;
    }

    function multiply(array, indexOne, indexTwo) {
        let product = array[indexOne] * array[indexTwo];
        array[indexOne] = product;
        return array;
    }

    console.log(arr.join(', '));
}

arrModi([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);

  arrModi([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]); */

  function solve(input) {
     let array = input.shift().split(' ').map(Number);
    
    while (input != 'end') {
      let token = input.shift().split(' ');

      if (token[0] === 'swap') {
        let num1 = Number(token[1]);
        let num2 = Number(token[2]);
        // размяна на елементи в масив
        [array[num1], array[num2]] = [array[num2], array[num1]]; 
      } else if (token[0] === 'multiply') {
        let num1 = Number(token[1]);
        let num2 = Number(token[2]);
        result = array[num1] * array[num2];
        array[num1] = result;
      } else if (token[0] === 'decrease') {
        array = array.map(x => x - 1);
      }
    }
    console.log(array.join(', '));
  }

  solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);