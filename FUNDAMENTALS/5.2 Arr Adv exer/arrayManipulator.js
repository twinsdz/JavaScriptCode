function arrayManipulator(array, commands) {
  let result = array.slice(0);
  let output = [];

  for (let command of commands) {
    let tokens = command.split(' ');

    if (tokens[0] === "add") {
      let index = +tokens[1]; // +command превръща стринга в число
      let element = +tokens[2];
      result.splice(index, 0, element);
    }

    // добавяне на много елементи към масив
    if (tokens[0] === "addMany") {
      let index = Number(tokens[1]);
      let newArray = tokens.slice(2).map(Number); //тук newArray е само елемент
      // добавяне на масив от елементи след последния индекс
      result.splice(index, 1, ...newArray); // Тук става масив / спред оператор / вмъкване на елементи със splice()
    }
    if (tokens[0] === "contains") {
      let element = Number(tokens[1]);
      let index = result.indexOf(element);
      console.log(index);
    }
 
    if (tokens[0] === "remove") {
      let index = Number(tokens[1]);
      // Проверка за валидност на индекс
      if (index < 0 || index > result.length - 1) {

      } else {
        // splice (начален индекс, брой елементи за триене)
        result.splice(index, 1);
      }
    }

    // ротация въртене на елементи в масив от дясно на ляво
    if (tokens[0] === "shift") {
      let rotations = Number(tokens[1]); // брой елементи, които да взема отпред и да залепя отзад
      for (let i = 0; i < rotations; i++) {
        let element = result.shift();
        result.push(element);
      }
    }

    // събиране на съседни числа
    if (tokens[0] === "sumPairs") {
      // ако дължината на масива е четно число
      if (result.length % 2 === 0) {
        for (let j = 0; j < result.length; j += 2) {
          output.push(result[j] + result[j + 1]);
        }
      } else {
        // ако дължината на масива е нечетно число
        for (let j = 0; j < result.length - 1; j += 2) {
          output.push(result[j] + result[j + 1]);
        }
        output.push(result.pop());
      }
      result = output;
      output = [];
    }
  }
  console.log(`[ ${result.join(", ")} ]`);
}

// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);

arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

// arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);



/* function arrayManipulator(array, manipulations) {
    let actualManipulation = [];

    let index = 0;
    let element = 0;

    while (manipulations.length > 0) {
        actualManipulation = manipulations.shift().split(' ');
        switch (actualManipulation.shift()) {
            case 'add':
                index = Number(actualManipulation.shift());
                if (index < 0) {
                    index = 0;
                    element = Number(actualManipulation.shift());
                    array.splice(index, 0, element);
                } else {
                    element = Number(actualManipulation.shift());
                    array.splice(index, 0, element);
                }
                break;
            case 'addMany':
                index = Number(actualManipulation.shift());
                let many = 0;
                for (let i = 0; i < actualManipulation.length; i++) {
                    if (index < 0) {
                        index = 0;
                        many = Number(actualManipulation[i]);
                        array.splice(index + i, 0, many);
                    } else {
                        many = Number(actualManipulation[i]);
                        array.splice(index + i, 0, many);
                    }
                }
                break;
            case 'contains':
                element = Number(actualManipulation.shift());
                console.log(array.indexOf(element));
                break;
            case 'remove':
                index = Number(actualManipulation.shift());
                if (index < 0 || index > array.length - 1) {} else {
                    array.splice(index, 1);
                }
                break;
            case 'shift':
                index = Number(actualManipulation.shift());
                index = index % array.length;
                let arrayForShift = array.slice(index - 1);
                if (index < 0) {
                    index = 0;
                    array.splice(index, 0);
                    for (let i = arrayForShift.length - 1; i > 0; i--) {
                        array.unshift(arrayForShift[i]);
                        array.pop();
                    }
                } else {
                    array.splice(index, 0);
                    for (let i = arrayForShift.length - 1; i > 0; i--) {
                        array.unshift(arrayForShift[i]);
                        array.pop();
                    }
                }
                break;
            case 'sumPairs':
                let sumArr = [];
                let lastNumFromOddArr = 0;
                if (array.length % 2 !== 0) {
                    lastNumFromOddArr = Number(array.pop());
                    for (let i = 0; i < array.length; i += 2) {
                        sumArr.push(Number(array[i]) + Number(array[i + 1]));
                    }
                    sumArr.push(lastNumFromOddArr);
                } else {
                    for (let i = 0; i < array.length; i += 2) {
                        sumArr.push(Number(array[i]) + Number(array[i + 1]));
                    }
                }
                array = sumArr;

                break;
        }

        if (manipulations[0] === 'print') {
            break;
        }
    }
    console.log(`[ ${array.join(', ')} ]`);
}

// arrayManipulator ([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

arrayManipulator ([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']); */

/* function arrayManipulator(array, commands) {
  let indexCommand = 0;
  let result = array.slice(0);
  let output = [];
  let command = commands[indexCommand++].split(" ");

  while (command[0] !== "print") {

    if (command[0] === "add") {
      let index = +command[1];  // +command превръща стринга в число
      let element = +command[2];
      result.splice(index, 0, element);
    }
    if (command[0] === "addMany") {
      let index = Number(command[1]);
      let newArray = command.slice(2).map(Number); //тук newArray е само елемент
      result.splice(index, 0, ...newArray);   // Тук става масив
    }
    if (command[0] === "contains") {
      let element = Number(command[1]);
      let index = result.indexOf(element);
      console.log(index);
    }
    if (command[0] === "remove") {
      let index = Number(command[1]);
      if (index < 0 || index > result.length - 1) {
        
      } else {
        result.splice(index, 1);
      }
    }
    if (command[0] === "shift") {
      let rotations = Number(command[1]);
      for (let i = 0; i < rotations; i++) {
        let element = result.shift();
        result.push(element);
      }
    }
    if (command[0] === "sumPairs") {
      if (result.length % 2 === 0) {
        for (let j = 0; j < result.length; j += 2) {
          output.push(result[j] + result[j + 1]);
        }
      } else {
        for (let j = 0; j < result.length - 1; j += 2) {
          output.push(result[j] + result[j + 1]);
        }
        output.push(result.pop());
      }
      result = output;
      output = [];
    }
    command = commands[indexCommand++].split(" ");
  }
  console.log(`[ ${result.join(", ")} ]`);
}


arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);

// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

// arrayManipulator ([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']); */