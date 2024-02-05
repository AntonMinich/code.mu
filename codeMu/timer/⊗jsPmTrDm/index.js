let elem = document.querySelector('#elem');

let timerId = setInterval(function(){
    elem.value = Number(elem.value) - 1;
    if (elem.value == 5) {
        clearInterval(timerId);
    }
}, 1000);