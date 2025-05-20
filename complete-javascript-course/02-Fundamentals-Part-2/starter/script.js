 // Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and has its capital city is ${capitalCity
    }`
}

console.log(describeCountry('South Africa', '54 million', 'Pretoria'))
//***********************************************************************************************

// Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    let percentage = (population / 790000000000) * 100;
    return percentage.toFixed(2);
}

let percentageOfWorld2 = function (population) {
    return ((population / 790000000000) * 100);
}

//console.log(percentageOfWorld1(140000000000));
//console.log(percentageOfWorld2(140000000000));

//console.log(percentageOfWorld1(54000000000));
//console.log(percentageOfWorld2(54000000000));

//call last 2 country with their population
//*******************************************************************************************************

// Arrow Functions

percentageOfWorld3 = (population) => ((population / 790000000000) * 100).toFixed(2);

console.log(percentageOfWorld3(140000000000));
//*********************************************************************************************************

// Function Calling Others Functions

function describePopulation(country, population) {
    let percentage = percentageOfWorld1(population);

    return `${country} has ${population} people, which is about ${percentage}% of the world`;
}
//**********************************************************************************************************

// Introduction to Arrays

const populations = [223804632, 34121985, 34121985]; //populations of 4 countries

const percentage = [percentageOfWorld2(populations[0]), percentageOfWorld2(populations[1]),percentageOfWorld2(populations[2])];
 console.log(populations, percentage)
//**********************************************************************************************************

//Basic Array Operations (methods)

let neighbours = ['Namibia', 'Botswana', 'Zimbabwe', 'Eswatini']
//**********************************************************************************************************

 // Introduction to Objects

 //Object Methods

const myCountry = {
     country: 'South Africa',
    capital: 'Pretoria',
    language: 'English',
    population: 60000000000,
    describe: function () {
         return `${this.country} has ${this.population} people who speak ${this.language} and the capital is ${this.capital}`
 }
}
//*********************************************************************************************************

 // Dot vs.Bracket Notation

// console.log(`${myCountry.country} has ${myCountry.populations + 1000000000} english-speaking people,${neighbours.length} neighbouring countries and a capital city called ${myCountry.capital}`);
// console.log(`${myCountry['country']} has ${myCountry['populations'] + 1000000000} english-speaking people,${neighbours.length} neighbouring countries and a capital city called ${myCountry['capital']}`);
//********************************************************************************************************

 // Iteration: The for Loop

 for(let i = 1; i <= 50; i++) {
 //    console.log(`Voter number ${i} is currently voting`)
 }
 //******************************************************************************************************

 //Looping Arrays, Breaking and Continuing
const percentage2 = [];
 for (let i = 0; i < populations.length; i++) {
     percentage2.push(percentageOfWorld2(populations[i]));
 }
 //*******************************************************************************************************

 //Looping Backwards and Loops in Loops

 listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
 for (let i = 0; i < listOfNeighbours.length; i++) {
     for (let j = 0; j < listOfNeighbours[i].length; j++){
         console.log('Neighbour', listOfNeighbours[i][j]);
     }
 }
 //********************************************************************************************************
 
//The while Loop

const percentage3 = [];
 let i = 0;
 while (i < populations.length) {
     console.log(populations[i])
     percentage3.push(percentageOfWorld2(populations[i]));
     i++;
 }
 console.log(percentage3)
 //*********************************************************************************************************

// CODE CHALLENGE #1
let calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolphinsAverage = calAverage(44, 23, 71);
let koalasAverage = calAverage(65, 54, 49);

checkWinner = function (avgDolhins, avgKoalas) {
    if(avgDolhins >= avgKoalas * 2 ) {
        console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`)
    } else if(avgKoalas >= avgDolhins * 2) {
        console.log(`Koalas win(${avgKoalas} vs ${avgDolhins}`)
    } else {
        console.log(`No team wins...`)
    }
}

//checkWinner(dolphinsAverage);
//checkWinner(koalasAverage);

// CODE CHALLENGE #2

let calcTip = function (bill) {
    if(bill >= 50 && bill <= 300) {
        return bill * (15 / 100);
    } else {
        return bill * (20 / 100);
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//console.log(bills, tips);

 // CODE CHALLENGE #3 

 markBMI = {
     firstName: 'Mark',
     lastName: 'Miller',
     mass: 78,
     height: 1.69,
 }

 johnBMI = {
     firstName: 'John',
     lastName: 'smith',
     mass: 92,
     height: 1.95,
 }

 calcBMI = (mass, height) => mass / height ** 2

 markBMI['BMI'] = calcBMI(markBMI['mass'], markBMI['height']);
 johnBMI['BMI'] = calcBMI(johnBMI['mass'], johnBMI['height']);

 console.log(`${johnBMI['firstName']}'s BMI ${johnBMI['BMI'].toFixed(2)} is higher than ${markBMI['firstName']} ${markBMI['BMI'].toFixed(2)}!`)

// CODE CHALLENGE 4

 const bill = [22, 295, 176, 440, 105, 10, 1100, 86, 52];
 const tip = [], total = [];

 for(let i = 0; i < bill.length; i++) {
     let calculateTip = calcTip(bill[i]);
     tip.push(calculateTip);
     total.push(calculateTip + bill[i]);
 }

 // CODE CHALLENGE BONUS

 function calculateAverage(arr) {
     let sum = 0, total;
     for(let i = 0; i < arr.length; i++) {
         sum += arr[i];
     }
     return total = sum / arr.length;
 }