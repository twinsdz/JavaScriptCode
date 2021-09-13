function dungeonsDark(input) {
    let str = input[0];
    let arr = str.split('|');
    let health = 100;
    let coins = 0;
    let roomCount = 0;
    let isDead = false;

    for (let i = 0; i < arr.length; i++) {
        roomCount++;
        let room = arr[i].split(' ');
        let currentItem = room[0];
        let currentNum = Number(room[1]);

        if (currentItem === 'potion') {
            health += currentNum;

            if (health > 100) {
                currentNum = 100 - (health - currentNum);
                health = 100;
            }

            console.log(`You healed for ${currentNum} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (currentItem === 'chest') {
            coins += currentNum;
            console.log(`You found ${currentNum} coins.`);
        } else {
            health -= currentNum;

            if (health <= 0) {
                console.log(`You died! Killed by ${currentItem}.`);
                console.log(`Best room: ${roomCount}`);
                isDead = true;
                break;
            } else {
                console.log(`You slayed ${currentItem}.`);
            }
        }
    }
    if (isDead == false) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}

dungeonsDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);

// dungeonsDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);