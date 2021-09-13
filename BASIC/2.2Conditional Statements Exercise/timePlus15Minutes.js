/* function time(input) {
    let hour = Number(input[0]);
    let min = Number(input[1]);
    let totalMinutes = hour * 60 + min + 15;
    let resultHour = Math.trunc(totalMinutes / 60);
    let resultMin = totalMinutes % 60;

    if (resultHour === 24) {
        resultHour = 0;
    }

    if (resultMin < 10) {
        console.log(`${resultHour}:0${resultMin}`);
    } else {
        console.log(`${resultHour}:${resultMin}`);
    }
} */

function time(input) {
    let hour = Number(input[0]);
    let min = Number(input[1]) + 15;

    if (min >= 60) {
        hour++;
        min -= 60;
    }

    if (hour >= 24) {
        hour -= 24;
    }

    if (min < 10) {
        console.log(`${hour}:0${min}`);
    } else {
        console.log(`${hour}:${min}`);
    }
}

time(["1", "46"]);
time(["0", "01"]);
time(["23", "59"]);
time(["11", "08"]);
time(["12", "49"]);