function addressB(input) {
    let addressBook = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    let sorted = Object.entries(addressBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sorted) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}

addressB(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);