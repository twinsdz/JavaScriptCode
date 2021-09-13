function phoneB(input) {
    let phoneBook = {};

    for (let el of input) {
        let inputLine = el.split(' ');
        let name = inputLine[0];
        let number = inputLine[1];
        phoneBook[name] = number;
    }

    // Печатане с for in на ключове и стойности от обект
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}


phoneB(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);