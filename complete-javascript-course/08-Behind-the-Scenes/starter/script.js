'use strict';

// Scope Function
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge() {
        let output = `${firstName} ,you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh, and you a millenial ${firstName}`;
            console.log(str)

            function add(a, b) {
                return a + b; // function scope
            }
            //Reassigning outer scope's variable
            //output = 'New Output';
        }
        // console.log(str); not defined
        // console.log(millenial);  var global scope found
        // console.log(add(2, 3))   Works when strict mode removed
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); --Cannot not get the scope of function
//printAge(); Function exist inside calcAge scope

 */
//Variable Environment (Hoisting)
// console.log(me);
//console.log(job);
//console.log(year);

//var me = 'Jonas';
//let job = 'teacher';
//const year = 1991;

/*
console.log(addDecl(2, 3))
//console.log(addExpr(2, 3))
//console.log(addArrow(2, 3))
//function hoisting

// declaration function
function addDecl(a, b) {
    return a + b;
}

// expression function
const addExpr = function(a, b) {
    return a + b;
}

// arrow function
var addArrow = (a, b) => a+b // undefined

console.log(numProducts);
// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
    console.log("All products deleted!");
}

var x = 1; // can be found on the window
let y  = 2;
const z = 3;

console.log(x === window.x);// true
console.log(y === window.y);// false
console.log(z === window.z); // false

// this keyword

const jonas = {
    name: 'Jonas',
    year: 1989,
    calcAge: function () {
        return 2037 - this.year;
    }
};
console.log(jonas.calcAge());

console.log(this); // window

const calAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined
}
calAge(1991);

const calAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // window
}

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; //method borrowing
console.log(matilda.calcAge())
*/

//var firstName = 'Matilda';

const jonas = {
    name: 'Jonas',
    year: 1989,
    calcAge: function () {
        return 2037 - this.year;


        /*  first Solution

            const self = this; // self or that
            const isMillenial = function () {
                console.log(self.year >= 1981 && self.year <= 1996);
            };
            isMillenial();
        },
         */

        // solution two
        const isMillenial =  () => {
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
   greet: () => {
        console.log(this) // Use regular function to avoid this
        console.log(`Hey ${this.firstName}`)
    },
};
jonas.greet();
jonas.calcAge();

// argument keyword
const addExpr = function(a, b) {
    //console.log(argumnents)
    return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => a + b;


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log(friend)
console.log(me)