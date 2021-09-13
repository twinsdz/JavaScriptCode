function happyCarParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalPrice = 0;

    for (let day = 1; day <= days; day++) {
        let price = 0;

        for (let hour = 1; hour <= hours; hour++) {

            if (day % 2 == 0 && hour % 2 == 1 ) {
                price += 2.50;
            } else if (day % 2 == 1 && hour % 2 == 0 ) {
                price += 1.25;
            } else {
                price += 1;
            }
        }
        console.log(`Day: ${day} - ${price.toFixed(2)} leva`);
        totalPrice += price;
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}

/* happyCarParking([ '2', '5' ]); */

happyCarParking(['5', '2']);