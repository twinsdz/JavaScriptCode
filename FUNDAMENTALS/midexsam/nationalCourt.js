/* function nationalCourt(arr) {
    let peoplePerHour = 0;
    let allPeople = Number(arr.pop());
    let hoursCount = 0;

    for (let i = 0; i < 3; i++) {
        peoplePerHour += Number (arr[i]);
    }

    while (allPeople > 0) {
        hoursCount++;

        if (!(hoursCount % 4 === 0)) {
            allPeople -= peoplePerHour;
        }
    }
    console.log(`Time needed: ${hoursCount}h.`);
}

nationalCourt([ '5', '6', '4', '20' ]);

nationalCourt([ '1', '2', '3', '45' ]);

nationalCourt([ '3', '2', '5', '40' ]); */


function nationalCourt(arr) {
    let [el1, el2, el3, allPeople] = arr.map(Number);

    if(allPeople === 0){
        console.log(`Time needed: 0h.`);
        return;
    }

    let peoplePerHour = el1 + el2 + el3;
    let requiredTime = Math.ceil(allPeople / peoplePerHour);
    let pause = Math.floor(requiredTime / 3);

    if(requiredTime % 3 === 0){
        pause -= 1;
    }
    console.log(`Time needed: ${requiredTime + pause}h.`);
}

nationalCourt([ '5', '6', '4', '20' ]);

nationalCourt([ '1', '2', '3', '45' ]);

nationalCourt([ '3', '2', '5', '40' ]);

nationalCourt([ '3', '2', '5', '0' ]);
