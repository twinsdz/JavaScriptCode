function graduationOrNot(input) {
    let index = 0;
    let studentName = input[index++];
    let yearsFailed = 0;
    let year = 1;
    let total = 0;

    let yearlyGrade = Number(input[index++]);

    while (year <= 12) {

        if (yearlyGrade < 4) {
            yearsFailed++;

            if (yearsFailed === 2) {
                break;
            }
        } else {
            total += yearlyGrade;
            year++;
        }
        yearlyGrade = Number(input[index++]);
    }
    if (yearsFailed < 2) {
        let averageGrade = (total / 12).toFixed(2);

        console.log(`${studentName} graduated. Average grade: ${averageGrade}`);
    } else {
        console.log(`${studentName} has been excluded at ${year} grade`);
    }
}

graduationOrNot(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);

// graduationOrNot(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);