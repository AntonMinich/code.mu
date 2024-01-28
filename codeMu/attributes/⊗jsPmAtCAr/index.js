let elem = document.querySelector('#elem');
let count = 0;
let elems = elem.classList;
for (let el of elems) {
    count ++;
}
console.log(count);


let elem2 = document.querySelector('#elem2');
let elems2 = elem2.classList;
for (let el2 of elems2) {
    console.log(el2);
}