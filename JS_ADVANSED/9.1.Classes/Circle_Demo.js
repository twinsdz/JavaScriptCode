class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (typeof value != "number") {
            throw new TypeError('Radius must be a number');
        }
        this._radius = value;
    }

    get diameter() {
        return this.radius * 2;
    }

    get aria() {
        return this.radius ** 2 * Math.PI;
    }

    set diameter(value) {
        if (typeof value != "number") {
            throw new TypeError('Diameter must be a number');
        }
        this.radius = value / 2;
    }
}

const c = new Circle(4);

console.log('Instance', c);
console.log('Radius', c.radius);
console.log('Diameter', c.diameter);
console.log('Area', c.aria);

c.radius = 6;

console.log('Diameter', c.diameter);
console.log('Area', c.aria);

c.diameter = 5;
console.log(c);

// c.diameter = 'aha';
// c._radius = 'aha'; // достъпване на служебното поле т.е не вика метода set radius(). Това е грешно.
// console.log(c);
console.log(c.radius); // Правилно достъпване през сетъра