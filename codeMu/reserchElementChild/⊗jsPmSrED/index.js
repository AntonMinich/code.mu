let elem = document.querySelector('#elem');
let firstChild = elem.firstElementChild;
firstChild.classList.add('colored');

// 


let lastChild = elem.lastElementChild;
lastChild.classList.add('colored');

// let children = elem.children;
// for (let elem of children) {
//     elem.textContent += '!!!';
// }

let children = [...elem.children];
children.forEach(elem => {
    elem.textContent += '???';
})