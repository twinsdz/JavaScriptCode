/* function hospital(input) {
    let index = 0;
    let daysCount = Number(input[index++]);
    let patientPerDay = Number(input[index++]);
    let doctors = 7;

    let currentTreatedPatients = 0;
    let currentUntreatedPatients = 0;

    let sumTreatedPatients = 0;
    let sumUntreatedPatient = 0;

    for (let i = 1; i <= daysCount; i++) {

        if (i % 3 === 0) {
            if (sumUntreatedPatient > sumTreatedPatients) {
                doctors++;
            }
        }

        if (patientPerDay >= doctors) {
            currentTreatedPatients = doctors;
        } else{
            currentTreatedPatients = patientPerDay;
        }


        currentUntreatedPatients = patientPerDay - doctors;

        if (currentUntreatedPatients <= 0) {
            currentUntreatedPatients = 0;
        }

        sumTreatedPatients += currentTreatedPatients;
        sumUntreatedPatient += currentUntreatedPatients;

        patientPerDay = Number(input[index++]);
    }

    console.log(`Treated patients: ${sumTreatedPatients}.`);
    console.log(`Untreated patients: ${sumUntreatedPatient}.`);
}

hospital(['4', '7', '27', '9', '1']); 

hospital([ '6', '25', '25', '25', '25', '25', '2']); */

/* function patients(input) {
    let index = 0;
    let days = Number(input[index++]);
    let patientsPerDay = Number(input[index++]);
    let doctors = 7;
    let sumTreatedPatients = 0;
    let sumUntreatedPatient = 0;
    
    let currentTreatedPatients = 0;
    let currentUntreatedPatients = 0;

    for (let i = 1; i <= days; i++) {

        if (i % 3 === 0) {
            if (sumUntreatedPatient > sumTreatedPatients) {
                doctors++;
            }
        }
        if (patientsPerDay >= doctors) {
            currentTreatedPatients = doctors;
        } else {
            currentTreatedPatients = patientsPerDay;
        }

        currentUntreatedPatients = patientsPerDay - doctors;

        if (currentUntreatedPatients <= 0) {
            currentUntreatedPatients = 0;
        }

        sumTreatedPatients += currentTreatedPatients;
        sumUntreatedPatient += currentUntreatedPatients;

        patientsPerDay = Number(input[index++]);
    }
    console.log(`Treated patients: ${sumTreatedPatients}.`);
    console.log(`Untreated patients: ${sumUntreatedPatient}.`);
}

patients(["6", "25", "25", "25", "25", "25", "2"]); */

function patients(input) {
    let index = 0;
    let days = Number(input[index++]);
    let doctors = 7;
    let sumTreatedPatients = 0;
    let sumUntreatedPatient = 0;

    let currentTreatedPatients = 0;
    let currentUntreatedPatients = 0;

    while (index <= input.length - 1) {
        let patientsPerDay = Number(input[index]);
        if (index % 3 === 0) {
            if (sumUntreatedPatient > sumTreatedPatients) {
                doctors++;
            }
        }

        if (patientsPerDay >= doctors) {
            currentTreatedPatients = doctors;
        } else {
            currentTreatedPatients = patientsPerDay;
        }

        currentUntreatedPatients = patientsPerDay - doctors;

        if (currentUntreatedPatients <= 0) {
            currentUntreatedPatients = 0;
        }
        
        sumTreatedPatients += currentTreatedPatients;
        sumUntreatedPatient += currentUntreatedPatients;
        patientsPerDay = Number(input[index++]);
    }
    console.log(`Treated patients: ${sumTreatedPatients}.`);
    console.log(`Untreated patients: ${sumUntreatedPatient}.`);
}

patients(["6", "25", "25", "25", "25", "25", "2"]);