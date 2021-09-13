/* function solve(text){
    let words = text.split(' ');

    for (let i = 0; i < words.length; i++){
        if(words[i].includes('Java')){
            words[i] = words[i].replace('Java', 'JavaScript')
        }
    } 
    console.log(words.join(' '));
}

solve('I like Java! Java, Java, Java!'); */

/* function solve(text){
    let indexOfMatch = text.indexOf('Java');

    while(indexOfMatch !== -1){
        let startIndex = indexOfMatch;
        let firstPart = text.substring(0, startIndex);
        let secondPart = 'JavaScript';
        let thirdPart = text.substring(startIndex + 4);
        text = firstPart.concat(secondPart, thirdPart);
        indexOfMatch = text.indexOf('Java', indexOfMatch +1);
    }
    console.log(text);
}

solve('I like Java! Java, Java, Java!'); */

/* function solve(text){
       return text.replaceAll('Java', 'JavaScript');
    }
    
console.log(solve('I like Java! Java, Java, Java!'));
 */

let text = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.";

// let replacedText = text.replace(".bg", ".com"); // сменя само първото
let replacedText = text.split('.bg').join('.com'); // сменя и двете .bg
console.log(replacedText);