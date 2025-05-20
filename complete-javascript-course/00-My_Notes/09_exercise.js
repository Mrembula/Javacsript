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
/********************************** EXERCISE 1 *******************************************/
//1.
const [player1, player2] = [...game.players];

//2.
const [gk, ...fieldPlayers] = game.players[0];

//3.
const allPlayers = [...game.players[0], ...game.players[1]];

//4.
const players1Final = [...game.players[1], 'Persic', 'Thiago', 'Coutinho'];
console.log(players1Final);

//5.
//({team1, draw, team2} = game.odds); // Wrong
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2)

//6.
function printGoals(...players) {
    console.log(...players);
    console.log(`Goals scored ${players.length}`);
}
printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich');

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

/******************************** EXERCISE 2 **********************************************/
//1.
for (const [count, player] of game.scored.entries()) {
    console.log(`Goal ${count + 1}: ${player}`);
}

//2.
printOdds = Object.values(game.odds)
let addValue = 0;
for (const value of printOdds) {
    addValue += value;
}
console.log(addValue/ printOdds.length);

//3.
objectName = Object.entries(game.odds);
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw': `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`)
}


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

//1.
const events= [...new Set(gameEvents.values())];

//2.
gameEvents.delete(64);
console.log(gameEvents)

//3.


