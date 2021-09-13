/* function exsamPreparation(arr) {
    let index = 0;
    let badGrades = 0;
    let maxBadGrades = Number(arr[index++]); // arr[0]
    let sumGrades = 0;
    let problemsCount = 0;
    let lastProblem = undefined;
    let currentProblem = arr[index++];

    while (currentProblem !== "Enough") {
        let currentGrade = Number(arr[index++]);

        if (currentGrade <= 4) {
            badGrades++;

            if (badGrades === maxBadGrades) {
                break;
            }

        }
        sumGrades += currentGrade;
        problemsCount++;
        lastProblem = currentProblem;
        currentProblem = arr[index++];
    }

    if (badGrades === maxBadGrades) {
        console.log(`You need a break, ${maxBadGrades} poor grades.`);
    } else {
        console.log(`Average score: ${(sumGrades / problemsCount).toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

exsamPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]); */

function exsamPreparation(input) {
    let index = 0;
    let badGradeCount = Number(input[index++]);
    let averageScore = 0;
    let sumProblems = 0;
    let sumBadGrades = 0;
    let sumGrades = 0;
    let inputLine = input[index++];
    let lastProblem = '';

    while (inputLine !== 'Enough') {
        let currentProblem = inputLine;
        let currentGrade =  Number(input[index++]);
        lastProblem = currentProblem;

        if (currentGrade <= 4) {
            sumBadGrades++;
        }
        
        if(badGradeCount === sumBadGrades){
            break;
        }

        sumProblems++;
        sumGrades += currentGrade;
        
        inputLine = input[index++];
    }

    averageScore = sumGrades / sumProblems;

    if (sumBadGrades >= badGradeCount){
        console.log(`You need a break, ${sumBadGrades} poor grades.`);
    } else {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${sumProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

exsamPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
// exsamPreparation (["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
