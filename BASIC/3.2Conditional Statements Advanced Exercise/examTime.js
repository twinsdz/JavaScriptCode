function ifOnTime(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let commingHour = Number(input[2]);
    let commigMin = Number(input[3]);

    let totalexamMin = examHour * 60 + examMin;
    let totalcommingMin = commingHour * 60 + commigMin;
    let diff = totalexamMin - totalcommingMin;

    if (diff > 30) {
        console.log("Early");

        if (diff >= 60) {
            let hours = Math.trunc(diff / 60);
            let minutes = diff % 60;

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hours}:${minutes} hours before the start`);
        } else {
            console.log(`${diff} minutes before the start`);
        }
    } else if (diff >= 0) {
        console.log("On time");
        if (diff !== 0) {
            console.log(`${diff} minutes before the start`)
        }

    } else {
        console.log("Late");
        diff = Math.abs(diff);
        // diff *= -1;

        if (diff >= 60) {
            let hours = Math.trunc(diff / 60);
            let minutes = diff % 60;

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hours}:${minutes} hours after the start`);
        } else {
            console.log(`${diff} minutes after the start`);
        }
    }
}

ifOnTime(["9", "30", "9", "50"]);

ifOnTime(["16", "00", "15", "00"]);

ifOnTime(["9", "00", "8", "30"]);