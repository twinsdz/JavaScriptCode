function puppyFood(input) {
    let index = 1;
    let kgFood = Number(input[0]);
    let grFood = kgFood * 1000;
    let command = input[index];
    let eatenFood = 0;

    while (command !== 'Adopted') {
        command = Number(input[index++]);
        eatenFood += command;
        command = input[index];
        
    }
    if (eatenFood <= grFood) {
        console.log(`Food is enough! Leftovers: ${Math.abs(grFood - eatenFood)} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(grFood - eatenFood)} grams more.`);
    }
}

puppyFood(['345', '400', '4', '130', '180', '230', '120', 'Adopted']);