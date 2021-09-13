function budget(input) {

    let hire = Number(input[0]);

    let cake = (hire * 20) / 100;
    let drinks = cake * 0.55;
    let animator = hire / 3;
    let sum = hire + cake + drinks + animator;

    console.log(sum);
}

budget(["2250"]);