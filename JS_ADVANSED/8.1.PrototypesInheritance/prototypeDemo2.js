const myProto = {
    sayHi(){
        console.log(`${this.name} says hi!`);
    }
};

const instance = Object.create(myProto); // innstance сочи към обекта myProto. Така си добавяме към обекта свойства.
instance.name = 'John';

instance.sayHi();