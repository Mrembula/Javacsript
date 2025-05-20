//CODING CHALLENGE 1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose,
and an array with the number of replies for each option. This data is stored
in the starter object below

Here are your tasks:

1.Create a method called 'registerNewAnswer' on the 'poll' object.
The method does 2 things:
1.1 Display a prompt window for the user to input thr number of
selected option. The prompt should look like this:
        What is your favourite programming language?
        0: Javascript
        1: Python
        2: Rust
        3: C++
        (Write option number)

1.2 Based on the input number, update the answer array. for example
If the option is 3 increase, increase the value AT POSITION 3 of the
array by 1. Make sure to check if the input is a number and the number
makes sense (e.g answer 5 wouldn't make sense tight?)

2. Call this method whenever the user clicks the 'Answer poll' button

3.Create a method 'displayResult' which displays the poll result. The
method takes a string as an input (called 'type'), which can be either
'string' or 'array'. If type is 'array', simply display the results
array as it is, using console.log(). This should be the default option.
If type is 'string' display a string like 'Poll results are 13, 2, 4, 1'

4.Run the 'displayResults' method as the end of each 'registerNewAnswer'
method call.

HINT: Use many of the tools you learned about in this and the last section

BONUS: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Fo NOT put the array in the
poll object! So what should the keyword look like in this situation?

BONUS TEST DATA: [5, 2, 3]
BONUS TEST DATA: [1, 5, 3, 9, 6, 1]
  */
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
    count : new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n\n Select the given numbers: `));
        if(typeof(answer) === 'number' && !isNaN(answer) && answer < this.options.length)
            this.count[answer]++;

        this.displayResult();
        this.displayResult('string');
    },
    displayResult(type = 'array') {
        if(type === 'array') {
            console.log(this.count);
        }
        else if(type === 'string')
            console.log(`Poll results are ${this.count.join(', ')}`);
    }
};
const {bind} = poll.registerNewAnswer;
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// BONUS TEST DATA: [5, 2, 3]
// BONUS TEST DATA: [1, 5, 3, 9, 6, 1]

poll.displayResult.call({count: [5, 2, 3] }, 'string');

/*
This id more of a thinking than a coding  challenge

Take the IIFE below and at the end of thr function, attach an even listener that changes the color
of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select
the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need.
Think about WHEN exactly the callback function is executed, and what that means for the variable
involved in this example
 */
    
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();


    
    