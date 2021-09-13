function solve(input) {
    let col = {};
    let unliked = 0;

    for (let command of input) {
        let cmd = command.split('-');
        let guest = cmd[1];
        let meal = cmd[2];

        switch (cmd[0]) {
            case 'Like':
                if (!col.hasOwnProperty(guest)) {
                    col[guest] = [meal];
                } else {
                    
                    if (!col[guest].includes(meal)) {
                        col[guest].push(meal);
                    }
                }
                break;
            case 'Unlike':
                if (col.hasOwnProperty(guest)) {

                    if (col[guest].includes(meal)) {
                        unliked++;
                        col[guest].splice(col[guest].indexOf(meal), 1);
                        console.log(`${guest} doesn't like the ${meal}.`);

                    } else if (!col[guest].includes(meal)) {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    }

                } else {
                    console.log(`${guest} is not at the party.`);
                }
                break;
        }
    }

    let arr = Object.entries(col);

    arr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    arr.forEach(el => {
        console.log(`${el[0]}: ${el[1].join(', ').trim()}`);
    });

    console.log(`Unliked meals: ${unliked}`);
}

solve(['Like-Krisi-shrimps', 'Unlike-Vili-carp', 'Unlike-Krisi-salad', 'Unlike-Krisi-shrimps', 'Stop']);

// output
// Vili is not at the party.
// Krisi doesn't have the salad in his/her collection.
// Krisi doesn't like the shrimps.
// Krisi:
// Unliked meals: 1