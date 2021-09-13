/* function walking(arr) {
    let index = 0;
    let goalSteps = 10000;
    let steps = 0;

    while (steps < goalSteps) {
        let inputLine = arr[index++];


        if (inputLine === "Going home") {
            steps += Number(arr[index++]);
            break;
        }
        steps += Number(inputLine);
    }

    let stepsToPrint = Math.abs(steps - goalSteps);
    
    if (steps >= goalSteps) {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsToPrint} steps over the goal!`);
    } else {
        console.log(`${stepsToPrint} more steps to reach goal.`);
    }

}

// walking(["1000", "1500", "2000", "6500"]); 

walking(["1500", "300", "2500", "3000", "Going home", "200"]); */

/* function walking(input) {
    let index = 0;
    let goul = 10000;
    let sumSteps = 0;
    let inputLine = input[index++];

    while (inputLine !== 'Going home') {
        let currentSteps = Number(inputLine);
        sumSteps += currentSteps;

        if (sumSteps >= goul || index >= input.length) {
            break;
        }

        inputLine = input[index++];
    }

    if (inputLine === 'Going home') {
        let stepsBackHome = Number(input[index++]);
        sumSteps += stepsBackHome;
    }
    let stepsToPrint = Math.abs(goul - sumSteps);
    if (sumSteps >= goul) {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsToPrint} steps over the goal!`);
    } else {
        console.log(`${stepsToPrint} more steps to reach goal.`);
    }
}

/* walking(["1000", "1500", "2000", "6500"]); */

// walking(["1500", "300", "2500", "3000", "Going home", "200"]);

// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);

// walking (["125", "250", "4000", "30", "2678", "4682"]); */


function walking(input) {
    let goul = 10000;
    let sumSteps = 0;

    for (let i = 0; i < input.length; i++) {
        let currentSteps = input[i];

        if (currentSteps === 'Going home'){
            sumSteps += Number (input[input.length-1]);
            break;
        } else {
            currentSteps = Number (currentSteps);
            sumSteps += currentSteps;
        }
    }
    let stepsToPrint = Math.abs(goul - sumSteps);
    if (sumSteps >= goul) {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsToPrint} steps over the goal!`);
    } else {
        console.log(`${stepsToPrint} more steps to reach goal.`);
    }
}

walking(["1000", "1500", "2000", "6500"]);

// walking(["1500", "300", "2500", "3000", "Going home", "200"]);

// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);

// walking (["125", "250", "4000", "30", "2678", "4682"]);