/* function tournament(input) {
    let index = 0;
    let days = Number(input[index++]);
    let charitySum = 0;
    let winCount = 0;
    let loseCount = 0;

    for (let day = 0; day < days; day++) {
        let games = input[index++];
        let dailySum = 0;
        let dailyWinCount = 0;
        let dailyLoseCount = 0;

        while (games !== "Finish") {
            let result = input[index++];

            if (result === "win") {
                dailySum += 20;
                dailyWinCount++;
            } else {
                dailyLoseCount++;
            }

            games = input[index++];

        }
        if (dailyWinCount > dailyLoseCount) {
            charitySum += dailySum * 1.10;
            winCount++;
        } else {
            charitySum += dailySum;
            loseCount++;
        }

    }
    if (winCount > loseCount) {
        charitySum *= 1.2;
        console.log(`You won the tournament! Total raised money: ${charitySum.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${charitySum.toFixed(2)}`);
    }
}

tournament(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"]); */

function tournament(input) {
    let index = 0;
    let tournamentDays = Number(input[index++]);
    let sumWonGames = 0;
    let sumLostGames = 0;
    let sumWonDays = 0;
    let sumLostDays = 0;
    let totalMoney = 0;
    let isWon = false;

    for (let i = 1; i <= tournamentDays; i++) {
        let inputLine = input[index++];
        let moneyForDay = 0;
        sumWonGames = 0;
        sumLostGames = 0;

        while (inputLine !== "Finish") {
            let result = input[index++];

            if (result === 'win') {
                moneyForDay += 20;
                sumWonGames++;
            } else {
                sumLostGames++;
            }
            inputLine = input[index++];
        }

        if (sumWonGames > sumLostGames) {
            sumWonDays++;
            moneyForDay *= 1.10;
        } else {
            sumLostDays++;
            moneyForDay = moneyForDay;
        }
        totalMoney += moneyForDay;
    }

    if (sumWonDays > sumLostDays) {
        isWon = true;
        totalMoney *= 1.20;
    }

    if (isWon) {
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

tournament(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"]);

// tournament(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);