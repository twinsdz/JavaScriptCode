function itWork(input) {
    let index = 0;
    let bestSalary = Number.MIN_SAFE_INTEGER;
    let bestCountry = "";
    let salaryBg = 18800;
    let salaryGer = 51500;
    let salaryCh = 61800;

    let bgNetto = ((salaryBg * 0.968) * 0.90) * 0.90;
    let gerNetto = ((salaryGer * 0.927) * 0.907) * 0.75;
    let chNetto = ((salaryCh - (341 * 12)) * 0.95) * 0.90;

    let health = false;

    for (let i = 1; i <= 3; i++) {
        let country = input[index++];
        let inputLine = input[index++];
        let currentSalary = 0;

        while (inputLine !== "next") {
            let expense = Number(inputLine);

            if (inputLine === "Yes" && health == false) {
                health = true;
                inputLine = input[index++];
                continue;
            }

            if (country === "Bulgaria") {
                bgNetto -= expense;
            } else if (country === "Germany") {
                gerNetto -= expense;
            } else if (country === "Switzerland") {
                chNetto -= expense;
                if (health) {
                    chNetto -= expense;
                }
            }

            inputLine = input[index++];
        }

        if (country === "Bulgaria") {
            bgNetto *= 0.51;
            currentSalary = bgNetto;
            console.log(`In ${country} you could save ${bgNetto.toFixed(2)} €.`);
        } else if (country === "Germany") {
            currentSalary = gerNetto;
            console.log(`In ${country} you could save ${gerNetto.toFixed(2)} €.`);
        } else if (country === "Switzerland") {
            chNetto *= 0.92;
            currentSalary = chNetto;
            console.log(`In ${country} you could save ${chNetto.toFixed(2)} €.`);
        }

        if (currentSalary > bestSalary) {
            bestSalary = currentSalary;
            bestCountry = country;
        }

    }

    console.log(`The best Country for you is ${bestCountry}!`);
}

itWork(["Bulgaria", "0", "720", "2400", "0", "next", "Germany", "9600", "936", "3600", "220", "next", "Switzerland", "10800", "3860", "7200", "365", "Yes", "250", "350", "800", "next"]);