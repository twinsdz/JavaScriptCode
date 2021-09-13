function solve(input) {

    lenghtCm = Number(input[0]);
    hightCm = Number(input[1]);
    widthCm = Number(input[2]);
    percentTaken = Number(input[3]);

    let percentNeeded = (100 - percentTaken) / 100;
    let volume = lenghtCm * hightCm * widthCm;
    let totalLiters = volume * 0.001;

    totalLiters = totalLiters * percentNeeded;
    console.log(totalLiters);
}

solve(["85", "75", "47", "17"]);