//Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
}
// phachaseItem

//Implement a cart feature
// 1. Add items to cart
const addCart = function (item) {
    const addTax = function (item) {
        item += (item * 3) / 100;
        return user.cart.push(item);
    }
    user.purchases.push(addTax(item))
};
// 2. Add 3% tax to item in cart
// 3 Buy item: cart --> purchase
// 4.Empty cart

//Pure functions -> return and doesn't share data
// No side effects
const array = [1, 2, 3]; //shared state
//side effect -> Does the function affect anything outside itself
// yes. The array[1, 2, 3]
function a(arr) {
    arr.pop();
}
a(array);
console.log(array);

//No side effects
function removeLastItem(arr) {
    const newArray = [].concat(arr); //concat (different location in memory)
    newArray.pop();
    return newArray;
}
// input --> output
// Referential Transparency
function add(num1, num2) {
    return num1 + num2 //Output does not change
}

function b(num) {
    return num*2;
}
console.log(b(add(2, 3)));

//idempotence
Math.abs(Math.abs(-50)) // 50 No change

//Imperative vs Declerative
// computers are imperative because has to be given instructions
// Imperative
for (let i = 0; i < 3; i++) {
    console.log(i);
}
// Declerative
[1, 2, 3].forEach(item => console.log(item));

//immutability (not changing state)
const obj = {name: 'Andrei'} // 
function clone(obj) {
    return {...obj} // this is pure (cloned)
}
obj.name = 'Nana';

// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(5)(6)
const multiplyBy2 = curriedMultiply(2);
multiplyBy2(5) //10

// Partial Application
const curriedMultiply2 = (a, b, c) => a*b*c;
const partialMultiplyBy5 = multiplyBy2.bind(null, 5);
partialMultiplyBy5(4, 10);

// MCI Memoization => closure is being used
function memoizedAddTo80(n) {
    let cache = {}
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
const memoized = memoizedAddTo80();

console.log('1', memoizedAddTo80(5));
console.log('1', memoizedAddTo80(6));
// If change 6 to 5 to see difference

//Compose
const compose = (f, g) => (data) => f(g(data));

//Pipe
// const compose = (f, g) => (data) => g(f(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplybY3AndAbsolute = compose(multiplyBy3, makePositive);
multiplybY3AndAbsolute(-50);

// Arity === Parameter of a function