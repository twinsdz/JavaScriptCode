function fruitsVegetables (vegPrice, fruitPrice, kgVegetables, kgFruits){
    vegPrice = Number (vegPrice);
    fruitPrice = Number (fruitPrice);
    kgVegetables = Number (kgVegetables);
    kgFruits = Number (kgFruits);

    let vegSum = vegPrice * kgVegetables;
    let fruitSum = fruitPrice * kgFruits;
    let totalSum = vegSum + fruitSum;

    let euro = totalSum / 1.94;

    console.log(euro.toFixed(2));
}

fruitsVegetables("1.5", "2.5", "10", "10");