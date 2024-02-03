let elem1 = document.getElementById('elem1');
elem1.addEventListener('keypress', function(event){
    console.log(event.key);
    console.log(event.code);
})


let elem2 = document.getElementById('elem2');
let text = document.getElementById('text');
elem2.addEventListener('keypress', function(event){
    if(event.key == 'Enter') {
        text.textContent = elem2.value;
        elem2.value = '';
    }
})