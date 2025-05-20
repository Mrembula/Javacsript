/****************** CONSTRUCTOR FUNCTION **************************/
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    //__proto__ available in the new Person constructor function

//  never create a method inside a constructor function
// In JS prototype are used as method outside the constructor
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

/******************* PROTOTYPE INHERITANCE (DELEGATION) ********************/
// These are used to create methods for the object constructor
// Don't know why, but JS doesn't allow writing instance function inside the object
Person.prototype.calcAge= function () {
    console.log(2037 - this.birthYear);
};


console.log(Person.prototype);
console.log(jonas.__proto__);
jonas.calcAge();

console.log(Person.prototype.isPrototypeOf(jonas)); // True
console.log(Person.prototype.isPrototypeOf(Person)); // False

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.hasOwnProperty('firstName')); // True
console.log(jonas.hasOwnProperty('species')); // False
// Has access, but doesn't belong to property(construct object) (False)

// Prototype chain
console.log(jonas.__proto__.__proto__);// Moving down the prototype chain
console.log(jonas.__proto__.__proto__.__proto__); // Null
console.log(Person.prototype.constructor); // Point back to Person

// Prototype of arrays
const list = [2, 3, 7, 3, 0, 9, 8];
console.log(list.__proto__); // Gives you array constructor and it's methods
Array.prototype // Add method to the Array constructor


// Method added to array construct
Array.prototype.unique = function () {
        return [...new Set(this)]
}; // return s unique numbers since we are using sets
console.log(list.unique()); // no repeat number


/********************************** CLASS *************************************/
/*const PersonCl = class {
        This is a class expression
}*/

// Class declaration
class  PersonCl {
    // init => Constructor
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // Methods are written inside and still added to the prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    // GETTER AND SETTER
    get age() {
        return 2037
    }
    set fullName(name) {
        if(name.includes(" "))
            this._fullName = name;
        else
            alert(`${name} is not a full name!`)
    }
    // static
    static hey() {
        console.log("Hey there! :)")
        console.log(this)
    }
}
const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

// Create a method outside a class as an option
PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
}
jessica.greet();

/******************************* GETTER AND SETTER ************************************/
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

/********************************* OBJECT CREATE (INHERITANCE) ***************************************/
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



/************************** INHERITANCE CONSTRUCTOR FUNC *******************************************/

const anotherPerson = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calAge = function () {
    console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    anotherPerson.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create((anotherPerson.prototype));
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

Student.prototype.constructor = Student
const mike = new Student('Mike', 2020, 'Computer Science');
//console.log(mike);

mike.introduce();
mike.calAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

// Make constructor point back to student as it point to Person
Student.prototype.constructor = Student
/******************************* INHERITANCE USING CLASS ***********************************/
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
martha.calcAge()

/****************************** OBJECT CREATE (LINKING OBJECT) **************************/
const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init= function (firstName, BirthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calAge();

/********************************* CLASS EXAMPLE **************************************/
class Account{
    // Public Field (instance)
    locale = navigator.language;
    _movement = [];

    // Private Field
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks fro opening an account, ${owner}`)
    }

    // public methods
    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this
    }

    // Private Method
    _requestLoan(val) {
        if(this.approveLoan(val)) {}
        this.deposit(val);
        console.log('Loan approved')
        return this
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140)
console.log(acc1);
console.log(acc1.pin)
console.log(acc1.#movements) // #movements to be declared in enclosed class

// method chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);