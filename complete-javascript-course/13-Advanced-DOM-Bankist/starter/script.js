'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Activity
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // HTML multiple collection
document.getElementsByClassName('btn');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll(X/Y)',window.pageXOffset, pageYOffset);
  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  //Scrolling Methods
  //window.scrollTo(s1coords.left + window.pageXOffset + s1coords.top + window.pageYOffset); not working
  /*window.scrollTo({left: s1coords.left + window.pageXOffset,
  top: s1coords.top + window.pageYOffset,
  behavior: 'smooth',})*/
  section1.scrollIntoView({behavior: 'smooth'});
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*document.querySelectorAll('.nav__link').forEach(function (e) {
  e.addEventListener('click', function (e){
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  })
})
 */

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  }
})

//Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer  = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e){
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

})

// menu fade animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link){
        el.style.opacity = opacity;
      }
    })
    logo.style.opacity = opacity;
  }
}
//  passing argument into handler
nav.addEventListener('mouseout', handleHover.bind(1));
nav.addEventListener('mouseout', handleHover.bind(0.5));

/*
const initialCoords = section1.getBoundingClientRect()
window.addEventListener('scroll', function () {
  if(window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  }
  else {
    nav.classList.remove('sticky');
  }
})

const  obsCallback = function (entries, observer) {

};
const obsOptions = {
  root: null,
  threshold: 0.1,
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
 */
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
  }
  else {
    nav.classList.remove('sticky');
  }
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
})
headerObserver.observe((header))

const allSections = document.querySelectorAll('.section');
// Reveal Sections
const revealSection = function (entries, observer) {
  const [entry] = entries
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img');
const loadImg = function (entries, observer) {
  const [entry] = entries
  if(!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target);
}
const observeImg = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => observeImg.observe(img));

// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
let curSlide = 0;
const maxSlide = slides.length;

/*const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px)';
slider.style.overflow = 'visible';
 */

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
  })
}

createDots();
const activationDot = function (slide) {
  document.querySelector(`.dots__dot[data-slide=${slide}]`).classList.add('dots__dot--active');
}

activationDot(0);
const goToSlide = function (slide) {
  slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const  nextSlide =function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  }
  else {
    curSlide++;
  }
  goToSlide(curSlide);
  activationDot();
}

const prevSlide = function () {
  if(curSlide === 0) {
    curSlide = maxSlide - 1;
  }
  else {
    curSlide--;
  }
  goToSlide(curSlide);
  activationDot();
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if(e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
})

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const {slide} = e.target.dataset;
    goToSlide(slide);
    activationDot(slide);
  }
})

/////////////////////////////////////////////////////////////////////////////////////////////
/*const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes)
console.log(h1.children)
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'blue';

//Selecting parent
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Selecting Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (e){
  if(e !== h1) {
    e.style.transform = 'scale(0.5)';
  }
})
/* bubbling events
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
  //e.stopPropagation()
})
//this key === currentTarget
document.querySelector('.nav').addEventListener('click', function (e){
  this.style.background = randomColor();
  console.log('NAV', e.target, e.currentTarget);
})
*/


// Events
/*
h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great1 You are reading the heading :D');
})

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great1 You are reading the heading :D');
  setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
}
h1.addEventListener('mouseenter', alertH1);


h1.onmouseenter = function (e) {
  alert('addEventListener: Great1 You are reading the heading :D');
  */


////////////////////////////////////////////////////////////////////////////////////////////
//LECTURE
/*
//TYPES OF ELEMENT SELECTORS
console.log(document.documentElement); // Selects the whole HTML elements
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header') // Single selector
const allSelections = document.querySelectorAll('.section') // multiple selector


//CREATING AND INSERTING ELEMENTS
//.insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML = "We use cookies for improved functionality and analytics<button class='btn btn--close-cookie'>Got it</button>";

//header.prepend(message); // Add element as first child of header element
//header.append(message); // ass elements as last child of header element
//header.append(message.cloneNode(true)) // elements in same messages in one element

header.before(message);
//header.after(message);

//DELETING ELEMENTS
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  //message.remove(); //recent
  message.parentElement.removeChild(message);
})

//Style JS
message.style.background = '#37383d';
message.style.width = '120%';
console.log(getComputedStyle(message).color); // get from styles list css
console.log(getComputedStyle(message).height);

message.style.height = (Number.parseFloat(getComputedStyle(message).height) +  10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');


//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

console.log(logo.src); //Absolute
console.log(logo.getAttribute('src')) //Relative
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'))

console.log(logo.className);

//data Attributes
console.log(logo.dataset.versionNumber) // dash to camelCase

// None Standard
console.log(logo.designer); //value undefined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Banklist');

//Classes
logo.classList.add('c', 'j', 'i') // can add multiple elements or attributes to class
logo.classList.remove()
logo.classList.toggle()
logo.classList.contains()
 */

//Event Listener
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML PARSED AND DOM TREE BUILT!', e);
})

window.addEventListener('load', function (e) {
  console.log('Page fully loaded!');
})

/* window.addEventListener('beforeunload', function (e){
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
}) */
