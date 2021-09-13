function solve(input) {

    if (!input[0].includes('|')) {
        return;
    }

    let mostFavorite = input.shift().split(' | ');
    let inputLine = input.shift();

    while (inputLine !== 'Stop!') {
        let [command, genre, newGenre] = inputLine.split(' ');

        if (command === 'Join') {
            if (!mostFavorite.includes(genre)) {
                mostFavorite.push(genre);
            }
        } else if (command === 'Drop') {
            if (mostFavorite.includes(genre)) {
                let index = mostFavorite.indexOf(genre);
                mostFavorite.splice(index, 1);
            }
        } else if (command === 'Replace') {
            if (mostFavorite.includes(genre) && !mostFavorite.includes(newGenre)) {
                let index = mostFavorite.indexOf(genre);
                mostFavorite[index] = newGenre;
            }
        }
        
        if (input.length <= 0) {
            break;
        }
        inputLine = input.shift();
    }
    console.log(mostFavorite.join(' '));
}



solve(["Romance | Fiction | Horror | Mystery",
    "Drop Romance",
    "Join Fantasy",
    "Stop!"
]);

// solve(["Poetry | Romance",
//     "Drop Children",
//     "Replace Fantasy Crime",
//     "Stop!"
// ]);

// solve(["Thriller | Young | Crime", "Join Political",
// ]);

// solve(["Replace Young Fairytale",
// "Stop!"]);