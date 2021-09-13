function meetings(input){
    let agenda = {};

    for(let el of input){
        let [weekDay, person] = el.split(' ');

        if(agenda.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`);
        } else {
            // създаване на ключ и стойност в обект
            agenda[weekDay] = person;
            console.log(`Scheduled for ${weekDay}`);
        }
    }
    // печатане на ключове и стойности на обект
    for(let key in agenda){
        //е ключа като променлива, а agenda[key] е ключа за достъпване на стойността.
        console.log(`${key} -> ${agenda[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);