// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const bodyChildren= body.children
console.log(bodyChildren[0])


// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const bodyEl = ul.parentElement.parentElement

console.log(bodyEl)

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const prevSibElem = p.previousElementSibling

const allItems = prevSibElem.children
const thirdItem = allItems[2]

console.log(thirdItem)
