let contacts = {
    'Tim': {
        phone: '0876566344',
        address: 'Doe Crossing'
    },
    'Bill': {
        phone: '0896543112',
        address: 'Nelson Place'
    }
};

// let billsContact = contacts['Bill']; // Get reference
// console.log(billsContact.phone); // '0896543112' 

let entries = Object.entries(contacts);
entries.sort(([keyA, refA], [keyB, refB]) => {
    let addrA = refA.address;
    let addrB = refB.address;
    return addrA.localeCompare(addrB);
});

console.log(entries);

