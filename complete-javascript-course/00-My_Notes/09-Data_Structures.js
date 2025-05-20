/********************************** destructuring **********************************/
const arr = [2, 3, 4];
const [x, y, z] = arr; //assign
let [a, , b] = arr; // skip index
[a, b] = [b, a]; // switch using destruct

const nested = [2, 4, [5, 6]]
const [i, , j] = nested // return 2, 5
const  [p=1, q=1, r=1] = [8, 9] // Setting default values

//Destructure objects
// eg {} = name
const {menu = [], starterMenu: starters = []} = resturant; // default

// mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14}
({a, b} = obj) // 23, 7

/********************************* Spread Operator **********************************/
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], [2]];
console.log((badNewArr)) // [1, 2, 7, 8, 9] Don't do this

const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]
console.log(...newArr) // 1, 2, 7, 8, 9

const str = 'Jonas';
const letter = [...str, ' ', 'S.']
console.log(letter) // ['J', 'o', 'n', 'a',  'S.']
console.log(...str) // J o n a s

/******************************** Rest Pattern ***************************************/
// opposite of spread operator
const arr = [1, 2, ...[3, 4]] // [1, 2, 3, 4] spread
const [a, b, ...others] = [1, 2, 3, 4, 5] // [1, 2, [3, 4]] rest operator
const add = function (...numbers) {
    console.log(numbers)
}
add(2, 3) // [2,3]
add(5, 3, 7, 2) // [5, 3, 7, 2]

/*********************** Short Circuiting (&& AND ||) *****************************/
// ------------------- OR ---------------------------------
// IF FIRST VALUE IS TRUTHY IT WILL RETURN THE VALUE (NOT NULL)
console.log(3 || 'Jonas') // 3 USE AND RETURN ANY DATA TYPE
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null) // null
console.log(0 || true) // true

// ------------------AND -----------------------------------
// IF FIRST VALUE IS FALSEY IT WILL RETURN THAT VALUE
console.log(0 && ' Jonas') // 0
console.log(true || 0); // 0
console.log(undefined || null) // undefined
console.log(3 || 'Jonas') // jonas as he is the last value

//------------------- ?? ----------------------------------(NULLISH COALESCING)
// ZERO IS A VALUE UNLIKE OR AND WORKS THE SAME WAY TOO
console.log(0 ?? true) // 0 (NB NULL IS A VALUE)
console.log('' || 'Jonas'); // ''



//********************** Optional Chaining ******************************************/

const users =  [{name: 'Jones', email: 'hello@jones.io'}]

console.log(users[0]?.name ?? 'User array empty'); // Jonas

//------------------- Objects and entries ------------------------------

// menu.entries() Assigns number to iterate through
// Object.keys() helps loop through objects
// Object.values gets values
//Object.entries() change object to an array

//********************************** Sets *********************************************/
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
console.log(orderSet); // ['Pasta', 'Pizza', 'Risotto'] no repeat

console.log(new Set('Jonas')); // {'J', 'o', 'n', 'a', 's'}
console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza')); // True
console.log(orderSet.has('Bread')); // False
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // creates an array instead of spread

/************************************ Maps *********************************************/
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11)
.set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close')); // between 23 and 11
console.log(rest.has('categories')); //true
rest.delete(2);
console.log(rest.size);

//---------------------------- Map Iteration -----------------------------------//
const question = new Map(['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, Java],
    [3, Javascript],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!']);
console.log(question)

// Convert object to map
console.log(question.get('question'))
const hoursMap = new Map(Object.entries(openingHours)) // object OpeningHours
for(const [key, value] of question) {if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)}

const answer = Number(prompt('Your answer'));
console.log(answer)

question.get(question.get('correct') === answer);

// Convert map to array
console.log([...question])
console.log(...question.entries())
console.log([...question.keys])
console.log(([...question.values]))

//************************ STRINGS ********************************/
const airline = 'TAP Air Portugal';
const plane = 'A320'

console.log('B737'[0]) // B
console.log(airline.length)
console.log(airline.indexOf('r')) // 6
console.log(airline.lastIndexOf('r')) // the last r which = 10
console.log(airline.indexOf('Portugal')) // 2

console.log(airline.slice(4)) // Air Portugal   start from letter 4
console.log(airline.slice(4, 7)) // Air     start 4 ends 7

console.log(airline.slice(0, airline.indexOf(' '))) // TAP
console.log(airline.slice((airline.lastIndexOf(' ') + 1))) // Portugal

const checkMiddleSeat = function (seat ) {
    // B and E are middle seats
    const s = seat.slice(-1)
    if( s === 'B' || S === 'E') {
        console.log("You've got the middle seat");
    } else {
        console.log("You are lucky");
    }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// capitalize name
const passenger = 'jOnas';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1); // Jonas

const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.io\n';

const lowerEmail = loginEmail.toLowerCase();
const emailTrimmed = lowerEmail.trim() // removes spaces
// or
const normalizeEmail = loginEmail.toLowerCase().trim()
// .trimstart and .trimend

const rand = 'R288,97';
const toDollar = rand.replace('R', '$').replace(',', '.') // $288.97

const announcement =
    "All passengers come to boarding door 23. Boarding door 23!";
announcement.replaceAll('door', 'gate');

const plane = 'A320neo';
console.log(plane.includes('A320')); // TRUE
console.log(plane.startsWith(('Air'))); // false
console.log(plane.endsWith('neo')) ;// true
// split and join

//capitalize every word 
const nameUpper = [];
const fullName = 'jonas schmedtmann';
const capitalizeName = fullName.split(' ')

for(const n of capitalizeName) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
}