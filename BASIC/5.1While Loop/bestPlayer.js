function bestPlay(input) {
    let index = 0;
    let command = input[index++];
    let bestPlayer = '';
    let mostGoals = 0;
    let isHatTrick = false;

    while (command !== 'END') {
        let name = command;
        let goalsCount = Number(input[index]);

        if (goalsCount > mostGoals) {
            bestPlayer = name;
            mostGoals = goalsCount;
        }

        if (mostGoals >= 10) {
            isHatTrick = true;
            break;
        } else if (mostGoals >= 3) {
            isHatTrick = true;
        }
        command = input[index++];
    }
    console.log(`${bestPlayer} is the best player!`);
    if (isHatTrick) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }

}

/* bestPlay([
    'Neymar', '2',
    'Ronaldo', '1',
    'Messi', '3',
    'END', ''
]); */

//  bestPlay ([ 'Silva', '5', 'Harry Kane', '10', '' ]);

 bestPlay ([ 'Rooney', '1', 'Junior', '2', 'Paolinio', '2', 'END', '' ]);

//  bestPlay ([ 'Petrov', '2', 'Drogba', '11', '' ]);

/*  bestPlayer ([
     'Zidane',  '1',
     'Felipe',  '2',
     'Johnson', '4',
     'END',     '']); */