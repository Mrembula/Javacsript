// Private Properties
const _radius = Symbol();
const _draw =Symbol()
class Circle {
    constructor(radius) {
        this[_radius] = radius; //internally this is private can't be shared outside
    }
    // computed property names
    [_draw]() {
        return 2;
    }
}

// Unless using this method
const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);

//WeakMaps
const _radius2 = new WeakMap(); // dictionary [key, value]
const _move = new WeakMap();
class Circle2 {
    constructor(radius) {
        _radius2.set(this, radius); // The property is private

        _move.set(this, function () {
            console.log('move', this);
        });
    }
    // Unless you do this
    draw() {
        console.log(_radius2.get(this));
        _move.get(this).draw();
    }
}

const c2 = new Circle2(1);

// ES6 Getters and Setters
const _radius3 = new WeakMap();
class Circle3 {
    constructor(radius) {
        _radius3.set(this, radius);
    }
    get radius() {
        return _radius3.get(this);
    }
    set radius(value) {
        if (value <= 0) throw new Error('Invalid radius');
        _radius3.set(this, value);
    }
}

//Inheritance & method Overwriting (Polymorphism? (Many Form))
// Use the extends method to inherit from other class and use super to get instances from other class
// REFER to OOP-Classes for more info confused
class Shape {
    move() {
        console.log('move');
    }
}
class Circle4 extends Shape {
    move() {
        super.move() // Will call the parent move
         console.log('circle move');
    }
}
