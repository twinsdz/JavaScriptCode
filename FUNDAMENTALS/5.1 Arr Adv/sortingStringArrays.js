// функция localeCompare() сортира по азбучен ред без да взима под внимание големи и малки букви

let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
// параметри a и b 
// words.sort();
words.sort((a, b) => a.localeCompare(b));
// words.sort((a, b) => b.localeCompare(a));
// ['bite', 'Eggs', 'Grip', 'jAw', 'nest']

console.log(words);
