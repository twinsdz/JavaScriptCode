function solve(input) {
    let index = 0;
    let w = Number(input[index++]);
    let l = Number(input[index++]);
    let h = Number(input[index++]);
    let averageH = Number(input[index++]);

    let capacityOfship = w * l * h;
    let roomCapacity = (averageH + 0.40) * 2 * 2;
    let enoughSpaceForPersons = Math.floor(capacityOfship / roomCapacity);

    if (enoughSpaceForPersons >= 3 && enoughSpaceForPersons <= 10) {
        console.log(`The spacecraft holds ${enoughSpaceForPersons} astronauts.`);
    } else if (enoughSpaceForPersons < 3) {
        console.log(`The spacecraft is too small.`);
    } else {
        console.log(`The spacecraft is too big.`);
    }


}

solve(['3.5', '4', '5', '1.70']);
// solve(['3', '3', '4', '1.68', '']);