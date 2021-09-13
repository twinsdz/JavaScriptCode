/* function swap(input) {
    let lastIndex = input.length - 1;
    // въртим до средата на масива
    for (let i = 0; i < input.length / 2; i++) {
        // взимаме елемент от масива
        // запазваме стойността във временна променлива
        let temp = input[i];
        // определяне на огледалния индекс
        // записваме стойността на огледалния елемент на мястото на текущия
        input[i] = input[lastIndex - i];
        // записваме стойността на временната променлива в огледалния елемент на масива
        input[lastIndex - i] = temp;
    }
    console.log(input.join(' '));
} */


function swap(input) {
    
    for (let i = 0; i < input.length / 2; i++) {
        let firstElement = input[i];
        let lastElement = input.length - 1 - i;
        input[i] = input[lastElement];
        input[lastElement] = firstElement;
    }
    console.log(input.join(' '));
}

swap (['a', 'b', 'c', 'd', 'e']);


