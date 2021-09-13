/* function footForPets(input) {
    let days = Number(input.shift());
    let totalFood = Number(input.shift());
    let sumDogFood = 0;
    let sumCatFood = 0;
    let totalEatenFood = 0;
    let totalPercent = 0;
    let sumBisscuits = 0;
    let totalDogPercents = 0;
    let totalCatPercents = 0;
    let dayCount = 0;

    for (let i = 1; i <= days; i++) {

        let dogFood = Number(input.shift());
        sumDogFood += dogFoot;
        let catFood = Number(input.shift());
        sumCatFood += catFoot;
        dayCount++;

        totalEatenFood = sumDogFoot + sumCatFoot;

        if (dayCount % 3 == 0) {
            let currentSumBisscuits = (dogFood + catFood) * 0.10;
            sumBisscuits += currentSumBisscuits;
        }

        totalDogPercents = (sumDogFood / totalEatenFood) * 100;
        totalCatPercents = (sumCatFood / totalEatenFood) * 100;

        totalPercent = (totalEatenFood / totalFood) * 100;

    }
    console.log(`Total eaten biscuits: ${Math.round(sumBisscuits)}gr.`);
    console.log(`${totalPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${totalDogPercents.toFixed(2)}% eaten from the dog.`);
    console.log(`${totalCatPercents.toFixed(2)}% eaten from the cat.`);
} */


/* function petFood(input) {
    let days = Number(input.shift());
    let totalFood = Number(input.shift());
    let dogFood = 0;
    let catFood = 0;
    let counter = 0;
    let bonus = 0;
  
    for (let i = 1; i <= days; i++) {
      let dogsfood = Number(input.shift());
      dogFood += dogsfood;
      let catsfood = Number(input.shift());
      catFood += catsfood;
  
      counter++;
  
      if (counter % 3 ===0) {
        bonus += (Dogsfood + Catsfood) * 0.1;
      }
    }
    
    bonus = Math.round(bonus);
    
    console.log(`Total eaten biscuits: ${bonus}gr.`);
    console.log(`${(((dogFood + catFood) / totalFood) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dogFood / (dogFood + catFood)) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((catFood / (dogFood + catFood)) * 100).toFixed(2)}% eaten from the cat.`);
  }

petFood(['3', '1000', '300', '20', '100', '30', '110', '40']); */

function foodForPets(input) {
    let index = 0;
    let days = Number(input[index++]);
    let totalFood = Number(input[index++]);
    let biscuits = 0;
    let sumCatFood = 0;
    let sumDogFood = 0;
    
    for (let i = 1; i <= days; i++){
        let dogFood = Number(input[index++]);
        sumDogFood += dogFood;
        let catFood = Number(input[index++]);
        sumCatFood += catFood;

        if (i % 3 === 0){
            biscuits += (dogFood + catFood) * 0.1;
        }
    }

    let totalEatenFood = sumCatFood + sumDogFood;
    biscuits = Math.round(biscuits);
    console.log(`Total eaten biscuits: ${biscuits}gr.`);
    console.log(`${((totalEatenFood / totalFood) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((sumDogFood / totalEatenFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((sumCatFood / totalEatenFood) * 100).toFixed(2)}% eaten from the cat.`);
}

// foodForPets(['3', '1000', '300', '20', '100', '30', '110', '40']);  

foodForPets(['3', '500', '100', '30', '110', '25', '120', '35']); 

// foodForPets(['7', '2000', '300', '20', '100', '30', '110', '40', '300', '20', '100', '30', '110', '40']);