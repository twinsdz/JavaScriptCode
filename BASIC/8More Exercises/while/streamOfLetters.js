/* function streamOfLetters(input) {
    let index = 0;
    let inputLine = input[index++];
    let word = '';
    let result = '';
    let isFirstTime99 = true;
    let isFirstTime110 = true;
    let isFirstTime111 = true;
    let command = '';

    while (inputLine !== 'End') {
        inputLineCode = inputLine.charCodeAt(inputLine);

        if ((inputLineCode > 65 && inputLineCode < 90) || (inputLineCode > 97 && inputLineCode < 122)) {

            if (inputLineCode === 99 && isFirstTime99) {
                command += inputLine;
                isFirstTime99 = false;
            } else if (inputLineCode === 110 && isFirstTime110) {
                command += inputLine;
                isFirstTime110 = false;
            } else if (inputLineCode === 111 && isFirstTime111) {
                command += inputLine;
                isFirstTime111 = false;
            } else {
                word += inputLine;
            }

            if (command.includes('c', 'o', 'n') && command.length === 3) {
                isFirstTime99 = true;
                isFirstTime110 = true;
                isFirstTime111 = true;
                result += word + ' ';
                word = '';
                command = '';
            }
        }
        inputLine = input[index++];
    }
    console.log(`${result}`);
}

// streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);

streamOfLetters(['%', '!', 'c', '^', 'B', '`', 'o', '%', 'o', 'o', 'M', ')', '{', 'n', '\\', 'A', 'D', 'End']);

// streamOfLetters(['o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']); */

/* function streamOfLetters(input) {
    index = 0;
    let command = input[index++];
    let word = "";
    let phrase = "";
    countC = 0;
    countN = 0;
    countO = 0;

    while (command !== "End") {
        let currentLetter = command;

        if ((currentLetter >= "A" && currentLetter <= "Z") || (currentLetter >= "a" && currentLetter <= "z")) {

            if (currentLetter === "c" && countC < 1) {
                countC++;
            } else if (currentLetter === "o" && countO < 1) {
                countO++;
            } else if (currentLetter === "n" && countN < 1) {
                countN++;
            } else {
                word += currentLetter;
            }

            if (countC === 1 && countN === 1 && countO === 1) {
                phrase += word + " ";
                word = "";
                countC = 0;
                countN = 0;
                countO = 0;
            }

        }
        command = input[index++];
    }
    console.log(phrase);
}

streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
streamOfLetters(['%', '!', 'c', '^', 'B', '`', 'o', '%', 'o', 'o', 'M', ')', '{', 'n', '\\', 'A', 'D', 'End']); */

function streamOfLetters(input) {
    let index = 0;
    let command = input[index++];
    let isO = false;
    let isN = false;
    let isC = false;
    let word = '';
    let result = '';

    while (command !== 'End') {
        let letter = command;

        if (letter >= 'A' && letter <= 'Z' || letter >= 'a' && letter <= 'z') {
            if (letter === 'o' && !isO) {
                isO = true;
            }
            else if (letter === 'n' && !isN) {
                isN = true;
            }
            else if (letter === 'c' && !isC) {
                isC = true;
            }
            else {
                word += letter;
            }

            if (isC && isO && isN) {
                result += word + ' ';
                isO = false;
                isN = false;
                isC = false;
                word ='';
 
            }
            command = input[index++];
        }
        else {
            command = input[index++];
        }
 
    }
 
    console.log(result);
}

// streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);

// streamOfLetters(['%', '!', 'c', '^', 'B', '`', 'o', '%', 'o', 'o', 'M', ')', '{', 'n', '\\', 'A', 'D', 'End']);

streamOfLetters(['o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']);