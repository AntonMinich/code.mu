let elem = document.querySelector('#elem');
elem.addEventListener('input', function(){
    if (elem.value.length > 5) {
        alert(elem.value.length);
    }
})

let elem2 = document.querySelector('#elem2');
let parag  = document.querySelector('#parag');
elem2.addEventListener('input', function(){
    let max = 5;
    if (elem2.value.length <= 5) {
        parag.textContent = 'Осталось ввести: ' + (max - elem2.value.length);
    } else {
        parag.textContent = 'Превышает на: ' + (elem2.value.length - max);
    }
})