let elem = document.querySelector('#elem');
let previousSibling = elem.previousElementSibling;
previousSibling.textContent += '!';

let nextSibling = elem.nextElementSibling;
nextSibling.textContent += '&';

let nextNextSibling = nextSibling.nextElementSibling;
nextNextSibling.textContent += '!';

let textPrevious = previousSibling.textContent;
let textNext = nextSibling.textContent;


previousSibling.textContent = textNext;
nextSibling.textContent = textPrevious;