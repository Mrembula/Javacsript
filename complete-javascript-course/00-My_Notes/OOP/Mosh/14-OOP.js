//***************************** Mosh *******************************************
// Create objects
let circle = {
  radius: 1,
  location: {
      x: 1,
      y: 1 ,
  },
    draw() {
      console.log('draw');
    }
};

// factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}
const makeCircle = createCircle(1);

circle.draw();

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}


function Circle2(radius) {
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0};

    //this.getDefaultLocation = function () {
     //   return defaultLocation;
    // };

    this.draw = function () {
        return console.log('draw')
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location');
            }
            defaultLocation = value;
        }
    });
    const circle = new Circle2(10);
}

function stopwatch() {
    this.duration = function() {
        console.log(watch);
    }
}

let sw = stopwatch.start;

//defining properties
const person = {name: 'Mosh'};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false, // cannot change name
    enumerable: false, // cannot iterate through array
    configurable: false // cannot delete person from array
});

// get prototype(Parent) of object
Object.getPrototypeOf(person); // == person.__proto__

const c1 = new Circle();

// Return instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) console.log(key)

/******************** Prototypal inheritance *****************************/
function Shape(color) {
    this.color = color
}

function extend(Child, Parent) { // Intermediate function inheritance
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle3(radius, color) {
    Shape.call(this, color); // super constructor call
    this.radius = radius;
}


Circle3.prototype.duplicate = function () {
    console.log('duplicate circle');
}

extend(Circle3, Shape);

Circle3.prototype.draw = function () {
    console.log('draw');
}
//polymorphism
function Square() {
    Square.prototype.duplicate = function () {
        console.log('duplicate square');
    }
}

const shapes = [
    new Circle3(),
    new Square()
]

for (let shape of shapes) {
    shape.duplicate();
}

extend(Square, Shape);

const s = new Shape();
console = new Circle3(1, 'red');

//compositions using mixins
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}
const canEat = {
    eat() {
        this.hunger--;
        console.log('eating');
    }
}

const canSwim = {
    swim() {
        console.log('swim');
    }
}

const canWalk = {
    walk() {
        console.log('walking');
    }
}

const person1 = Object.assign({}, canEat, canWalk);
console.log(person1);

function Goldfish() {

}

mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);