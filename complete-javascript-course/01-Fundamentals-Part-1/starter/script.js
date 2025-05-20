// Values and Variables
const country = 'South Africa';
const continent = 'Africa';
let population = '54 million';

console.log('country:', country);
console.log('continent:', continent);
console.log('population:', population);
//****************************************************

//Data types
isIsland = true;
let language;

console.log(typeof(country));
console.log(typeof(continent));
console.log(typeof(population));
console.log(typeof(isIsland));
//****************************************************

//let, const and var
language = 'South Sesotho';
// country = "England" -> Omits an error message, can't assign a const to another value
//*****************************************************

//Basic Operators
let populationToNumber = 54000000000;
let finland = 33000000000;

result = populationToNumber / 2; // change population to number
console.log("Each half in every country", result);

add = populationToNumber++;
console.log("result", add)

console.log(populationToNumber < finland );

description = `${country} is in ${continent}, and it's ${population} people speak ${language}`;
//******************************************************

// if else statements
if(populationToNumber > finland){
    console.log(`${country}'s population is above average`);
}
else {
    console.log(`${country} population is ${population} below average`);
}
//******************************************************************

// Type Conversion and Coercion

 a = '9' - '5' // 4;
 b = '19' - '13' + '17'; // 617;
c = '19' - '13' + 17; // 23;
d = '123' < 57; // false;
e = 5 + 6 + '4' + 9 - 4 - 2 // 1143;
//******************************************************************

// Equality Operators: == vs ===

let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

 if(numNeighbours === 1){
     console.log('Only 1 border!');
 } else if(numNeighbours > 1) {
    console.log('More than 1 border')
 } else {
    console.log('No border')
 }
 //*****************************************************************

// Logical Operators

let sarahLanguage = 'English';
let sarahPopulation = 50000000000;

if((populationToNumber < sarahPopulation) && (language === sarahLanguage) && !(isIsland)) {
    console.log(`You should live in ${country}`)
} else {
    console.log(`${country} does not meet your criteria`)
}
//*****************************************************************

language = "english";

switch (language){
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}
/**********************************************************************
/*
//CODE CHALLENGE #1
let markWeight = 78;
let markHeight = 1.69;

let  johnWeight = 92;
let johnHeight = 1.95;

markResult = markWeight / markHeight ** 2;
johnResult = johnWeight / johnHeight ** 2;

console.log(markResult, johnResult);
markhigherBMI = markResult > johnResult;
console.log(markhigherBMI);


markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.95;

markResult = markWeight / (markHeight * markHeight);
johnResult = johnWeight / (johnHeight * johnHeight);

console.log(markResult, johnResult);
markhigherBMI = markResult > johnResult;
console.log(markhigherBMI);

//CODE CHALLENGE #2
if(markResult > johnResult){
    console.log(`Mark's BMI is higher than John's!`)
}
else {
    console.log(`John's BMI is higher than Marks's!`)
}

// CODE CHALLENGE #3
let dolphinsDataOne = (96 + 108 + 89) / 3;
let koalasDataOne = (88 + 91 + 110) / 3;

let dolphinsBonusOne = (97 + 112 + 101) / 3;
let koalasBonusOne = (109 + 95 + 123) / 3;

let dolphinsBonusTwo = (97 + 112 + 101) / 3;
let koalasBonusTwo = (109 + 95 + 106) / 3;

let countDolphins = 0;
let countKoalas = 0;

if(dolphinsDataOne > koalasDataOne) {
    countDolphins++;
} else if(dolphinsDataOne === koalasDataOne) {
    countDolphins += 0;
    countKoalas += 0;
}  else {
    countDolphins++;
}

 if(dolphinsBonusOne > koalasBonusOne) {
     countDolphins++;
 } else if(dolphinsBonusOne === koalasBonusOne) {
     countDolphins += 0;
     countKoalas += 0;
 }  else {
     countDolphins++;
 }

 if(dolphinsBonusTwo > koalasBonusTwo) {
     countDolphins++;
 } else if(dolphinsBonusTwo === koalasBonusTwo) {
     countDolphins += 0;
     countKoalas += 0;
 }  else {
     countDolphins++;
 }

 if(countDolphins > countKoalas) {
     console.log(`Dolphins win the tournament!`)
 } else if(dolphinsDataOne === koalasDataOne) {
     console.log(`It's a tie!`)
 }  else {
     console.log(`Koalas win the tournament!`)
 }

 // CODE CHALLENGE #4
 let bill = Number(prompt('Enter the bill: '))
let tip
 billExprssion = bill >= 50 && bill <= 300;
console.log(billExprssion)

 switch (billExprssion) {
     case true:
         tip = bill * (15 / 100);
         console.log(`
         Bill: ${bill}
         Tip: ${tip} 
         Total amount: ${bill + tip}`);
         break;

     case false:
         tip = bill * (20 / 100);
         console.log(`
         Bill: ${bill}
         Tip: ${tip} 
         Total amount: ${bill + tip}`);
         break;
 } */
