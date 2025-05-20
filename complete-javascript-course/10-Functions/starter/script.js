'use strict';

// DEFAULT PARAMETERS

const bookings = []
const createBooking = function(flightNum, numPassengers= 1, price= 199*numPassengers) {
    // old style (ES5)
    // numPassengers = numPassengers || 1
    // price = price || 199

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    // console.log(booking);
    booking.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5)
createBooking('LH123', undefined, 1000) // Skip default

/****************************************************************/
// HOW TO PASS ARGUMENTS VALUES VS REFERENCE

const flight = 'LH234';

const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 247397984
}

const checkIN = function(flightNum, passenger) {
    flightNum = 'LH99'
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 247397984) {
        alert('Check in');
    } else {
        alert('Wrong passport!')
    }
}
// Javascript only passes copy to function never the real value
checkIN(flight, jonas);
console.log(flight);
console.log(jonas)
/******************************************************************/
// FIRST CLASS VS HIGHER ORDER FUNCTION

// ACCEPTING CALLBACK (ANOTHER FUNCTIONS AS PARAMETER)
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase() // Regular expression
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
}


transformer('javaScript is the best!', upperFirstWord);
transformer('Javascript is the best', oneWord);

// JS uses callbacks all the time
const high = function() {
    //console.log('HI!');
}
document.body.addEventListener('click', high);

['Jonah', 'Martha', 'Adam'].forEach(high);


/**********************************************************/
// FUNCTIONS RETURN FUNCTIONS
const greet = function (greeting) {
    return function (name) {
        console.log((`${greeting} ${name}`));
    };
};
const greetHey = greet('Hey');
greetHey('Steve'); // Hey Steve
greetHey('Jonas') // Hey Jonas

greet('hello')('Jonas')

const greetArr = greeting => name =>console.log(`${greeting} ${name}`)
greetArr('Hi')('Jonas')

/***************************************************************************/
// CALL AND APPLY METHOD

const lufthansa = {
    airline: 'Lufthanasa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Jonas Schmedtman');
lufthansa.book(635, 'John Smith');
console.log(lufthansa)

const eurowings = {
    airline: `Eurowings`,
    iataCode: 'EW',
    bookings: [],
};

// call method
const book = lufthansa.book;
//book(23, 'Sarah Williams'); not work ****************8
// set this key to another objects (dict). this key not undefined
book.call(eurowings, 23, 'Sarah Williams');
//console.log(eurowings);
bool.call(lufthansa, 239, 'Mary Cooper');

// Apply method
const flightData =   [583, 'George Cooper'];
book.apply(eurowings, flightData); // Takes only array, but works like call
//console.log(eurowings);
book.call(eurowings, ...flightData) //simpler way

/****************************************************************************/
// bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');
bookLH(583, "George Cooper");

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Martha Cooper');

// with Event listener and objects
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const taxRate = addTax.bind(null, 0.23);
console.log(taxRate(100)); //123
console.log(taxRate(23));  //28.29



const addTax = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}
const addVAT2 = addTax(0.23);
//console.log(addVAT2(100))
//console.log(addVAT2(23))

/*********************************************************************/
// IMMEDIATELY INVOKED FUNCTION EXPRESSION

const runOnce = function () {
    console.log('This will never run again');
}
runOnce();

(function() {
    console.log('This will never run again')
})();// () calling a function without any expression

/*******************************************************************/
// CLOSURES

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passenger`);
    }
}

const booker = secureBooking();

booker(); // 1 passenger
booker(); // 2 passenger
booker(); // 3 passenger
// Closures allows increment while variable is in a function
// It remembers the increment and stores it somewhere

// EXAMPLE 1
let f;
const g = function() {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

g();
f(); // 46

const h = function () {
    const  b = 777
    f = function () {
        console.log(b * 2);
    }
}

g();
f(); // 46
h() // 1554


// EXAMPLE 2
const boardingPassengers = function (n, wait) {
    const perGroup = n/ 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
};

boardingPassengers(180, 3 )
