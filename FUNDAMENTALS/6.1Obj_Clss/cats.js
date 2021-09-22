function solve(catsAsString) {
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    // взимам от input-а 
    for (let catData of catsAsString) {
        let [name, age] = catData.split(' ');
        
        // попълвам, чрез класа името и годините и ги пълня в масива cats
        let cat = new Cat(name, age);
        cats.push(cat);
    }

    // обхождам масива cats взимам котката и викам метода от класа за нея. Метода печата.
    for (let cat of cats) {
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);

/* function solve(catsAsStr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    //   let myCat = new Cat('Tom', 3);
    //   console.log(myCat);
    //   myCat.meow();
    for (let catStr of catsAsStr) {
        let [catName, catAge] = catStr.split(' ');
        let cat = new Cat(catName, catAge);

        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']); */

/* function solve(catsAsStrings) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let catData of catsAsStrings) {
        let [name, age] = catData.split(' ');

        let cat = new Cat(name, age);
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }
} */