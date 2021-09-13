/* function bonusSys(input) {
    let arr = input.slice().map(Number);
    let students = arr.shift();
    let lectures = arr.shift();
    let additionalBonus = arr.shift();
    let totalBonus = 0;
    let bonusArr = [];

    for (let i = 0; i < arr.length; i++) {
        let attendances = Number(arr[i]);
        totalBonus = (attendances / lectures) * (5 + additionalBonus);
        bonusArr.push(totalBonus);
    }

    if (bonusArr.length > 0) {
        let bestBonus = bonusArr.sort((a, b) => b - a).shift(); // bonusArr.reduce((a, b) => Math.max(a, b));
        let bestAttendences = arr.sort((a, b) => b - a).shift();

        console.log(`Max Bonus: ${Math.ceil(bestBonus)}.`);
        console.log(`The student has attended ${bestAttendences} lectures.`);
    } else {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    }
}

bonusSys(['5', '25', '30', '12', '19', '24', '16', '20']);

// bonusSys(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);

// bonusSys(['10', '30', '14']); */

/* function bonusSys(input) {
    let index = 0;
    let students = Number(input[index++]);
    let lectures = Number(input[index++]);
    let additionalBonus = Number(input[index++]);
    let bestBonus = Number.MIN_SAFE_INTEGER;
    let bestAttendences = Number.MIN_SAFE_INTEGER;
    let endArr = [];
    let flag = false;

    for (let i = 1; i <= students; i++) {
        let totalBonus = 0;
        let attendances = Number(input[index++]);
        totalBonus = (attendances / lectures) * (5 + additionalBonus);

        if (totalBonus > bestBonus) {
            flag = true;
            bestBonus = totalBonus;
            bestAttendences = attendances;
        }
    }

    if (flag) {
        endArr.push(bestBonus);
        endArr.push(bestAttendences);
    }

    if (endArr.length > 0) {
        console.log(`Max Bonus: ${Math.ceil(endArr[0])}.`);
        console.log(`The student has attended ${endArr[1]} lectures.`);
    } else {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    }
}

bonusSys(['5', '25', '30', '12', '19', '24', '16', '20']);

// bonusSys(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);

// bonusSys(['10', '30', '14']); */


/* function bonusScorring(input) {

    let studentsCount = Number(input.shift());
    let lectureCount = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let studentAttendances = input.map(i => Number(i));
    let array = [];
    
    for (let i = 0; i < studentAttendances.length; i++) {
        let totalBonus = (((studentAttendances[i] / lectureCount) * (5 + additionalBonus)));
        array.push(totalBonus);
    }

    let maxBonus = Math.max(...array);
    let bestStudent = array.indexOf(maxBonus);

    if (array.length > 0) {
        console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
        console.log(`The student has attended ${studentAttendances[bestStudent]} lectures.`);
    } else {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    }

}

bonusScorring([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]); */

function data(input) {

    let [studentNumber, countLecture, firstBonus] = [Number(input.shift(0)), Number(input.shift(1)), Number(input.shift(2))];
    let highest = 0;
    let attendancy = 0;

    for (let i = 0; i < studentNumber; i++) {
        let studentAtendance = Number(input[i]);
        let totalBonus = Math.ceil(studentAtendance / countLecture * (5 + firstBonus));

        if (totalBonus >= highest) {
            highest = totalBonus;
            attendancy = studentAtendance;
        }
    }

    console.log(`Max Bonus: ${highest}.`);
    console.log(`The student has attended ${attendancy} lectures.`);
}

data([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);