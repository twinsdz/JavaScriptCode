/* let myObj = {
    make: 'Opel',
    model: 'Safira',
    color: 'grey',
    speed: 180
}

console.log(myObj.color);  // непроменено
myObj.color = 'blue';
console.log(myObj.color);  // променено

myObj.speed += 20;
console.log(myObj.speed);


console.log(myObj.make);
console.log(myObj); */

/* let anotherObj = {};

let index = 'km';         // index и [] ако не знаем ключа

anotherObj['km'] = 100;  // [] при обхождане

console.log(anotherObj);
console.log(anotherObj.km);
console.log(anotherObj[index]); */

/* function personalInfo(firstName, lastName, age) {
    let person = {};

    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    
    return person;
} */
/* function personalInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    };
    return person;
}

console.log(personalInfo("Peter", "Pan", "20")); */

// Дефиниране на методи (функции) във обекти

/* let person = {
    sayHello: function () {
        console.log('Hi, guys');
    }
};

console.log(person); */

let person = {
    name: 'Peter',
    lastName: 'Pan',
    age: 20,
    /* sayHello: function() {
        console.log('Hi, guys');
    } */
    /* sayHello() {
        console.log('Hi, guys');
    } */

    sayHello: () => console.log('Hi, guys')
};

person.sayHello = () => console.log('Hi, guys Hi');  // changed function

person.sayHello();

// console.log(Object.keys(person));  // вади ключовите думи 

// console.log(Object.values(person)); // вади стойностите

// console.log(Object.entries(person)); // вади матрица (масиви в масив)