function lunchBreak (filmName, filmDuration, breakDuration){
    filmDuration = Number (filmDuration);
    breaktDuration = Number (breakDuration);

    let lunchDuration = breakDuration / 8;
    let restDuration = breakDuration / 4;
    let restTime = Math.abs(breakDuration - lunchDuration - restDuration);
    

    if (restTime >= filmDuration){
        console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(restTime - filmDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil(filmDuration - restTime)} more minutes.`);
    }
}

lunchBreak ("Game of Thrones", "48", "60");