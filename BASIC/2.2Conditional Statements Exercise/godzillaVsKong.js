function budgetCheckUp(input) {
    let filmBudget = Number(input[0]);
    let komparse = Number(input[1]);
    let costumePrice = Number(input[2]);

    let scenery = filmBudget * 0.1;
    let costumePriceAll = komparse * costumePrice;

    if (komparse >= 150) {
        costumePriceAll = costumePriceAll - (costumePriceAll * 0.1);
    } 
    
    let filmTotalPrice = scenery + costumePriceAll;

    if (filmTotalPrice > filmBudget) {
        let needed = filmTotalPrice - filmBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${needed.toFixed(2)} leva more.`);
    } else {
        let left = filmBudget - filmTotalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`);
    }
}

/* budgetCheckUp(["9587.88", "222", "55.68"]); */
budgetCheckUp (["20000", "120", "55.5"]);