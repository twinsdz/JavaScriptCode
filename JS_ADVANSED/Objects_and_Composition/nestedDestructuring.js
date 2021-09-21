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
    },
    greetFunc() {
        console.log(`Hello ${employees[0].name}`);
    }
};

// destructoring
// companyType е просто променлива, която отговаря на name. В обекта name си остава name.
let {name: companyType, ...rest} = department;
console.log(companyType);
console.log(rest);

const {data: {director, employees, company}} = department;
const {name, data, foundYear} = department;
const [firstEmpl, secondEmpl] = employees;

console.log(firstEmpl);
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

employees.forEach(empl => {
    let {
        name,
        position
    } = empl;
    console.log(`${name} --> ${position}`);
});

department.greetFunc();


