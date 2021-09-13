function bonusScore(arr) {
    let input = Number(arr[0]);
    let bonus = 0.0;

    if (input >= 1000) {
        bonus = input * 0.10;
    } else if (input > 100) {
        bonus = input * 0.20;
    } else if (input <= 100) {
        bonus = 5;
    }

    if (input % 2 == 0) {
        bonus += 1;
    } else if (input % 10 == 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(input + bonus);

}

bonusScore(["15875"]);