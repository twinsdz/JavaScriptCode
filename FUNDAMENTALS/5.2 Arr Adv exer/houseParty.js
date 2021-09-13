function houseParty(input) {
    let list = [];

    for (let el of input) {
        let strArr = el.split(' ');
        let name = strArr[0];

        if (!strArr.includes('not')) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else {
            if (list.includes(name)) {
                let index = list.indexOf(name);
                // триене на елемент със splice()
                list.splice(index, 1); // (index, брой елементи)
            } else {
                console.log(`${name} is not in the list!`);
            }
        }

    }
    console.log(list.join('\n'));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);

// houseParty (['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);