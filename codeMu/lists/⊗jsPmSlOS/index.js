let select = document.querySelector('#select');
let btn = document.querySelector('#btn');
let option = select[2];
btn.addEventListener('click', function(){
    option.setAttribute('selected', 'true');
})