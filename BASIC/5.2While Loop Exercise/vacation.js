/* function vacation(arr) {
    index = 0;
    let vacPrice = Number(arr[index++]);
    let savedMoney = Number(arr[index++]);

    let days = 0;
    let spandingDays = 0;

    while (savedMoney < vacPrice && spandingDays !== 5) {
        let action = arr[index++];
        let money = Number(arr[index++]);
        days++;

        if (action === 'spend') {
            if (savedMoney < money) {
                savedMoney = 0;
            } 
            // else {
                // savedMoney -= money;
            } 
            // savedMoney = Math.max (0, savedMoney - money);
            savedMoney = 0;
            spandingDays++;

           // if (spandingDays === 5) {
            //    break;
            //}
        } else {
            spandingDays = 0;
            savedMoney += money;
        }
    }
    if (spandingDays === 5) {
        console.log("You can't save the money.");
        console.log(`${days}`);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }
}


    vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]); */

/* function vacation(input) {
    let index = 0;
    let budgetNeeded = Number(input[index++]);
    let savedMoney = Number(input[index++]);
    let spendDays = 0;
    let days = 0;

    while (spendDays !== 5 && savedMoney < budgetNeeded) {
        let action = input[index++];
        let dayMoney = Number(input[index++]);
        days++;

        if (action === "spend") {
            if(savedMoney < dayMoney){
                savedMoney = 0;
            }
            spendDays++;
            // savedMoney = Math.max(0, savedMoney - dayMoney);
            savedMoney = 0;
        } else {
            savedMoney += dayMoney;
            spendDays = 0;
        }
    }
    if (spendDays === 5) {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }
}


// vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);

// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);

vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]); */

function vacation(input) {
    let index = 0;
    let budgetNeeded = Number(input[index++]);
    let savedMoney = Number(input[index++]);
    let spendDays = 0;
    let days = 0;

    for (let i = index; i < input.length; i++) {
        let action = input[i++];
        let moneyPerDay = Number(input[i]);
        days++;

        if (action === "spend") {
            spendDays++;
            if (spendDays === 5) {
                break;
            }
            if (moneyPerDay <= savedMoney) {
                savedMoney -= moneyPerDay;
            } else {
                // savedMoney = Math.max(0, savedMoney - moneyPerDay);
                savedMoney = 0;
            }

        } else {
            savedMoney += moneyPerDay;
            spendDays = 0;
        }
    }
    if (savedMoney >= budgetNeeded) {
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    }
}




// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);

vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);

// vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
