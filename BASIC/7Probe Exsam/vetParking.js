function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalSum = 0;

    for (let i = 1; i <= days; i++) {
        let day = i;
        let sumForDay = 0;
        for (let j = 1; j <= hours; j++) {
            let hour = j;
            let price = 0;
            if (day % 2 == 0 && hour % 2 != 0) {
                price = 2.50;

            } else if (day % 2 != 0 && hour % 2 == 0) {
                price = 1.25;
            } else {
                price = 1;
            }
            sumForDay += price;
        }
        totalSum += sumForDay;
        console.log(`Day: ${day} - ${sumForDay.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}


/* vetParking(['2', '5']); */
vetParking(['5', '2']);