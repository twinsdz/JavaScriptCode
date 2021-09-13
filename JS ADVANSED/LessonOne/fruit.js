function solve(fruit, weight, pricePerKg) {
    let kg = weight / 1000;
    let total = kg * pricePerKg;
    console.log(`I need $${total.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);