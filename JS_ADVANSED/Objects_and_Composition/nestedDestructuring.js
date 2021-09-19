const department = {
    name: "Engineering",
    data: {
        director: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [{
            name: 'Maria',
            position: 'worker'
        }, {
            name: 'Tom',
            position: 'security'
        }, {
            name: 'Jerry',
            position: 'IT employee'
        }],
        company: 'Quick Build'
    },
    foundYear: 1968,
    sayHi() {
        console.log('Hi Desi!');
    }
};

const {
    data: {
        director
    },
    data: {
        employees
    },
    data: {
        company
    }
} = department;
const {
    name,
    data,
    foundYear
} = department;

console.log(name);
console.log(data);
console.log(foundYear);
console.log(director);
console.log(employees);
console.log(company);

for (let empl of employees) {
    let {
        name,
        position
    } = empl;
    console.log(`${name} with position ${position} said:`);
    // извикване на метод (функциите в обекта се наричат метод). Достъпват се като другите елементи само че се извикват със скоби.
    department.sayHi();
}
