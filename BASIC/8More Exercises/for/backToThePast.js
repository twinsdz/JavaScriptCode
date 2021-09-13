function solve (input){
    let index = 0;
    let budget = Number (input[index++]);
    let yearToLive = Number (input[index++]);
    let age = 17;

    for (let i = 1800; i <= yearToLive; i++){
        age++;

        if (i % 2 == 0){
            budget -= 12000;
        } else {
            budget -= 12000 + (50 * age);
        }
    }
        if (budget >= 0){
            console.log(`Yes! He will live a carefree life and will have ${budget.toFixed(2)} dollars left.`);
        } else {
            let neededMoney = Math.abs(budget);
            console.log(`He will need ${neededMoney.toFixed(2)} dollars to survive.`);
        }
}

solve(['50000', '1802']);

solve (['100000.15','1808']);
