// ARRAY METHODS

let arr = ['a', 'b', 'c', 'd', 'e']

// SLICE
arr.slice(2); // 'c', 'd', 'e'
arr.slice(2, 4); // 'c', 'd'
arr.slice(-1); // 'e'
arr.slice(1, -2); // 'b', 'd'
([...arr]);

// SPLICE
arr.splice(2); // Mutates the original array [arr = 'a', 'b']
arr.splice(1, 2); // 'a', 'd' removes

// reverse
const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse(); // Mutates original array

// CONCAT
const letters = arr.concat(arr2);
([...arr, ...arr2]);

// JOIN
letters.join('-');

// others
push
pop
unshift
indexof
includes

/******************************* AT METHOD *****************************/
// AT METHOD

arr = [23, 11, 64]

arr.at(0) // 23

arr[arr.length - 1]; // 64
arr.slice(-1)[0]; // [0] removes square brackets
arr.at(-1);

/***************************** FOREACH METHOD ******************************/
// FOREACH METHOD
arr.forEach(function(number) {
    console.log(number) // 23 11 64
})
// Works on map and set
/************************ MAP, FILTER AND REDUCE  **************************/
movements = [100, 450, -400, 3000, -650, -130, 70, 1300];
// MAP takes an array and another array but sum up or multiplied

const euroToUsd = 1.1;
 const movmentUSD = movements.map(function (mov){
    return mov * euroToUsd
});  // returns [220, 495, -440, 3300, -715, -413, 77, 1430]

const movmentsUSD = movements.map(mov =>
     mov * euroToUsd
);

 const moveDescription = movements.map(function (mov, i, arr) {
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited': 'withdrew'} ${Math.abs(mov)}`
})
// FILTER finds a variable that meets the condition of a statement returns the filtered array
 const deposits = movements.filter(function(mov){
     return mov > 0
 }); // [200, 450, 3000, 70, 1300]

// REDUCE takes array returns a single value, ot an array
const balance = movements.reduce(function (acc, curr, i, arr) {
    return acc + cur
}, 0); // count start 0  // result 3840

/*********************** FIND METHOD **********************************/

//FIND return first value that is true
const firstWithdrawal = movements.find(function (mov) {
    return mov < 0;
}); // -400

/****************** INCLUDES AND SOME *********************************/
//INCLUDES: FOR EQUALITY
movement.includes(-130) // True

//SOME: FOR CONDITION
const anyDeposits =movements.some(function (mov) {
    return mov > 5000
}); // false

// EVERY
movements.every((function (mov) {
    return mov > 0 //if every element in the array > 0
})); // false

/**************************fLAT AND FLATMAP **************************/

// FLAT
const arrFlat = [[1, 2, 3], [4, 5, 6], 7, 8];
arrFlat.flat() // [1, 2, 3, 4, 5, 8, 7, 8]

const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
arrDeep.flat(2)  // [1, 2, 3, 4, 5, 8, 7, 8]

// FLATMAP = FLAT + MAP

movement.sort() // sort based on strings

/************************* FILL METHOD *****************************/
// CALLED ON AN EMPTY ARRAY
const x = new  Array(7);
x.fill(1); // [1, 1, 1, 1 ,1, 1, 1, 1]
x.fill(1, 3) // fill position 0 to 2