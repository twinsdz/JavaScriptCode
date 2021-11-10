class Person {
    // static nextId = 0;

    constructor(firstName, lastName, age, email) {
        Object.assign(this, {
            // id: Person.getNextId(),
            firstName,
            lastName,
            age,
            email
        });

        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
        // this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

    // static getNextId(){
    //     return this.nextId++;
    // }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
// let person1 = new Person('Mary', 'Simpson', 25, 'anna@yahoo.com');
// let person2 = new Person('Petia', 'Simpson', 28, 'anna@yahoo.com');
// console.log(person, person1, person2);
// console.log(person);
console.log(person.toString());