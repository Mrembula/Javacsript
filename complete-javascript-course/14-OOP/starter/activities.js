// Code Challenge 1

/*
1. Use a constructor function to implement a Car. A
car has a make and speed property. The speed property
is the current speed of the car in KM/H;
2.Implement an 'accelerate' method that will increase the
car by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's
speed by 5, and log the new speeed to the console;
4.Create 2 car object and experiment with calling
'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120km/h
DATA CAR 2: 'Mercedes' going at 95km/h
 */

// CHALLENGE 1
const Car = function(make, speed) {
    this.make = make;
    this.speed = Number(speed);
}

Car.prototype.accelerate=function () {
    this.speed += 10;
    console.log(`${this.make} new speed is ${this.speed}km/h`);
};

Car.prototype.brake=function () {
    this.speed -= 5;
    console.log(`${this.make} new speed is ${this.speed}km/h`);
}

const BM = new Car('BMW', '120');
const benz = new Car('Mercedes Benz', 95)

BM.accelerate()
benz.accelerate()

BM.brake()
benz.brake()

/*
// CHALLENGE 2
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = Number(speed);
        this.charge = charge;
    }
    accelerate()
    {
        this.speed += 10;
        console.log(`${this.make} new speed is ${this.speed}km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} new speed is ${this.speed}km/h`);
    }

    get car_speed() {
        return this.speed / 1.6;
    }

    set milesToKm(speed) {
        return speed * 1.6
    }
}



const ford = new Car('Ford', 120)
console.log(ford.car_speed)
ford.accelerate()
ford.car_speed = 50;
console.log(ford);
*/
// Code Challenge 3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
 Besides a make and current speed, the EV also has the current battery charge in % (charge property);
2. Implement an 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge
 to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease charge by 1%.
 Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery'
 (charge to 90%). notice what happens when you 'accelerate', HINT: Review the definition of polymorphism


DATA CAR 1: 'Tesla' going at 120 km/h with a charge of 23%
*/

const EV = function (make, speed, charge) {
    // Car.call(this, make, speed);
    this.make = make;
    this.speed = speed
    this.charge = charge;
};

// const tesla = EV('Tesla', 120, 23);
// EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
};

// EV.prototype.constructor = EV;

console.log(tesla);