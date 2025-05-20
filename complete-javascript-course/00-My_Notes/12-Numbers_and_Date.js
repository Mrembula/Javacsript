// Conversion
console.log(Number("23"))
console.log(+'23')

//Parsing
console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('e23')); // NaN
console.log(Number.parseFloat('2.5rem')); //2.5


//isNaN
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 /0)); // false


// isInfinite
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

//square root
console.log(Math.sqrt(25)) // 5
console.log(25 ** (1/ 2)) // 5
console.log(8 ** (1/ 3)) // 2 cubic

console.log(Math.max(4, 18, 23, 11, 2)) // 23
console.log(Math.max(4, 18, '23', 11, 2)) // 23
console.log(Math.max(4, 18, '23px', 11, 2)) // NaN

console.log(Math.max(4, 18, 23, 11, 2)) // 4

console.log(Math.PI * Number.parseFloat(('10px') ** 2))// 314 calculate circle

// Random
console.log(Math.trunc((Math.random() * 6) + 1))

const  randomInt = function(min, max) {
    return Math.trunc(Math.random() * (max - min) + 1) + min
}
console.log((randomInt(10, 20))) // random number 10 to 20

// Rounding Integers
console.log(Math.trunc(23.3)) // 23
console.log(Math.round(23.8)) // 24
console.log(Math.ceil(23.9)) // 24
console.log(Math.floor(23.9)) // 23

// Rounding decimals
console.log((2.7).toFixed(0)) // 3 as string
console.log((2.7).toFixed(3)) // 2.700 as string
console.log((+2.345).toFixed(2)) // 2.35

// Remainder (Module Operator)
console.log(5 % 2) // 1
console.log(5 / 2) // 2.5   2 + 2 = 4 + 1 remainder
console.log(8 % 3) // 2

// Numeric Separators
const diameter = 287_460_000_000;

// Big Int
console(2 ** 53 -1) // the safest number js can represent
console.log(Number.MAX_SAFE_INTEGER)

console.log(BigInt(34373629837349827398734598817443958204873297549354))
// console(10n / 3n) n for big int

//DATE AND TIME
// Create a date

const now = new Date();
console.log(now) // recent date
console.log('Mar 19 2024 15:10:35')

console.log(new Date('December 24, 2015'))

console.log(new Date(2037, 10, 19, 23, 5)) // YYYY/MM/DD/HH/MM/SS
console.log(new Date(0)) // Thu Jan 01 1970
console.log(new  Date(3 * 24 * 60 * 60 * 1000)); // timestamp

//Working with dates
const future = new Date(2037, 10, 19, 23)
console.log(future); // Thu Nov 19 2037 15:23:00
console.log(future.getFullYear()) // 2037
console.log(future.getMonth()) // 10
console.log(future.getDay()) // 4
console.log(future.getHours()) // 15
console.log(future.getMinutes()) // 23
console.log(future.getSeconds()) // 0

console.log(future.toISOString())
console.log(future.getTime())

future.setFullYear(2040) // set the year

const calcDaysPassed = function (date1, date2) {
    return Math.abs((date2 - date1) / (1000* 60  *60 * 24))
};

calcDaysPassed(future, new  Date())

/***************************************** Internationalizing Numbers **********************************/
const number = 3884764.23
// These other unit e.g celcius
const options = {
    style: 'unit',
    unit: 'miles-per-hour', // Other options like celcius
    currency: 'EUR',
}

console.log('US: ',new Intl.NumberFormat('en-US').format(number)) // US: 3,884,764.23
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(number)) //Germany: 3.884.764,23
console.log('Syria: ', new Intl.NumberFormat('ar-SY').format(number, options)) // syria: Strange shit
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num));

/**************************************** setTimeout and setInterval ***********************************/
// setTimeout -> Happens once
// setInterval -> Happens everytime until stopped
const ingredients = ['olives', 'spinach']

const pizzaTimer = setTimeout(function(ing1, ing2) {
    console.log(`Here is your pizza with ${ing1} and ${ing2}`)
}, 3000, ...ingredients); // runs after 3 seconds

if(ingredients.includes('spinach'))clearTimeout(pizzaTimer)

// setTimeInterval
setInterval(function () {
    const now = new Date()
    console.log(now)
}, 1000) // runs every second