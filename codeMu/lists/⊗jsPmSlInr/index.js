let select = document.querySelector('#select');
let parag = document.querySelector('#parag');
let button = document.querySelector('#button');
button.addEventListener('click', function(){
    parag.textContent = select.value;
})



let select2 = document.querySelector('#select2');
select2.addEventListener('change', function(){
    if ((select2.value % 4 == 0 && select2.value % 100 != 0) || select2.value % 400 == 0) {
        alert ('Високосный год');
    } else {
        alert ('Обычный год');
    }
})