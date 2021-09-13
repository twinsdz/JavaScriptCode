function renovation(input) {
    let index = 0;
    let h = Number(input[index++]);
    let w = Number(input[index++]);
    let ariaPercent = Number(input[index++]);
    let aria = h * w * 4;
    let ariaForPainting = aria - ((aria * ariaPercent) / 100);
    let inputLine = input[index];
    let colorL = 0;


    while (inputLine !== "Tired!") {
        inputLine = Number(input[index]);
        ariaForPainting -= inputLine;
        colorL = Math.abs(ariaForPainting);
        if (ariaForPainting <= 0){
            break;
        }
        inputLine = input[++index];
    }
        

    if (inputLine === "Tired!") {
        console.log(`${Math.ceil(Math.abs(ariaForPainting))} quadratic m left.`);
    } else if (colorL > 0){
        console.log(`All walls are painted and you have ${colorL} l paint left!`);
    } else {
        console.log('All walls are painted! Great job, Pesho!');
    }
}

renovation(["3","5","10","2","3","4","Tired!"]);

 /* renovation ("2", "3", "25", "6", "7", "8"]); */