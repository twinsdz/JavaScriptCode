class Person {
    #data = new Map([['first', 'second']]) // # прави пропертито privat

    // age = 18 is a default value
    constructor(name, age = 18, secret) {
        this.name = name;
        this.age = age;

        // метод в конструктора създава за всяка инстанция нов метод т.е. за всяка инстанция метода си е само за нея
        this.ctrMrthod = function () {
            console.log('This is constructor method ' + this.name);
        };

        // secret е само в closer и не е публичен. Това се използва за енкапсулиране. 
        // Нещата в кожъра не са публични. Трябва мотод за да ги достъпим. Обаче, така правим копие на метода всеки път.
        this.secretField = () => secret;

    }

    getData(){
        return this.#data;
    }

    sayHi() {
        console.log(`${this.name} says Hi. I am ${this.age} year old.`);
    }

    static cheer() {
        console.log('Woo Hoo!');
        console.log(this.otherMathod());
    }

    static otherMathod() {
        return 5;
    }

    static compareTo(a, b) {
        return a.age - b.age;
    }
}

// const myMethod = person1.sayHi;
// myMethod(); //това не става, защото this сочи към глобалната референция

const person1 = new Person('Perter', 22, 'secret message');
const person2 = new Person('Georg');
const person3 = new Person('Mary', 21, 'secret message 2');

console.log(person1 instanceof Person);
console.log(person1 instanceof Number);
console.log(person1 instanceof Object);

const people = [person1, person2, person3];
people.sort(Person.compareTo);
console.log(people);

person1.hight = 178;

console.log(person1.age, person1.hight);
console.log(person2);

person1.sayHi(); // извиква се, защото е метод на инстанция
// person1.cheer() // не се извиква, защото е  статичен метод
Person.cheer(); // извикване на статичен метод (директно с името на класа)

person1.ctrMrthod();
console.log(person1.secretField());
console.log(person3.secretField());
console.log(person1.secret); // secret не е част от инстанцията, защото е функция (метод) в конструктора
console.log(person1.data); // не може да се извика директно, защото е privat
console.log(person1.getData());