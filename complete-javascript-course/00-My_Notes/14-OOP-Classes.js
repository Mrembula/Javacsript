// Class are synthetic sugar over prototype (Prototype is still used)

// class expression
// const PersonCl = class {}

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Added to the prototype(Parent) property
    // Written inside or outside. No difference
    calcAge() {
        return console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this._fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }
    // Set property that already exist
    set fullName(name) {
        if (name.includes(' ')) {
           this._fullName = name;
        } else alert(`${name} is not a full name.`);
    }
    // Static (this is only available on class)
    static hey() {
        console.log("Hey there! :)")
        console.log(this)
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

// Method can also be written outside the class (wil still be saved in the Prototype)
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//    console.log(`Hey ${this.firstName}`);
//}

jessica.greet();

const walter = new PersonCl('Walter White', 1956);

// 1. Classes are not hoisted like functions  2. Class are first class functions
// 3. Classes are executed in strict mode
//************************* Getters and Setters ************************************/
// Prototypes
const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get popOut() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
}
console.log(account.popOut);
account.latest = 50;
console.log(account.movements);
//*********************** Static method ***********************************/
PersonCl.hey();
//************************ Class Inheritance **************************/

class Student extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first
        super(fullName, birthYear)
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
}

const martha = new Student('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//********************* OBJECT CREATE IN CLASS *******************************/
class Account {
    // Public Field (instances)
    locale = navigator.language;
    //Private Fields
    #movement = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner =owner;
        this.currency = currency;
        this.#pin = pin;
        // this.movement = [];
        // this.locale = navigator.language;
    }
    // Public method (All methods are public here)
    deposit(value) {
        this.#movement.push(value);
    }
    withdrawal(value) {
        this.deposit(-value);
    }
    requestLoan(value) {
        if(this.approveLoan(value)) {
            this.deposit(value);
            console.log('Loan approved')
        }
    }
    // Private method (Not suggested.Use _approveLoan)
    #approveLoan(value) {
        return true;
    }
}

const account1 = new Account('jonas', 'EUR', 1111);
console.log(account1)

account1.deposit(250);
account1.withdrawal(140);
// console.log(account1.#movements); Error declared enclosing class