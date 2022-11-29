// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const cta = document.createElement('a')
const aTextNode = document.createTextNode("Buy Now!");
cta.appendChild(aTextNode);
const main = document.querySelector('main');
const pElem = document.querySelector('p')
main.appendChild(cta);


// Access (read) the data-color attribute of the <img>,
// log to the console

const carImg = document.getElementsByTagName('img')[0];
const imgColor = carImg.getAttribute('data-color');
console.log(imgColor); // prints 'blue' at the console. 


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const unorderdList = document.querySelector('ul');
const listitems = unorderdList.children;

listitems[2].className = "highlight";


//=========== Other way to solve it ------------------------------------------
//const liElems = document.querySelectorAll('ul>li')[2].className = 'highlight';

/*
//const listElem = document.querySelectorAll('ul')
//const secondItem = liElem.item(2);
//secondItem.className += "highlight";
*/


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const parElem = document.querySelectorAll('p')
console.log(parElem)
main.removeChild(Array.from(parElem)[0]);

