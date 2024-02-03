let radios = document.querySelectorAll("input[type='radio']");
let button = document.querySelector('#button');
let parag = document.querySelector('#parag');
button.addEventListener('click', function(){
    for (let radio of radios) {
        if(radio.checked) {
            parag.textContent = radio.value;
        }
    }
})