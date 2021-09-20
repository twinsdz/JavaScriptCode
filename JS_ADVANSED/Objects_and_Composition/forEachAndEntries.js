const phonebook = {
    'Tim': '555-111',
    'Bill': '555-333',
    'Peter': '555-777'
};

const keys = Object.keys(phonebook).forEach((key, index) => console.log(`${index}. ${key} - tel. ${phonebook[key]}`));
// console.log(keys);

const result = Object.entries(phonebook);

const sameBookObj = Object.fromEntries(result);
console.log(sameBookObj);