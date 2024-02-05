let num = 100;
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let result = document.querySelector('#result');
let timerId;
btn1.addEventListener('click', function func(){
    timerId = setInterval(function(){
        result.textContent = --num;
        if(result.textContent == 0) {
            clearInterval(timerId);
        }
    }, 1000)
    
})

btn2.addEventListener('click', function func2(){
    clearInterval(timerId);
})


// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId2
// start.addEventListener('click', function func() {
// 	timerId2 = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
//     this.removeEventListener('click', func);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId2);
// });

let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId2;
start.addEventListener('click', function func() {
	timerId2 = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
    this.removeEventListener('click', func);
});

stop.addEventListener('click', function() {
	clearInterval(timerId2);
});