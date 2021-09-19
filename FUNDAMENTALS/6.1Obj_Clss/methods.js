let obj = {
    name: 'Peter',
    age: '18',
    grade: '5.50'
};

for (let key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
}

//-----------------------------------------------------------

let newObj = {
    name: 'Peter',
    age: '18',
    grade: '5.50'
};

for (let value of Object.values(newObj)) {
    console.log(`${value}`);
}
