function scholarshipCheck(input) {
    let incoming = Number(input[0]);
    let gpa = Number(input[1]); // среден успех
    let minSalary = Number(input[2]);

    let socialScholarship = 0;
    let exelentResultScholarship = 0;

    if (incoming < minSalary) {
        if (gpa > 4.5) {
            socialScholarship = minSalary * 0.35;
        }
    }

    if (gpa >= 5.5) {
        exelentResultScholarship = gpa * 25;
    }
    if (socialScholarship > exelentResultScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if (exelentResultScholarship > socialScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(exelentResultScholarship)} BGN`);
    } else {
        console.log("You cannot get a scholarship!");
    }
}

scholarshipCheck(["480.00", "4.60", "450.00"]);
scholarshipCheck(["300.00", "5.65", "420.00"]);