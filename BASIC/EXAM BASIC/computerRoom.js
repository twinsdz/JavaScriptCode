function compRoom(input) {
    let index = 0;
    let month = input[index++];
    let stayHours = Number(input[index++]);
    let peopleNum = Number(input[index++]);
    let dayTime = input[index++];

    let pricePerHour = 0;
    let totalPrice = 0;

    if (month === 'march' || month === 'april' || month === 'may') {
        switch (dayTime) {
            case 'day':
                pricePerHour = 10.50;
                break;
            case 'night':
                pricePerHour = 8.40;
                break;
        }
    } else if (month === 'june' || month === 'july' || month === 'august') {
        switch (dayTime) {
            case 'day':
                pricePerHour = 12.60;
                break;
            case 'night':
                pricePerHour = 10.20;
                break;
        }
    }

    if (peopleNum >= 4) {
        pricePerHour *= 0.90;
    }

    if (stayHours >= 5) {
        pricePerHour *= 0.50;
    }

    totalPrice = (peopleNum * pricePerHour) * stayHours;

    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}

compRoom(['march', '3', '3', 'day']);
compRoom(['july', '5', '5', 'night']);