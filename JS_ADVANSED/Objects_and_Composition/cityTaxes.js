function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        },
    };
}

//-------------------------------
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
console.log(city.name);

// извикване на метод (функциите в обекта се наричат метод). Достъпват се като другите елементи само че се извикват със скоби.
city.collectTaxes();
console.log(city.treasury);

// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);

// // извикване на метод (функциите в обекта се наричат метод). Достъпват се като другите елементи само че се извикват със скоби.
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);