function distance(x1, y1, x2, y2) {

    let firstdiff = Math.abs(x1 - x2);
    let seconddiff = Math.abs(y1 - y2);

    let difference = Math.sqrt((firstdiff * firstdiff) + (seconddiff * seconddiff));

    console.log(`${difference}`);
}

distance(2, 4, 5, 0);

/* distance(2.34, 15.66, -13.55, -2.9985); */

/* function distanceBetweenPoints(x1, y1, x2, y2) {
    // we will use pythagorean theorem
    // a^2 + b^2 = c^2
    // a & b are both sides of 90 deg triangle
    // c = Math.Sqrt(x^2 + b^2)
    // is the hypotenuse
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);

    // distance is "c"
    let distance = Math.sqrt((a * a) + (b * b));
    console.log(distance);
}

// distanceBetweenPoints(2, 4, 5, 0);
// distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985); */