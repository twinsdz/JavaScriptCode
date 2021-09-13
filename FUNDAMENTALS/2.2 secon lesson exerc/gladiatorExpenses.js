function gladiatorExpens(...arr) {
    let lostFightsCount = arr[0];
    let helmetPrice = arr[1];
    let swordPrice = arr[2];
    let shieldPrice = arr[3];
    let armourPrice = arr[4];
    let totalExpenses = 0;
    let count = 0;

    for (let i = 1; i <= lostFightsCount; i++) {

        if (i % 2 === 0 && i % 3 === 0) {
            totalExpenses += helmetPrice + swordPrice + shieldPrice;
            count++;
            if (count % 2 == 0) {
                totalExpenses += armourPrice;
            }
        } else if (i % 2 == 0) {
            totalExpenses += helmetPrice;
        } else if (i % 3 === 0) {
            totalExpenses += swordPrice;
        }
    }
    return `Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`;
}

// console.log(gladiatorExpens(7, 2, 3, 4, 5));

console.log(gladiatorExpens(23, 12.50, 21.50, 40, 200));