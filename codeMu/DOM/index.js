// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// console.log(elem1);
// console.log(elem2);
// console.log(elem3);


// let elem4 = document.querySelector('#block p');
// console.log(elem4);

// let elem5 = document.querySelector('.block p');
// console.log(elem5);

// let elem6 = document.querySelector('.www');
// console.log(elem6);

// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func(){
//     alert('!!!');
// }


// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function() {
//     alert(1);
// })

// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', function(){
//     alert (2);
// })

// let button3 = document.querySelector('#button3');
// button3.addEventListener('click', function(){
//     alert(3);
// })


// ⊗jsPmDmNEH
// let button4 = document.querySelector('#button4');
// let button5 = document.querySelector('#button5');

// button4.addEventListener('click', func1);
// function func1() {
// 	alert(1);
// }

// button5.addEventListener('click', func2);

// function func2() {
// 	alert(2);
// }



// ⊗jsPmDmMEH
// function func() {
// 	alert('message');
// }

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');

// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);


// ⊗jsPmDmSH
// function func1() {
// 	alert('1');
// }

// function func2() {
// 	alert('2');
// }

// function func3() {
// 	alert('3');
// }
// let elem6 = document.querySelector('#elem');
// elem6.addEventListener('click', func1);
// elem6.addEventListener('click', func2);
// elem6.addEventListener('click', func3);


// ⊗jsPmDmDEH
let button = document.querySelector('#button');
button.addEventListener('dblclick', func);
function func(){
	alert('это был dblclick');
}

let button2 = document.querySelector('#button2');
button2.addEventListener('mouseover', func2);
function func2(){
	alert('Спасибо, что навели');
}

let button3 = document.querySelector('#button3');
button3.addEventListener('mouseout', func3);
function func3(){
	alert ('Не уходи');
}

let button4 = document.querySelector('#button4');
button4.addEventListener('mouseover', func2);
button4.addEventListener('mouseout', func3);