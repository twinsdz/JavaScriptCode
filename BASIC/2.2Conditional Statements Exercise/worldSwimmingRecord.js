function recordCheck(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeForM = Number(input[2]);

    let swimingTime = distance * timeForM;
    let delayTime = Math.floor(distance / 15) * 12.5;
    let totalTime = swimingTime + delayTime;

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        neededTime = totalTime - worldRecord;
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`);
    }
}

recordCheck(["10464", "1500", "20"]);
/* recordCheck(["55555.67", "3017", "5.03"]); */