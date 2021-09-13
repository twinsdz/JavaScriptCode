function solve(input) {
    let str = input.shift();
    let line = input.shift();

    while (line !== 'Valid') {
        let [comm, ...data] = line.split(' ');

        if (line === 'Validation') {

            // ако проверката не е true тогава влиза в if-а
            if (!atLeastOneDigits(str)) {
                console.log("Email must consist at least one digit!");
            }

            if (!checkChars(str)) {
                console.log('Email must consist only of letters, digits and @!');
            }

            if (!checkCharsNum(str)) {
                console.log('Email must be at least 6 characters long!');
            }

            if (!checkUpper(str)) {
                console.log("Email must consist at least one uppercase letter!");
            }

            if (!checkLower(str)) {
                console.log("Email must consist at least one lowercase letter!");
            }

            line = input.shift();
            continue;

        } else if (comm === 'Upper') {
            let [index] = data;
            index = Number(index);
            let strToChange = str[index].toLocaleUpperCase(0);
            str = str.substring(0, index) + strToChange + str.substring(index);
            console.log(str);
        } else if (comm === 'Lower') {
            let [index] = data;
            index = Number(index);
            let strToChange = str[index].toLocaleLowerCase(0);
            str = str.substring(0, index) + strToChange + str.substring(index + 1);
            console.log(str);
        } else if (comm === 'Insert') {
            let [index, char] = data;
            index = Number(index);
            str = str.substring(0, index) + char + str.substring(index);
            console.log(str);
        } else if (comm === 'Change') {
            let [char, value] = data;
            value = Number(value);

            if (str.includes(char)) {
                let charNum = char.charCodeAt();
                let sum = charNum + value;
                let newChar = String.fromCharCode(sum);
                str = str.split(char).join(newChar);
                console.log(str);
            } else {
                console.log(str);
            }
        }
        line = input.shift();
    }

    // проверка с регекс за числа (най-малко едно)
    function atLeastOneDigits(str) {
        let pattern = /\d/g;
        let arr = str.match(pattern);
        // ако в масива има поне една цифра въща true
        return arr !== null ? true : false;
    }

    // проверка с регекс за брой букви, цифри и символи (6 или повече)
    function checkCharsNum(str) {
        let pattern = /[A-Za-z0-9@]/g;
        let arr = str.match(pattern);
        return arr.length >= 6 ? true : false;
    }

    // проверка с регекс за това дали има само букви, цифри и съответен символ
    function checkChars(str) {
        let pattern = /[A-Za-z0-9@]+/g;
        let arr = str.match(pattern);
        return arr !== null ? true : false;
    }

    // проверка с регекс за най-малко една голяма буква
    function checkUpper(str) {
        let pattern = /[A-Z]/g;
        let arr = str.match(pattern);
        return arr !== null ? true : false;
    }

    // проверка с регекс за най-малко една малка буква
    function checkLower(str) {
        let pattern = /[a-z]/g;
        let arr = str.match(pattern);
        return arr !== null ? true : false;
    }
}

solve(["invalidEmai@l",
    "Validation",
    "Add 2 p",
    "Change i 7",
    "Change n -1",
    "Change * 6",
    "Upper 6",
    "Valid"
]);

// solve(["emailIs1Valid",
//     "Change v 8",
//     "Add 2 m",
//     "Change a 1",
//     "Add 4 y",
//     "Valid"
// ]);