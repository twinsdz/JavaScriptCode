function solve(speed, area) {
    let status = '';
    let speedLimit = 0;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let difference = speed - speedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let difference = speed - speedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'city':
            speedLimit = 50;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let difference = speed - speedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'residential':
            speedLimit = 20;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                let difference = speed - speedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');