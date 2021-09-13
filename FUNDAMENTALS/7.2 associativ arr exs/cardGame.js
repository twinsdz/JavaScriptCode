/* function cardGame(input) {
    let type = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    };

    let power = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    };

    let players = {};
    for (let line of input) {
        let [name, cards] = line.split(': ');
        if (players.hasOwnProperty(name)) {
            players[name].push(...cards.split(', '));
        } else {
            players[name] = cards.split(', ');
        }

    }
    Object.keys(players)
        .forEach(name => {
            let cardsSet = new Set(players[name]);
            let total = 0;
            for (let card of cardsSet) {
                card = card.split('');
                let cardType = card.pop();
                let cardPower = card.join('');
                let points = 0;
                if (isNaN(cardPower)) {
                    points = type[cardType] * power[cardPower];
                } else {
                    points = type[cardType] * Number(cardPower);
                }

                total += points;
            }

            players[name] = total;
        });
        
    return Object.keys(players).map(name => `${name}: ${players[name]}`).join('\n');
}

console.log(cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])); */

function cardGame(input) {
    let symbolToPoints = {
        S: 4,
        H: 3,
        D: 2,
        C: 1,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    };

    let players = {};
    let results = {};

    // пълня обекта players
    for (let line of input) {
        let [name, cards] = line.split(': ');

        if (!players.hasOwnProperty(name)) {
            players[name] = cards.split(', ');
        } else {
            players[name].push(...cards.split(', '));
        }
    }

    for (let [playerName, playerCards] of Object.entries(players)) {
        results[playerName] = 0;

        for (let i = 0; i < playerCards.length; i++) {
            let card = playerCards[i];
            if (playerCards.indexOf(card) === i) {
                let cardAsArr = card.split('');
                let type = cardAsArr.pop();
                let power = cardAsArr.join('');
                let cardPoints = 0;

                if (Object.keys(symbolToPoints).includes(power)) {
                    cardPoints = symbolToPoints[power] * symbolToPoints[type];
                } else {
                    cardPoints = Number(power) * symbolToPoints[type];
                }

                results[playerName] += cardPoints;
            }
        }
    }

    // print печатане
    for (let [key, value] of Object.entries(results)) {
        console.log(`${key}: ${value}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);