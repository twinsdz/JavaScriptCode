function solve([input]) {
    let pattern = /<(\w+)[^>]*>.*?<\/\1>/gm; // \/\1 Означава хвани първата група 
    let result1 = input.match(pattern); // ако регекса няма флаг g match връща масив с информация само за първото съвпадение, ако има g връща всички съвпадения в масив. Флага g (global) търси повече от едно съвпадение, без него регекса намира само едно.
    let result2 = pattern.exec(input); // regexs.exec(string)
    console.log(result1.join('\n'));
    console.log(result2.join('\n'));
}

solve(['<b>Regular Expressions</b> are cool! <p> I am a paragraph </p> … some text after Hello, <div> I am a <code> DIV </code></div > !<span> Hello, I am Span </span> <a href = "https://softuni.bg/" > SoftUni < /a>']);

/* function solve([input]) {
    let pattern = /<(\w+)[^>]*>.*?<\/\1>/gm;
    // проверка за валидност с регекс булева стойност
    let hasMatch = pattern.test(input); // test is Boolean
    console.log(hasMatch);
}

solve(['<b>Regular Expressions</b> are cool! <p> I am a paragraph </p> … some text after Hello, <div> I am a <code> DIV </code></div > !<span> Hello, I am Span </span> <a href = "https://softuni.bg/" > SoftUni < /a>']); */