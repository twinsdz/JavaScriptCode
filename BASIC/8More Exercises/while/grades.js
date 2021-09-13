function grades(input) {
    let index = 0;
    let studentsCount = Number(input[index++]);
    let gradesSum = 0;

    let fail = 0;
    let between3and4 = 0;
    let between4and5 = 0;
    let exelent = 0;

    for (let i = 0; i <= studentsCount; i++) {
        let currentGrades = Number(input[index++]);
        gradesSum += currentGrades;

        if (currentGrades >= 2 && currentGrades <= 2.99) {
            fail++;
        } else if (currentGrades >= 3 && currentGrades <= 3.99) {
            between3and4++;
        } else if (currentGrades >= 4 && currentGrades <= 4.99) {
            between4and5++;
        } else if (currentGrades >= 5) {
            exelent++;
        }
    }

    let averageGrades = gradesSum / studentsCount;

    console.log(`Top students: ${(exelent / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(between4and5 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(between3and4 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fail / studentsCount * 100).toFixed(2)}%`);
    console.log(`Average: ${averageGrades.toFixed(2)}`);
}

grades(['10', '3', '2.99', '5.68', '3.01', '4', '4', '6', '4.5', '2.44', '5', '']);