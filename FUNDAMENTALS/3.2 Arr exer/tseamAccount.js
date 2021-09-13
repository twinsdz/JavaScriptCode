function solve(arr) {
    let matrix = arr.map(index => index.split(' '));
    let index = 0;

    let petersGames = matrix[index++];

    while (matrix[index][0] !== 'Play!') {
        let commands = matrix[index];
        switch (commands[0]) {
            case 'Install':
                if (!petersGames.includes(commands[1])) {
                    petersGames[petersGames.length] = commands[1];
                } else {
                    break;
                }
                break;
            case 'Uninstall':
                if (petersGames.includes(commands[1])) {
                    let indexOfGame = petersGames.indexOf(commands[1]);
                    petersGames.splice(indexOfGame, 1);
                } else {
                    break;
                }
                break;
            case 'Update':
                if (petersGames.includes(commands[1])) {
                    let indexOfGame = petersGames.indexOf(commands[1]);
                    let game = petersGames.splice(indexOfGame, 1);
                    petersGames[petersGames.length] = game[0];
                } else {
                    break;
                }
                break;
            case 'Expansion':
                let gameChanged = commands[1].split('-');
                if (petersGames.includes(gameChanged[0])) {
                    let indexOfGame = petersGames.indexOf(gameChanged[0]);
                    gameChanged = gameChanged.join(':');
                    petersGames.splice(indexOfGame + 1, 0, gameChanged);
                } else {
                    break;
                }
                break;
        }
        matrix[index++];
    }

    console.log(petersGames.join(' '));
}

solve(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);

solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
]);