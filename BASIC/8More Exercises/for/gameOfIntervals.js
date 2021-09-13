function game(input) {
    let index = 0;
    let stepCount = Number(input[index++]);

    let points = 0;
    let intervalTo9 = 0;
    let intervalTo19 = 0;
    let intervalTo29 = 0;
    let intervalTo39 = 0;
    let intervalTo50 = 0;
    let intervalInvalid = 0;

    for (let i = 0; i < stepCount; i++) {
        let step = Number(input[index++]);

        if (step >= 0 && step <= 9) {
            points += step * 0.20;
            intervalTo9++;
        } else if (step >= 10 && step <= 19) {
            points += step * 0.30;
            intervalTo19++;
        } else if (step >= 20 && step <= 29) {
            points += step * 0.40;
            intervalTo29++;
        } else if (step >= 30 && step <= 39) {
            points += 50;
            intervalTo39++;
        } else if (step >= 40 && step <= 50) {
            points += 100;
            intervalTo50++;
        } else {
            points /= 2;
            intervalInvalid++;
        }
    }
    console.log(`${points.toFixed(2)}`);
    console.log(`From 0 to 9: ${(intervalTo9 / stepCount * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(intervalTo19 / stepCount * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(intervalTo29 / stepCount * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(intervalTo39 / stepCount * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(intervalTo50 / stepCount * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(intervalInvalid / stepCount * 100).toFixed(2)}%`);
}

game(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);