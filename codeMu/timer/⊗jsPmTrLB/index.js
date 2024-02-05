let btn = document.querySelector('#btn');
let result = document.querySelector('#result');
let num = 100;
btn.addEventListener('click', function(){
    let timerId = setInterval(function(){
       result.textContent = result.textContent - 1;
       if (result.textContent == 0) {
        clearInterval(timerId);
        result.textContent = 'Отсчет окончен';
       }
    })
}, 500);