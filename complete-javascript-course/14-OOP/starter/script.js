'use strict';
/*
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //  never create a method inside a constructor function
    /*this.calcAge= function () {
        console.log(2037 - this.birthYear);}

}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);


// Prototypes
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

console.log(Person.prototype);
console.log(jonas.__proto__);
jonas.calcAge();

//'[console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
//console.log(jonas);
//console.log(jonas.hasOwnProperty('firstName'));
//console.log(jonas.hasOwnProperty('species'));


//console.log(jonas.__proto__.__proto__);
//console.log(Person.prototype.constructor);

const list = [2, 3, 7, 3, 0, 9, 8];
console.log(list.__proto__);


Array.prototype.unique = function () {
    return [...new Set(this)]
}

//console.log(list.unique());
 */

/* class expression
const PersonCl = class {

}


class  PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }
}
const jessica = new PersonCl('Jessica', 1996);

console.log(jessica);
//jessica.calcAge();

// Create a method outside a class
PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);


}
//jessica.greet();

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    // get inside an object
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements)
const PersonProto = {
    calAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name ='Steven';
steven.birthYear = 2002;
steven.calAge()

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calAge();

*/
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calAge = function () {
    console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create((Person.prototype));
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
//console.log(mike);

mike.introduce();
mike.calAge();

class StudentCl extends Person {
    constructor(fullName, birthYear, course) {
        // Needs to happen first
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`)
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();


const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
////////////////////////////////////////////////////////////////////////////////////////////

// Data Encapsulation

class Account {
    // Public Fields
    locale  = navigator.language;
    //_movements = [];

    //Private fields
    #movements = [];


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account ${owner}`);
    }
    deposit(val) {
        this._movements.push(val);
    }
    getMovement() {
        this._movements
    }
    withdraw(val) {
        this.deposit(-val)
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved');
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1.getMovement())

console.log(acc1);
console.log(acc1.pin);

/////////////////////////////////////////////////////////////////////////////////////////////
// CODE CHALLENGE #1
console.log('Activity')
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    console.log(this.speed + 10);
}

Car.prototype.brake = function () {
    console.log(this.speed - 5);
}

const BM = new Car('BMW', 120);
const benz = new Car('Mercedes', 95);

BM.accelerate();
benz.accelerate();

BM.brake();
benz.brake();

// CHALLENGE 3
const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

const tesla = new EV('Tesla', 120, 23)
console.log(tesla);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    return `${this.make} going at ${this.speed}km/h with a charge of ${this.charge}%`
}

console.log(tesla.accelerate());