function wedding(input) {
    let manCount = Number(input[0]);
    let womanCount = Number(input[1]);
    let tables = Number(input[2]);
    let counter = 0;
    let placesFinished = false;
    let result = "";

    for (let i = 1; i <= manCount; i++) {
        for (let j = 1; j <= womanCount; j++) {
            counter++;
            result += `(${i} <-> ${j}) `;

            if (counter == tables) {
                placesFinished = true;
                break;
            }
        }
        if (placesFinished) {
            break;
        }
    }
    console.log(`${result}`);
}

/* wedding(['2', '2', '6', '']); */
/* wedding ([ '2', '2', '3', '' ]); */
wedding(['5', '8', '40', '']);