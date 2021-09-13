function party(input) {
    let guestList = {
        vip: [],
        regular: []
    };

    let name = input.shift();
    while (name !== 'PARTY') {
        let char = name[0];
        if (isNaN(char)) {
            guestList.regular.push(name);
        } else {
            guestList.vip.push(name);
        }
        name = input.shift();
    }
    input.forEach(guest => {
        if (guestList.vip.includes(guest)) {
            let index = guestList.vip.indexOf(guest);
            guestList.vip.splice(index, 1);
        } else if (guestList.regular.includes(guest)) {
            let index = guestList.regular.indexOf(guest);
            guestList.regular.splice(index, 1);
        }
    });
    console.log(guestList.vip.length + guestList.regular.length);
    console.log(`${guestList.vip.join('\n')}\n${guestList.regular.join('\n')}`);
}

party([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);