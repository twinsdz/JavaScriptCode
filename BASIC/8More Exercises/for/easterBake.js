function easterBake(input) {
    let index = 1;
    let breadCount = Number(input[0]);
    let sugarGrTotal = 0;
    let flourGrTotal = 0;
    let mostSugarGr = Number.MIN_SAFE_INTEGER;
    let mostFlourGr = Number.MIN_SAFE_INTEGER;
    let sugarPackages = 0;
    let flourPackages = 0;

    for (let i = 0; i < breadCount; i++) {
        let currentSugarGr = Number(input[index++]);
        let currentFlourGr = Number(input[index++]);

        sugarGrTotal += currentSugarGr;
        flourGrTotal += currentFlourGr;

        if (currentSugarGr > mostSugarGr) {
            mostSugarGr = currentSugarGr;
        } 

        if (currentFlourGr > mostFlourGr) {
            mostFlourGr = currentFlourGr;
        }
    }
    
    sugarPackages = sugarGrTotal / 950;
    flourPackages = flourGrTotal / 750;

    console.log(`Sugar: ${Math.ceil(sugarPackages)}`);
    console.log(`Flour: ${Math.ceil(flourPackages)}`);
    console.log(`Max used flour is ${mostFlourGr} grams, max used sugar is ${mostSugarGr} grams.`);
}

easterBake([ '3', '400', '350', '250', '300', '450', '380', '']);

/* easterBake ([ '4', '500', '350', '560', '430', '600', '345', '578', '543', '']); */ 