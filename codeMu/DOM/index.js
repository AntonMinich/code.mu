let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
console.log(elem1);
console.log(elem2);
console.log(elem3);


let elem4 = document.querySelector('#block p');
console.log(elem4);

let elem5 = document.querySelector('.block p');
console.log(elem5);

let elem6 = document.querySelector('.www');
console.log(elem6);

let button = document.querySelector('#button');
button.addEventListener('click', function(){
    alert('!!!');
})

let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
    alert(1);
})

let button2 = document.querySelector('#button2');
button2.addEventListener('click', function(){
    alert (2);
})

let button3 = document.querySelector('#button3');
button3.addEventListener('click', function(){
    alert(3);
})