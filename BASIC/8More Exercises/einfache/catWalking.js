function catWalking(minPerDay, walkingCountperDay, caloriePerDay) {
    minPerDay = Number(minPerDay);
    walkingCountperDay = Number(walkingCountperDay);
    caloriePerDay = Number(caloriePerDay);

    let sumWalkingMin = minPerDay * walkingCountperDay;
    let sumCaloriePerDay = sumWalkingMin * 5;

    if (sumCaloriePerDay >= caloriePerDay / 2) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${sumCaloriePerDay}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${sumCaloriePerDay}.`);
    }
}

catWalking("30", "3", "600");
catWalking("15", "2", "500");