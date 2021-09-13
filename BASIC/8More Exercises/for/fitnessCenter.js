function fitness (input){
    let index = 0;
    let customersCount = Number (input[index++]);

    let shakeCount = 0;
    let barCount = 0;

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;

    let workOutCount = 0;
    let proteinCount = 0;

    let workOutPercent = 0;
    let proteinPercent = 0;

    for (let i = 1; i < input.length; i++){
        let inputline = input[i];

        if (inputline === 'Back'){
            backCount++;
            workOutCount++;
        } else if (inputline === 'Chest'){
            chestCount++;
            workOutCount++;
        } else if (inputline === 'Legs'){
            legsCount++;
            workOutCount++;
        } else if (inputline === 'Abs'){
            absCount++;
            workOutCount++;
        } else if (inputline === 'Protein shake'){
            shakeCount++;
            proteinCount++;
        } else if (inputline === 'Protein bar'){
            barCount++;
            proteinCount++;
        } else{
            break;
        }
    }

    workOutPercent = (workOutCount / customersCount) * 100;
    proteinPercent = (proteinCount / customersCount) * 100;

    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${shakeCount} - protein shake`);
    console.log(`${barCount} - protein bar`);
    console.log(`${workOutPercent.toFixed(2)}% - work out`);
    console.log(`${proteinPercent.toFixed(2)}% - protein`);

}

fitness (['10', 'Back', 'Chest', 'Legs', 'Abs', 'Protein shake', 'Protein bar', 'Protein shake', 'Protein bar', 'Legs', 'Abs', '']);

/* fitness(['7', 'Chest', 'Back', 'Legs', 'Legs', 'Abs', 'Protein shake', 'Protein bar', '']); */