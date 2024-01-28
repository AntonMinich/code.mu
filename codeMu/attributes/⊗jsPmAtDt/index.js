let elem = document.querySelector('#elem');
elem.addEventListener('click', function(){
    elem.textContent += '-' + elem.dataset.text;
})

// 

let task2 = document.querySelectorAll('.task2');
for (let elem of task2) {
    elem.addEventListener('click', function(){
        this.textContent += this.dataset.num;
    })
}

// 

let btn3 = document.querySelector('#btn3');
let button3 = document.querySelector('#button3');
btn3.addEventListener('click', function(){
    btn3.setAttribute('data-count', Number(btn3.getAttribute('data-count')) + 1);
})

button3.addEventListener('click', function(){
    alert(btn3.dataset.count);
})

// 

let elem4 = document.querySelector('#elem4');
elem4.addEventListener('blur', function(){
    let lengthStr = elem4.value.length;
    if (lengthStr > elem4.dataset.length) {
        alert('количество введенных символов не совпадает с заданным');
    }
})

// 

let elem5 = document.querySelector('#elem5');
elem5.addEventListener('blur', function(){
    let valueLength = elem5.value.length;
    if (valueLength < elem5.dataset.min || valueLength > elem5.dataset.max) {
        alert('Значение выходит за пределы заданных требований');
    }
})