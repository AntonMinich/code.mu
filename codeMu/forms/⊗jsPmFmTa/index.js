let elem = document.querySelector('#elem');
let area = document.querySelector('#area');
area.addEventListener('blur', function(){
    elem.textContent = area.value;
})
