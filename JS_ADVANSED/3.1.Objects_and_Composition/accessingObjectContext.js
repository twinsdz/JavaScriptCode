const myPerson = {
    firstName: 'Peter',
    lastName: 'Johnson',
    age: 23,
    sayHi() {
        // this променя контекста, а не сочи само и единдтвено към обекта, в който се намира както би направил myPerson.firstName
        console.log(`${this.firstName} say Hi!`); 
    }
};


// функцията винаги се вика от нейния обект родител. Изваждане на референция към функцията.
const mySayHi = myPerson.sayHi;

const person = {
    firstName: 'Desita'
};

// добавям функцията на друг обект
person.sayHi = mySayHi;

myPerson.sayHi();
person.sayHi();

// Тези две неща сочат към една и съща референция(функция). Споделят функция. Само сравнявам елемента функция без да я викам.
console.log(myPerson.sayHi == person.sayHi);

myPerson.firstName = 'Ivan';
myPerson.sayHi();