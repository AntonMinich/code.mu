let elem = document.querySelector('#elem');
let check = document.querySelector('#check');
let uncheked = document.querySelector('#uncheked');
check.addEventListener('click', function(){
    elem.checked = true;
})

uncheked.addEventListener('click', function(){
    elem.checked = false;
})

let elem2 = document.querySelector('#elem2');
let btn = document.querySelector('#btn');
let parag = document.querySelector('#parag');

btn.addEventListener('click', function(){
    if (elem2.checked == true){
        parag.textContent = 'Привет';
    } else {
        parag.textContent = 'Пока';
    }
})