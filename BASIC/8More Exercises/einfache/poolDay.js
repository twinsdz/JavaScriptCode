function poolDay (input){
let index = 0;
let peopleCount = Number (input[index++]);
let pricePerPerson = Number (input[index++]);
let priceForChair = Number (input[index++]);
let priceForSunshade = Number (input[index]);

let sumForPool = peopleCount * pricePerPerson;
let sumForChairs = Math.ceil(peopleCount * 0.75) * priceForChair;
let sumForSunshade = Math.ceil(peopleCount / 2) * priceForSunshade;

let totalSum = sumForPool + sumForSunshade + sumForChairs;

console.log(`${totalSum.toFixed(2)} lv.`);

}

poolDay ([ '21', '5.50', '4.40', '6.20' ]);

poolDay ([ '50', '6', '8', '4' ]);