let elem = document.getElementById('elem');
elem.addEventListener('click', function(event){
    if (event.altKey) {
        elem.style.color = 'red';
    } 
})


let elem2 = document.querySelector('#elem2');
elem2.addEventListener('click', function(event){
    if (event.target.tagName == 'LI') {
        if (event.ctrlKey) {
            event.target.textContent += 1;
        } else if (event.shiftKey) {
            event.target.textContent += 2;
        }
    }
})