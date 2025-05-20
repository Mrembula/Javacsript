/************************************** TYPES OF WINDOWS **********************************/
console.log(document.documentElement); // Selects the whole HTML elements
console.log(document.head);
console.log(document.body);


/************************ SELECTING ELEMENTS OR GETTING THEM *****************************/
// NODE doesn't update after deleting element an HTML COLLECTION does update
const header = document.querySelector('.header'); // Single selector
const allSelections = document.querySelectorAll('.section') // multiple selector
document.getElementById('section--1');
document.getElementsByClassName('btn');
const allButton = document.getElementsByTagName('button');
console.log(allButton)


/********************** CREATING AND INSERTING ELEMENTS ***********************************/
.insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML = "We use cookies for improved functionality and analytics<button class='btn btn--close-cookie'>Got it</button>";

header.prepend(message); // Add element as first child of header element
header.append(message); // add elements as last child of header element
header.append(message.cloneNode(true)) // elements in same messages in one element

header.before(message); // place message before element
header.after(message); // place message after element

/************************************** DELETING ELEMENTS*************************************/

document.querySelector('.btn--close-cookie').addEventListener('click', function () {
    message.remove(); // recently introduced to JS
    message.parentElement.removeChild(message); // before remove
})


/************************************** STYLE JS *******************************************/

message.style.background = '#37383d';
message.style.width = '120%';
console.log(getComputedStyle(message).color); // get from styles list css
console.log(getComputedStyle(message).height);

message.style.height = (Number.parseFloat(getComputedStyle(message).height) +  10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');


/**************************************** ATTRIBUTES **************************************/

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

console.log(logo.src); //Absolute
console.log(logo.getAttribute('src')) //Relative
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'))
console.log(logo.className);

//DATA ATTRIBUTES if these a word that starts with data
console.log(logo.dataset.versionNumber) // dash to camelCase

// None Standard
console.log(logo.designer); //value undefined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Banklist');

//  CLASSES
logo.classList.add('c', 'j', 'i') // can add multiple elements or attributes to class
logo.classList.remove()
logo.classList.toggle()
logo.classList.contains()

/***************************** EVENT LISTENERS AND HANDLERS ***************************************/

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function (e) {
    alert('addEventListener: Great1 You are reading the heading :D');
})

const alertH1 = function (e) {
    alert('addEventListener: Great1 You are reading the heading :D');
    setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
}
h1.addEventListener('mouseenter', alertH1); //function was exported

// HTML => onclick="alert('HTML alert')" => works on HTML

h1.onmouseenter = function (e) {
    alert('addEventListener: Great1 You are reading the heading :D'); // old school
}

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTML PARSED AND DOM TREE BUILT!', e);
})

window.addEventListener('load', function (e) {
    console.log('Page fully loaded!');
})

window.addEventListener('beforeunload', function (e){
  e.preventDefault(); // before leaving page
  console.log(e);
  e.returnValue = '';
})

/*********************************** DOM TRAVERSING ***************************************/
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes)
console.log(h1.children)
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'blue';

//Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (e){
    if(e !== h1) {
        e.style.transform = 'scale(0.5)';
    }
})

/******************************** SMOOTH SCROLLING (NB) *********************************/
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // HTML multiple collection
document.getElementsByClassName('btn');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect(); // renders coordinates
    console.log(s1coords);

    // renders coordinates from position to the top of screen
    console.log(e.target.getBoundingClientRect());

    // Scroll position
    console.log('Current scroll(X/Y)',window.pageXOffset, pageYOffset);

    // Check pixel of the screen (height and width)
    console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    //Scrolling Methods
    window.scrollTo(s1coords.left + window.pageXOffset + s1coords.top + window.pageYOffset); // not working
    window.scrollTo({left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',})
    section1.scrollIntoView({behavior: 'smooth'});
});

/************************************ BUBBLING EVENTS **************************************/
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e){
    this.style.background = randomColor();
     console.log('LINK', e.target, e.currentTarget);
})

document.querySelector('.nav__links').addEventListener('click', function (e){
  this.style.background = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log(this === e.currentTarget);
  // e.stopPropagation() =>STOPS THE PROPAGATION
})
//this key === currentTarget => THE SAME THING
document.querySelector('.nav').addEventListener('click', function (e){
  this.style.background = randomColor();
  console.log('NAV', e.target, e.currentTarget);
})
// Event bubbling simply means applying the same event handler in different scope
// but one parent and one is child



