let select = document.querySelector('#select');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    console.log(select[select.selectedIndex].textContent);
})


let select2 = document.querySelector('#select2');
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function(){
    select2[select2.selectedIndex].textContent += '!';
})