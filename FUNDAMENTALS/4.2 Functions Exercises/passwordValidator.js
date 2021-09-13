function passValidator(pass) {

    function isValidLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return 'Password must be between 6 and 10 characters';
        }
    }
    function isValidChars(pass) {
        let isValidPass = true;

        for (let i = 0; i < pass.length; i++) {
            let isValidChar = true;
            let currentChar = pass[i];
            let currentCharNum = currentChar.charCodeAt();

            if (currentCharNum >= 48 && currentCharNum <= 57 ||
                currentCharNum >= 65 && currentCharNum <= 90 ||
                currentCharNum >= 97 && currentCharNum <= 122) {
                isValidChar = true;
            } else {
                isValidChar = false;
                isValidPass = false;
                break;
            }
        }
        return isValidPass ? true : 'Password must consist only of letters and digits';
    }

    function atLeastTwoDigits(pass) {
        // let arrPass = pass.split('');
        let numCount = 0;
        for (let i = 0; i < pass.length; i++) {
            let currentChar = pass[i];
            let currentCharNum = currentChar.charCodeAt();

            if (currentCharNum >= 48 && currentCharNum <= 57) {
                numCount++;
            }
        }
        return numCount >= 2 ? true : 'Password must have at least 2 digits';
    }

    let result = [];

    if (isValidLength(pass) !== true) {
        result.push(isValidLength(pass));
    }

    if (isValidChars(pass) !== true) {
        result.push(isValidChars(pass));
    }

    if (atLeastTwoDigits(pass) !== true) {
        result.push(atLeastTwoDigits(pass));
    }

    if (isValidLength(pass) === true && isValidChars(pass) === true && atLeastTwoDigits(pass) === true) {
        result.push('Password is valid');
    }

    return result.join('\n');
}

// console.log(passValidator('logIn'));

// console.log(passValidator('MyPass123'));

console.log(passValidator('Pa$s$s'));