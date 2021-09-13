function pointOutIn(first, second, point) {
    first = Number(first);
    second = Number(second);
    point = Number(point);

    let left = Math.min(first, second);
    let rigth = Math.max(first, second);

    let distanceLeft = Math.abs(left - point);
    let distanceRigth = Math.abs(rigth - point);

    let minDistance = Math.min(distanceLeft, distanceRigth);

    if (point >= left && point <= rigth) {
        console.log('in');
    } else {
        console.log('out');
    }
    console.log(`${minDistance}`);
}

/* pointOutIn("10", "5", "7"); */

pointOutIn("8", "10", "5");

/* pointOutIn("1", "-2", "3"); */