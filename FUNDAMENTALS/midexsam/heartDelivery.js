/* function heartDelivery(arr) {
    let neighborhood = arr.shift().split('@').map(Number);
    let index = 0;
    let command = arr[index++];
    let lastIndex = 0;


    while (command !== 'Love!') {
        let tokens = command.split(' ');
        let jumpNum = +tokens[1];
        let indexToChange = 0;
        indexToChange = lastIndex + jumpNum;

        if (indexToChange >= neighborhood.length) {
            indexToChange = 0;
        }

        if (neighborhood[indexToChange] > 0) {
            num = neighborhood[indexToChange] - 2;
            neighborhood.splice(indexToChange, 1, num);
            lastIndex = indexToChange;
            if (neighborhood[indexToChange] === 0) {
                console.log(`Place ${indexToChange} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${indexToChange} already had Valentine's day.`);
            lastIndex = indexToChange;
        }
        command = arr[index++];
    }

    console.log(`Cupid's last position was ${lastIndex}.`);

    let filtered = neighborhood.filter(x => x > 0);

    if (filtered.length === 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${filtered.length} places.`);
    }
}

// heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);

heartDelivery(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!']); */

 function heartDelivery(input) {
    let houses = input.shift().split('@').map(Number);
    let index = 0;

    for (let line of input) {

        if (line === 'Love!') {
            break;
        }

        let jumpNum = Number(line.split(' ')[1]);
        index += jumpNum;

        if (index >= houses.length) {
            index = 0;
        }

        if (houses[index] <= 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            houses[index] -= 2;

            if (houses[index] <= 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
    }

    console.log(`Cupid's last position was ${index}.`);

    let missed = houses.filter(x => x > 0).length;

    if (missed == 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${missed} places.`);
    }
}

// heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);

heartDelivery(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!']); 