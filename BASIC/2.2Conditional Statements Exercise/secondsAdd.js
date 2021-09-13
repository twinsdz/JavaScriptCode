function contestant(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timethird = Number(input[2]);

    let totalTime = timeFirst + timeSecond + timethird;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);

    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

contestant(["14", "12", "10"]);