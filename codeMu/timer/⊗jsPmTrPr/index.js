let btn1 = document.querySelector('#btn1');
let result1 = document.querySelector('#result1');
let timerId;

btn1.addEventListener('click', function func(){
    timerId = setInterval(function(){
        result1.textContent = +result1.textContent + 1;
        if (result1.textContent == 15) {
            clearInterval(timerId);
        }
    }, 500)
    this.removeEventListener('click', func);
})

// 


let btn2 = document.querySelector('#btn2');
let result2 = document.querySelector('#result2');
let timerId2;

btn2.addEventListener('click', function func(){
    timerId2 =  setInterval(function(){
        result2.textContent = +result2.textContent - 1;
        if (result2.textContent == 0) {
            clearInterval(timerId2);
        }
    }, 1000);
    this.removeEventListener('click', func);
})

// 


let elem3 = document.querySelector('#elem3');
let timerId3 = setInterval(function(){
    elem3.value = Math.sqrt(elem3.value);
    if (elem3.value < 3) {
        clearInterval(timerId3);
    }
},1000)


// 

let elem4 = document.querySelector('#elem4');
let result4 = document.querySelector('#result4');
let timerId4
elem4.addEventListener('blur', function(){
    result4.textContent = elem4.value;
    timerId4 = setInterval(function(){
        result4.textContent = +result4.textContent - 1;
        if(result4.textContent == 0) {
            clearInterval(timerId4);
        }
    }, 1000)
})


// 

let start5 = document.querySelector('#start5');
let stop5 = document.querySelector('#stop5');
let result5 = document.querySelector('#result5');
let timerId5

start5.addEventListener('click', function(){
    result5.textContent = 0;
    timerId5 = setInterval(function(){
        result5.textContent = +result5.textContent + 1;
    }, 1000);
})

stop5.addEventListener('click', function(){
    clearInterval(timerId5);
})


// 


let result7 = document.querySelector('#result7');
let colorRed = true;
setInterval(function(){
    if(!colorRed) {
        result7.style.color = 'green';
    } else {
        result7.style.color = 'red';
    }
    colorRed = !colorRed;
},1000)


// 


let result8 = document.querySelector('#result8');

setInterval(function(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds()
    result8.textContent =  h + ':' + m + ':' + s;
},1000)