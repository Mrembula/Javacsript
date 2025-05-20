'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value)); */
const secretNumber = (Math.trunc(Math.random() * 20) + 1)
let  highScore = 0
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

     if(score !== 1) {
         // If player enter a zero or no value
         if (!guess) {
             document.querySelector('.message').textContent = 'No Number!'

         }

         // If player guesses the right number
         else if (guess === secretNumber) {
             document.querySelector('.message').textContent = 'Correct Number!';
             document.querySelector('body').style.backgroundColor = '#60B247';
             document.querySelector('.number').style.width = '30rem';

             document.querySelector('.number').textContent = secretNumber;

             if (score > highScore) {
                 score = highScore
                 document.querySelector('.high-score').textContent = highScore;
             }
         }

         // If user entered the wrong number
         else if (guess !== secretNumber) {
             (guess > secretNumber) ? document.querySelector('.message').textContent = 'Too High!' : document.querySelector('.message').textContent = 'Too Low!!'
                 score--;
                 document.querySelector('.score').textContent = score;
             }

     }

     // When player has lost or ran out choice
     else {
         document.querySelector('.message').textContent = 'You Lost the game!';
     }
})
/*
Implement a game rest functionality so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and input field
4. Also restore the original background color(#222) and number width(15 rem)
 */
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15 rem';
    document.querySelector('body').style.backgroundColor = '#222';
})

