function cinemaIncome(input) {
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let income = 0;

    if (type == "Premiere") {
        income = r * c * 12;
    } else if (type == "Normal") {
        income = r * c * 7.50;
    } else if (type == "Discount") {
        income = r * c * 5;
    }
    console.log(`${income.toFixed(2)} leva`);
}

cinemaIncome(["Normal", "21", "13"]);