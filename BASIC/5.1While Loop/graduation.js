function graduationOrNot(arr) {
    let name = arr[0];
    let index = 1;
    let reiteration = 0;
    let average = 0;
    let sum = 0;
    let grade = 0;
    
    while (index < arr.length) {
        arr[index] = Number(arr[index]);
        if (arr[index] < 4) {
            index++;
            reiteration += 1;
            if (reiteration == 2) {
                break;
            }
            continue;
        }
        grade++;
        sum += arr[index];
        index++;
    }
    if (reiteration < 2) {
        average = sum / grade;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${grade+1} grade`);
    }
}

// graduationOrNot(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);

graduationOrNot(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);