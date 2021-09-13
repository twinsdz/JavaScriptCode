function howHoursPerDay(input) {
    let countBookPages = Number(input[0]);
    let countPagesPerHour = Number(input[1]);
    let countDays = Number(input[2]);
    let hours = countBookPages / countPagesPerHour;
    let hoursPerDay = hours / countDays;
    console.log(hoursPerDay);
}

howHoursPerDay(["212", "20", "2"])