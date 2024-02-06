let elem = document.querySelector('#elem');
console.log(elem.matches('div.www'));

let elem2 = document.querySelector('#elem2');
console.log(elem2.matches('p'));


let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let contains = elem3.contains(elem4)
console.log(contains);