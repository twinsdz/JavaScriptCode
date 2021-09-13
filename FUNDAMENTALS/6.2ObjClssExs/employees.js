/* function empl(arr) {
    let employees = {};

    for (let name of arr) {
        employees[name] = name.length;
    }

    let result = '';
    
    Object.entries(employees).forEach(element => {
        result += `Name: ${element[0]} -- Personal Number: ${element[1]}\n`;
    });
    return result;
}

console.log(empl(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])); */


/* function empl(arr) {
    let employees = [];

    arr.forEach(element => {
        let person = {
            name: element,
            number: element.length
        }
        employees.push(person);
    });

    let result = '';
    employees.forEach(obj => {
        result += `Name: ${obj.name} -- Personal Number: ${obj.number}\n`;
    });
    return result;
}

console.log(empl(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])); */

/* function empl(arr) {
    class Person {
        constructor(name){
            this.name = name,
            this.number = name.length
        }
        print(){
            return `Name: ${this.name} -- Personal Number: ${this.number}`;
        }
    }
    let result = '';
    arr = arr.map(x => new Person(x))
    .forEach(obj => {
        result += `${obj.print()}\n`;
    });
    return result;
}

console.log(empl(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])); */

function empl(arr) {
    class Person {
        constructor(name) {
            this.name = name,
            this.number = name.length
        }
        print() {
            return `Name: ${this.name} -- Personal Number: ${this.number}`;
        }
    }
    return arr.map(x => {
        // let obj = new Person(x);
        // return obj.print();
        let obj = new Person(x).print();
        return obj;
    }).join('\n');
}


console.log(empl(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']));