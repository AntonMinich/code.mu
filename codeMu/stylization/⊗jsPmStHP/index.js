let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function(){
    elem.style.fontSize = '30px';
    elem.style.borderTop = 'solid';
    elem.style.backgroundColor = 'green';
})