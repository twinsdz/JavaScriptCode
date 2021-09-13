function printCertificate(grade, nameArr) {
    if (pass(grade)) {
        printHeader();
        printName(nameArr);
        formatGrade(grade);
    } else {
        let msg = `${nameArr[0]} ${nameArr[1]} does not qualify`;
        console.log(msg);
    }

    function pass(grade) {
        return grade >= 3;
    }

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function printName(nameArr) {
        console.log(`${nameArr[0]} ${nameArr[1]}`);
    }

    function formatGrade(grade) {
        if (grade < 3) {
            console.log(`Fail (2)`);
        } else if (grade < 3.50) {
            console.log(`Poor (${grade})`);
        } else if (grade < 4.50) {
            console.log(`Very good (${grade})`);
        } else if (grade < 5.50) {
            console.log(`Very good (${grade})`);
        } else {
            console.log(`Excellent (${grade})`);
        }
    }
}

printCertificate(4.50, ['John', 'Smith']);