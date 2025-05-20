'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movement, sort = false) {
  containerMovements.innerHTML = '';
  const moves = sort ? movement.slice().sort((a, b) => a - b) : movement;
  moves.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html =
        `<div class="movements__row">\n` +
        `  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>\n` +
        `  <div class="movements__date"></div>\n` +
        `  <div class="movements__value">${mov}</div>\n` +
        `</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov
  }, 0);
  labelBalance.textContent = `${acc.balance} EUR`
};

const calcDisplaySummary = function (movements) {
  const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}`;
}

const out = function (movement){
  const outgoing = movement.filter(mov => mov < 0).reduce((acc, mov) => acc + Math.abs(mov), 0);
  labelSumOut.textContent = `${outgoing}`;
}

const interest = function (acc){
    const amount = acc.movements.filter(acc => acc > 0).map(deposit => (deposit * acc.interestRate) / 100).filter(inter => inter >= 1).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${amount}`;
}

const createUsernames = function (accs) {
    const userName = accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
};
createUsernames(accounts)

const updateUI = function(currentUser) {
  displayMovement(currentUser.movements);
  calcDisplayBalance(currentUser);
  calcDisplaySummary(currentUser.movements);
  out(currentUser.movements)
  interest(currentUser)
};

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(( acc => acc.username === inputTransferTo.value));
  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 && currentAccount.balance >= amount > 0 && receiverAcc && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    console.log(currentAccount.movements);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//CODE CHALLENGE 1
let checkDogs = function (dogsJulia, dogsKate) {
  dogsJulia.splice(0, 1)
  dogsJulia.splice(2)
  const correctedData = [...dogsJulia, ...dogsKate];
  correctedData.forEach(function (arrData, i) {
    //(arrData <= 3 )? console.log(`Dog number ${i + 1} is still puppy`) : console.log(`Dog ${i + 1} is an adult`);
      });
}

const juliaData = {'data1': [3, 5, 2, 12, 7], 'data2': [9, 16, 6, 8, 3]}
const kateData = {'data1': [4, 1, 15, 8, 3], 'data2': [10, 5, 6, 1, 4]}

checkDogs(juliaData.data1, kateData.data1);
//checkDogs(juliaData.data2, juliaData.data2);

// MAP FILTER REDUCE
const eurToUsd = 1.1;
const movement = movements.map(function (mov){
  return mov * eurToUsd
})


const movementDescribe =  movements.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;

  }
  else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
  }
});

// FILTER
const deposits = movement.filter(function (mov) {
  return mov > 0;
});

const  withdrawals = movement.filter(function (mov) {
  return mov < 0;
})


// REDUCE
const balance = movement.reduce(function(acc, curr){
  return acc + curr
}, 100);


// Check Maximum Value
const max = movements.reduce(function (acc, mov ) {
  return (acc > mov)? acc : mov;
}, movements[0]);

///////////////////////////////////////////////////////////////////////////////////////////

// CODE CHALLENGE 2

const calcAverageHumanAge = function (ages) {
  return ages.map(age => (age <= 2) ? 2 * age : 16 + age * 4);
}

const filterArray = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]).filter(function (value){
  return value > 18;
});


let sumValues = calcAverageHumanAge([16, 6, 10, 6, 6, 1, 4]).reduce(function (average, currentValue) {
  return average + currentValue
}, 0)

//////////////////////////////////////////////////////////////////////////////////////////////

//CODE CHALLENGE 3

const calcAverageHumanAge2 = function (array) {
  return array.map(age => (age <= 2) ? 2 * age : 16 + age * 4).filter(value => value > 18).reduce((average, curr, i, arr) => average + curr / arr.length);
}


const firstWithdrawal = movements.find(mov => mov < 0)

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

movements.includes(-130); // True
const anyDeposits = movements.some(mov => mov > 5000) // False
movements.every(mov => mov > 0);

movements.sort((a, b) => a - b);

const x = new Array(7);
x.fill(1);

const y = Array.from({length: 7}, (cur, i) => i + 1);

const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
const numDeposits1000 = accounts.flatMap(acc =>acc.movements).reduce((count, cur) => cur >= 1000 ? ++count : count, 0);
const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur); return sums}, {deposits: 0, withdrawals: 0});

//////////////////////////////////////////////////////////////////////////////////////////////

// CODE CHALLENGE 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//current > (recommended * 0.90) && current < (recommended * 1.10)
dogs.forEach(function (dog) {
  dog.recFood =   Math.trunc(dog.weight ** 0.75 * 28);
});

const dogName = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating ${dogName.curFood > dogName.recFood ? 'much' : 'little'} `);

const ownerTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(`${ownerTooLittle.join(' and ')}'s dogs eat too much!`);
