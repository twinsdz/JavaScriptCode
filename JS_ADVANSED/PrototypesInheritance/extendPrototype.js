class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher {
    constructor(name, email, subject) {
        this.name = name;
        this.email = email;
        this.subject = subject;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

// classDefinition e класа Person
function result(classDefinition) {
    classDefinition.prototype.species = 'Human';
    classDefinition.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

// Извикваме функцията result с класа (Person). По този начин подаваме на функцията класа
result(Person);
let p = new Person("Pesho","email@hit.bg");

console.log(p.species); //('Human',"No species property");
console.log(p.toSpeciesString()); //("I am a Human. Person (name: Pesho, email: email@hit.bg)");


let t = new Teacher('John', 'john@john.com', 'Math');
console.log('Before', t.species);
result(Teacher); // с result() влизаме в класа и променяме прототипа на класа
console.log('After', t.species);





/* class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');

    }

    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}

function extendProperty(Class) {
    Class.prototype.species = "Human";
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}


let p = new Person('Alex','Nest');

extendProperty(Person);
console.log(p.species);
console.log(p.toSpeciesString()); */