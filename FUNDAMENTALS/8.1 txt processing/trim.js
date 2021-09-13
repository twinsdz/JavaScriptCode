/* function solve(text) {
    
    let trimed = text.trim();

    return trimed;
}

console.log(solve("                   A small sentence with small some words"               ));
console.log(solve("       \t\t\t         A small sentence with small some words"            ));  // \t табулация 
console.log(solve("        \n\n\n           A small sentence with small some words"         ));  // \n нов ред */


/* function solve(text) {
    return startsWith(text, 'A small');

    function startsWith(text, substr){
        let myTextSubstr = text.substring(0, substr.length);

        return myTextSubstr === substr;
     }
    
}

console.log(solve("A small sentence with small some words")); */

function solve(text) {
    return endsWith(text, 'words');
    
     function endsWith(text, substr){
        let endingSubstr = text.slice(-substr.length);

        return endingSubstr === substr;
     }
    
}

console.log(solve("A small sentence with small some words"));


/* function solve(text) {
    return text.startsWith(text, 'A small');
     }

console.log(solve("A small sentence with small some words")); */