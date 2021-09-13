function solve(input) {
    let n = Number(input.shift());
    let heros = {};
    let arr = input.splice(0, n);

    // пълнене на обект
    for (let line of arr) {
        let [heroName, hpDigit, mpDigit] = line.split(' ');
        hpDigit = Number(hpDigit);
        mpDigit = Number(mpDigit);
        heros[heroName] = {
            hp: hpDigit,
            mp: mpDigit
        };
    }

    let inputLine = input.shift();
    while (inputLine !== 'End') {
        let [command, heroName, token1, token2] = inputLine.split(' - ');
        token1 = Number(token1);

        if (command === 'CastSpell') {
            if (heros[heroName].mp - token1 >= 0) {
                heros[heroName].mp -= token1;
                console.log(`${heroName} has successfully cast ${token2} and now has ${heros[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${token2}!`);
            }
        } else if (command === 'TakeDamage') {
            if (heros[heroName].hp - token1 > 0) {
                heros[heroName].hp -= token1;
                console.log(`${heroName} was hit for ${token1} HP by ${token2} and now has ${heros[heroName].hp} HP left!`);
            } else {
                delete heros[heroName];
                console.log(`${heroName} has been killed by ${token2}!`);
            }
        } else if (command === 'Recharge') {
            if (heros[heroName].mp + token1 > 200) {
                let num = 200 - heros[heroName].mp;
                heros[heroName].mp = 200;
                console.log(`${heroName} recharged for ${num} MP!`);
            } else {
                heros[heroName].mp += token1;
                console.log(`${heroName} recharged for ${token1} MP!`);
            }
        } else if (command === 'Heal') {
            if (heros[heroName].hp + token1 > 100) {
                let num = 100 - heros[heroName].hp;
                heros[heroName].hp = 100;
                console.log(`${heroName} healed for ${num} HP!`);
            } else {
                heros[heroName].hp += token1;
                console.log(`${heroName} healed for ${token1} HP!`);
            }
        }
        inputLine = input.shift();
    }

    // сортиране по два критерия (a и b са масивите от матрицата)
    let sorted = Object.entries(heros).sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]));

    // console.log(sorted);
    // [ [ 'Solmyr', { hp: 95, mp: 170 } ], [ 'Kyrre', { hp: 33, mp: 35 } ] ]


    // печатане на масив с обекти print
    for (let [hero, heroInfo] of sorted) {
        let {
            hp,
            mp
        } = heroInfo;
        console.log(`${hero}\n  HP: ${hp}\n  MP: ${mp}`);
    }
}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

// solve([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'
// ]);

/* function solve(input) {
    let myObj = {};
    let number = Number(input.shift());
    input.splice(0, number).map(line => line.split(' ')).forEach(line => myObj[line[0]] = { hitPoints: Number(line[1]), manaPoints: Number(line[2]) });
    let line = input.shift();
 
    while (line !== 'End') {
        let [command, ...data] = line.split(' - ');
        if (command === 'CastSpell') {
            let [heroName, manaPointsNeeded, spellName] = data;
            manaPointsNeeded = Number(manaPointsNeeded);
            if (myObj[heroName].manaPoints - manaPointsNeeded >= 0) {
                myObj[heroName].manaPoints -= manaPointsNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${myObj[heroName].manaPoints} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === 'TakeDamage') {
            let [heroName, damage, attacker] = data;
            damage = Number(damage);
            if (myObj[heroName].hitPoints - damage > 0) {
                myObj[heroName].hitPoints -= damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${myObj[heroName].hitPoints} HP left!`);
            } else {
                delete myObj[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        } else if (command === 'Recharge') {
            let [heroName, amount] = data;
            amount = Number(amount);
            if (myObj[heroName].manaPoints + amount > 200) {
                let result = 200 - myObj[heroName].manaPoints;
                myObj[heroName].manaPoints = 200;
                console.log(`${heroName} recharged for ${result} MP!`);
            } else {
                myObj[heroName].manaPoints += amount;
                console.log(`${heroName} recharged for ${amount} MP!`);
            }
        } else if (command === 'Heal') {
            let [heroName, amount] = data;
            amount = Number(amount);
            if (myObj[heroName].hitPoints + amount > 100) {
                let result = 100 - myObj[heroName].hitPoints;
                myObj[heroName].hitPoints = 100;
                console.log(`${heroName} healed for ${result} HP!`);
            } else {
                myObj[heroName].hitPoints += amount;
                console.log(`${heroName} healed for ${amount} HP!`);
            }
        }
        line = input.shift();
    }
    let sorted = Object.entries(myObj).sort((a, b) => b[1].hitPoints - a[1].hitPoints || a[0].localeCompare(b[0]));
    sorted.forEach(line => console.log(`${line[0]}\n  HP: ${line[1].hitPoints}\n  MP: ${line[1].manaPoints}`));
}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

// solve([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'
// ]); */