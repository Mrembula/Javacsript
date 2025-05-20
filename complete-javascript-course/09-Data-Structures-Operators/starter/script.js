'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
let arr1;
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },


  // destructing arrays

  orderDelivery: function (obj) {
    console.log(obj)
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log((`Here's your delicious pasta with ${ing1}, ${ing2}, ${ing3}`))
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient)
    console.log(otherIngredient)
  }
};

// Maps
const question = new Map([
    ['question', 'What is the best programming language in the world!'],
    [1, 'C'],
    [2, 'Java'],
    [2, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!']
])
console.log(question)

console.log(Object.entries(restaurant.openingHours))
const  hoursMap = new Map(Object.entries(restaurant.openingHours))
console.log(hoursMap)
const rest = new Map();


rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze', 'Itay');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has(('categories')));
rest.delete(2);
console.log(rest.size);
//rest.clear()
console.log(rest)



// looping through keys and values using objects
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

const values = Object.values(restaurant.openingHours);
console.log(values);

const entries = Object.entries((restaurant.openingHours))
console.log(entries)

// optional chaining
if (restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);

console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Nullish value
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests)

// Nullish: returns null and undefined 0
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect)

//short-circuiting
// ----- OR  Operator ------
// Looks for a truthy value
console.log('Jonas' || 3); //return a truthy value (something not empty string)

const guest1 = restaurant.numGuests ? restaurant.numGuests: 10; // If else statement
//console.log(guest1)

const guest2 =  restaurant.numGuests || 10; // short circuit

// ----- AND Operator ------
// Looks for a falsey value
console.log(0 && 'Jonas');
console.log(7 && 'Jonas')

// Rest Operator
/*const arr = [1, 2, ...[3, 4]]; */

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b , others)

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood)


//objects
const  {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays)

//2.Functions
const add =  function(...numbers) {
  console.log(numbers)
}
 add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4)

restaurant.orderPizza('mushrooms, onion', 'olives', 'spinash');

// spread Operator
//const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")]
//console.log(restaurant.orderPasta(...ingredients));

/*let arr = [7, 8, 9]*/
const newArr = [...arr, 1, 2]
console.log(newArr);

console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);


// destructing object
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const {name, openingHours, categories} = restaurant;
//console.log(name, openingHours, categories)

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
//console.log(restaurantName, hours, tags)

// Set default values
const {menu = [], starterMenu: starters = []} = restaurant;
//console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
//console.log(a, b)

// nested objects
const {fri :{open, close}} = openingHours
//console.log(open, close)


//console.log(main, secondary);
// switching variables
//[main, secondary] = [secondary, main]
// console.log(main, secondary)
//console.log(restaurant.order(2, 0))


//nested destructing
const nested = [2, 4 , [5, 6]];
const [first , ,[e, f]] = nested;
console.log(first, e, f);

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*CHALLENGE 2
//Q1
for (const [i, playerScored] of game.scored.entries()) {
  //console.log(`Goal ${i + 1}: ${playerScored}`);
}

//Q2
const odds = Object.entries(game.odds)
let sum = 0;
for (const [key, value] of odds) {
  sum += value;
}
console.log(sum / odds.length);

//Q3
for (const [team, odd] of Object.entries(game.odds)) {
   const teamStr = team === 'x' ? 'draw': `victory ${game[team]}`;
   console.log(`Odd of ${teamStr} ${odd}`)
}
/*
//CHALLENGE 1
//Q1 array destructing
const [player1, player2] = game.players;
console.log(player1, player2);

//Q2 Spread Operator
const [gk, ...fieldPlayer] = player1;
//console.log(gk, fieldPlayer)

//Q3 Spread Operator
const allPlayers = [...game.players[0], ...game.players[1]];
//console.log(...allPlayers)

//Q4 Adding to spread operator
const player1Final = [...game.players[1], 'Thiago', 'Coutinho', 'Perisic']
//console.log(player1Final)

//Q5 change object value
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//Q6
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
}

printGoals(...game.scored);
//Q7
team1 < team2 || console.log('Team 1 is more likely to win')
 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*/CHALLENGE 1
//(1) Spread Operator
const [players1, players2]  = [...game.players];

//(2)
const [gk, ...fieldsPlayer] = [...players1];

//(3)
let allPlayers = [...game.players[0], ...game.players[1]]

//(4)
const playerFinal = [...players1, 'Thiago', 'Couthino', 'Perisic'];

//5
const {odds: {x: draw}} = game;

//6
const  printGoals1 = (...players) => {
  console.log(players);
  console.log(`${players.length} were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');

team1 < team2 || console.log('Team 1 is more likely to win')

//##################################################################################

// CHALLENGE 2

//1
for (const [score, playerNames] of game.scored.entries()) {
  //console.log(`Goal ${score + 1}: ${playerNames}`)
}

//2
let count = 0, sum = 0;

for (const [key, value] of Object.entries(game.odds)) {
  sum += value;
  count += 1;
}

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`)
}
*/
//######################################################################################


const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//CHALLENGE 3

//1
let events = new Set([...gameEvents.values()]);

//2
console.log(gameEvents.delete(64));