let elem = document.querySelector('#elem');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', function(){
    elem.classList.toggle('decoration');
})

btn2.addEventListener('click', function(){
    elem.classList.toggle('weigth');
})

btn3.addEventListener('click', function(){
    elem.classList.toggle('colored');
})