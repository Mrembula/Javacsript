'use strict';
/************************************************** PROTOTYPES *********************************************************/
// All type of object (reference types) can inherit from that prototype object using method like __proto__(depricated(no longer used))
// All objects inherit from a prototype
/***************** Implementing prototypal inheritance in javascript *********************/

/************* Constructor Function ******************/
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    // Don't write any functions here every object part of the function constructor will
    // carry the function, waste of space and afficiency. Different laces in memory
}
const jonas = new Person('Jonas', 1991); // new special key the constructor
// console.log(jonas);
// 1. New {} is created     2. function is called, this = {}    3. {} linked to prototype   4. function automatically return {}

/************ Prototypal inheritance *******************/
Person.prototype.calAge = function () {
    console.log(2037 - this.birthYear);
} // this function is being inherited not in the recent constructor but above the jonas constructor (Person)
// USE DOM FOR FURTHER EXPLAINATION

Person.prototype.species = 'Homo Sapiens'; // Only in person but also will work on jonas
// Since prototype of jonas is Person


jonas.calAge()

console.log(Person.prototype.isPrototypeOf(jonas)) //true
console.log(Person.prototype.isPrototypeOf(Person)) // false

/********* Inheritance using prototype *********************/

// simple object
let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire === true) {
            return console.log(`I am ${this.name}, the breather of fire`);
        }
    }
}
dragon.sing();

let lizard = {
    name: 'Kiki',
    fight() {
        return 1;
    }
}
lizard.__proto__ = dragon;
lizard.sing();
dragon.isPrototypeOf(lizard) // true
lizard.isPrototypeOf(dragon) // false
lizard.hasOwnProperty('fight'); // true
lizard.hasOwnProperty('sing'); // false

let human = {
    mortal: true
}
let socrates = Object.create(human); // creating prototypes

//Prototype
const Person1 = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person1.prototype.calcAge = function () {
    return console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person1.call(this, firstName, birthYear)
    this.course = course;
}

// Linking Prototype
Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new  Student('Mike', 2020, 'Computer Science')
mike.introduce();
console.log(Person.prototype)