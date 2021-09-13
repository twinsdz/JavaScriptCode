function club(input){
    let index = 0;
    let wishedProfit = Number (input[index++])
    let inputLine = input[index++];
    let orderSum = 0;
    let totalSellingSum = 0;


    while (inputLine !== 'Party!' && inputLine !== undefined){
        let currentCocktailName = inputLine;
        let cocktailPrice = Number (currentCocktailName.length);
        let currentCocktailNum = Number (input[index++]);

        orderSum = cocktailPrice * currentCocktailNum;

        if (!(orderSum % 2 == 0)){
            orderSum *= 0.75;
        }

        totalSellingSum += orderSum;
        inputLine = input[index++];
    }

    if (totalSellingSum < wishedProfit){
        console.log(`We need ${(wishedProfit - totalSellingSum).toFixed(2)} leva more.`);
    } else {
        console.log('Target acquired.');
    }

    console.log(`Club income - ${totalSellingSum.toFixed(2)} leva.`);
    
}


/* club (['500', 'Bellini', '6', 'Bamboo', '7', 'Party!']); */
club ([ '100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10']);
