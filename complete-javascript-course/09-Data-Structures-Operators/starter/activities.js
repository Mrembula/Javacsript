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
//CODING CHALLENGE 1

// destructing array
const [player1, player2] = game.players;

// Spread operator
const [gk, ...fieldPlayers] = player1;

//spread operator
const allPlayers = [...player1, ...player2];

// Rest Pattern and Parameters
const playerFinal = [...player1, 'Thiago', 'Couthino', 'Perisic'];

//destructing an object
const {odds: {team1, x: draw, team2}} = game;

// destructing array
const printGoals = function (players) {
    console.log(`How many goals were scored ${players.length}\nplayers scored ${players}`)
}

// CODE CHALLENGE 2

//index and values using entries
for (let [i,value ] of game.scored.entries()) {
    `Goal ${i + 1}: ${value}`;
}

//Loop through keys and values of an object
let sum = 0, count = 0;
for (let [key, value] of Object.entries(game.odds)) {
    sum += value;
}

// CODE CHALLENGE 3
// MAP
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
    [92,'� Yellow card'],
    ]);

// Using set to remove duplicates
let events = new Set(gameEvents.values());

// Remove elements from a map
gameEvents.delete(64);

// Showing events every single moment
addEvents = 0;
for(const [key, value] of gameEvents.entries())  {
    addEvents += key;
}
console.log()

//showing first half and second
for (let [time, events] of gameEvents.entries()) {
    (time < 45) ? console.log(`1st ${time} ${events}`) : console.log(`2nd ${time} ${events}`);
}

// Exercise MAP! MAP!

