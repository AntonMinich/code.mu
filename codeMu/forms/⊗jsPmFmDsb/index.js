let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    elem.disabled=true;
})


let elem2 = document.querySelector('#elem2');
let block = document.querySelector('#block');
let unlock = document.querySelector('#unlock');
block.addEventListener('click', function(){
    elem2.disabled=true;
})

unlock.addEventListener('click', function(){
    elem2.disabled=false;
})

let elem3 = document.querySelector('#elem3');
let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function(){
    if (elem3.disabled == true) {
        alert('input block');
    } else {
        alert('input unlock');
    }
})