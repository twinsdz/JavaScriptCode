class Circle{
    constructor(radius){
        this.radius = radius;
    }

    getAria () {
        return this.radius ** 2 * Math.PI;
    }
}

console.log(Circle.prototype);

const c = new Circle (5);
console.log(c.getAria());


console.log(Object.getPrototypeOf(c) == Circle.prototype);

Circle.prototype.getDiameter = function  () {
    return this.radius * 2;
};

console.log(c.getDiameter());

// console.log(Object.getPrototypeOf(c).hasOwnProperty('getAria')); // ключа в hasOwnProperty трябва да е стринг. Печатам прототипа на инстанцията