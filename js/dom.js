// get element by tag name example //

const listOfH1 = document.getElementsByTagName('h1');
for (h1 of listOfH1) {
    h1.style.backgroundColor = 'steelblue';
    h1.style.color = 'white';
    h1.style.border = '2px solid pink';
    h1.style.textAlign = 'center';
    h1.style.padding = '10px';
}
// get element by id example //

// const title = document.getElementById('place-title');
// title.style.textAlign = 'center';
// title.style.fontSize = '2rem';

//get element by class name example//

// const classOfPlaces = document.getElementsByClassName('place-item');
// for (place of classOfPlaces) {
//     place.style.fontSize = '1.5rem';
// }

// to select first item from whole same class, or tag we can use queryselector ...example //
// const firstLi = document.querySelector('li');
// firstLi.innerText = 'Balikhola';

// to select multiple id or class or tag together we can use queryselector All //

const allItem = document.querySelectorAll('.place-item,.food-item, .game-item');
for (const item of allItem) {
    item.style.color = 'black';
    item.style.fontSize = '1.5rem';
}

const allHeadings = document.querySelectorAll('#game-title,#food-title,#place-title');

for (const heading of allHeadings) {
    heading.style.textAlign = 'center';
    heading.style.color = 'blue';
    heading.style.borderBottom = '3px solid violet'
}


//---------- get attribute , set attribute, innerText, innerHtml -----------//

const pageTitle = document.getElementById('page-title');
// console.log(pageTitle.getAttribute('id'));
// console.log(pageTitle.getAttribute('class'));

// set attribute //

pageTitle.setAttribute('title', 'set by js')

// add class //
pageTitle.classList.add('new-class');

// remove class //
pageTitle.classList.remove('firsth1', 'head-title');

//innerText//

// pageTitle.innerText = 'This Title was chaged by JS'

// innerHtml //

// const header = document.getElementsByClassName('header');
// header[2].innerHTML = '<h3>Added by Js</h3>'

// custom style by get an element 
const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid tomato'
    section.style.backgroundColor = 'aqua'
}


// childnotes, htmlcollection, parentnode, childnote, create element.

// childNOdes 

const foodContainer = document.getElementById('food-container');
const childOfFood = (foodContainer.childNodes);
const foodContainerUl = (childOfFood[3].childNodes);


// parentNode 
const foodLi = document.querySelector('#food-container li');
console.log(foodLi.parentNode);

// create element 

const foodUl = document.querySelector('#food-container ul');


// appent child to an element

const extraLiofFood = document.createElement('li');
extraLiofFood.innerText = ('This is new li');

foodUl.appendChild(extraLiofFood);



