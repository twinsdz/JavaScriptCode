function studentInfo(studentName, age, averageGrade) {
    age = Number(age);
    averageGrade = Number(averageGrade);

    console.log(`Name: ${studentName}, Age: ${age}, Grade: ${averageGrade.toFixed(2)}`);

}

studentInfo('John', 15, 5.54678);