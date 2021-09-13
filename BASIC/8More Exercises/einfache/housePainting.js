function painting(input) {
    let index = 0;
    let x = Number(input[index++]);
    let y = Number(input[index++]);
    let h = Number(input[index++]);

    let sideWalls = (2 * (x * y)) - ((1.5 * 1.5) * 2);
    let door = 1.2 * 2;
    let frontAndBackWalls = 2 * (x * x) - door;
    let totalWalls = sideWalls + frontAndBackWalls;
    let roofSides = 2 * (x * y);
    let roofTriangle = 2 * ((x * h) / 2);
    let totalRoof = roofSides + roofTriangle;

    let greenColor = totalWalls / 3.4;
    let redColor = totalRoof / 4.3;

    console.log(`${greenColor.toFixed(2)}`);
    console.log(`${redColor.toFixed(2)}`);
}

painting(['6', '10', '5.2']);