function mountainRun(recordInS, distanceInM, timeInS) {
    recordInS = Number(recordInS);
    distanceInM = Number(distanceInM);
    timeForM = Number(timeInS);

    let georgesTime = distanceInM * timeForM;
    georgesTime += Math.floor(distanceInM / 50) * 30;

    if (georgesTime < recordInS) {
        console.log(`Yes! The new record is ${georgesTime.toFixed(2)} seconds.`);
    } else {
        neededTime = georgesTime - recordInS;
        console.log(`No! He was ${neededTime.toFixed(2)} seconds slower.`);
    }
}

mountainRun("10164", "1400", "25");

/* mountainRun("5554.36", "1340", "3.23"); */

/* mountainRun ("1377", "389", "3");  */