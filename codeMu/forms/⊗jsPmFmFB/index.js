let elem = document.querySelector('#elem');
let elem2 = document.querySelector('#elem2');
elem.addEventListener('input', function(){
    if (elem.value.length >= 2) {
       elem.blur();
       elem2.focus();
    }
})

elem2.addEventListener('input', function(){
    if(elem2.value.length >= 2) {
        elem2.blur();
       }
})