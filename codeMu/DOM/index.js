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
// let button = document.querySelector('#button');
// button.addEventListener('dblclick', func);
// function func(){
// 	alert('это был dblclick');
// }

// let button2 = document.querySelector('#button2');
// button2.addEventListener('mouseover', func2);
// function func2(){
// 	alert('Спасибо, что навели');
// }

// let button3 = document.querySelector('#button3');
// button3.addEventListener('mouseout', func3);
// function func3(){
// 	alert ('Не уходи');
// }

// let button4 = document.querySelector('#button4');
// button4.addEventListener('mouseover', func2);
// button4.addEventListener('mouseout', func3);

// ⊗jsPmDmET
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	alert(elem.textContent);
// })


// let elem2 = document.querySelector('#elem2');
// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', function(){
// 	elem2.textContent = 'Новый текст абзаца';
// })


// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let button3 = document.querySelector('#button3');
// button3.addEventListener('click', function() {
// 	alert(Number(elem3.textContent) + Number(elem4.textContent));
// })


// let elem5 = document.querySelector('#elem5');
// let elem6 = document.querySelector('#elem6');
// let elem7 = document.querySelector('#elem7');
// let result = document.querySelector('#result');
// let button4 = document.querySelector('#button4');
// button4.addEventListener('click', function() {
// 	result.textContent = Number(elem5.textContent) + Number(elem6.textContent) + Number(elem7.textContent);
// })

// let elem8 = document.querySelector('#elem8');
// let button5 = document.querySelector('#button5');
// button5.addEventListener('click', function(){
// 	elem8.textContent = Number(elem8.textContent) + 1;
// })


// let elem9 = document.querySelector('#elem9');
// let button6 = document.querySelector('#button6');
// button6.addEventListener('click', function(){
// 	elem9.textContent = elem9.textContent + '!!!';
// })


// ⊗jsPmDmEH
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	console.log(elem.innerHTML);
// 	console.log(elem.textContent);
// })

// let elem1 = document.querySelector('#elem1');
// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function(){
// 	elem1.innerHTML = '<b>'+ elem1.textContent + '</b>';
// })

// ⊗jsPmDmAVP
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	alert(elem.type);
// })

// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', function(){
// 	elem.type = 'submit';
// })

// let elem = document.querySelector('#elem');
// let link = document.querySelector('#link');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	elem.textContent = link.href;
// })


// let link = document.querySelector('#link');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	link.textContent = link.textContent + ' (' + link.href + ')'
// })


// let img = document.querySelector('#img');
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	elem.textContent = img.src;
// })

// let img = document.querySelector('#img');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	img.width = 300;
// })

// let img = document.querySelector('#img');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	img.width *= 2;
// })

// let img1 = document.querySelector('#img1');
// let img2 = document.querySelector('#img2');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', function(){
// 	img1.src = './images/gomer.jpg';
// })
// button2.addEventListener('click', function(){
// 	img2.src = './images/gomer2.png'
// })

// ⊗jsPmDmTF
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	let text = 'Новый текст';
// 	elem.value = text;
// })


// let inputText = document.querySelector('#inputText');
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
// 	let inputValue = inputText.value;
// 	elem.textContent = inputValue;
// })\

// let number = document.querySelector('#number');
// let result = document.querySelector('#result');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	result.value = Math.pow(number.value, 2);
// })


// let in1 = document.querySelector('#in1');
// let in2 = document.querySelector('#in2');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	let number1 = in1.value;
// 	let number2 = in2.value;
// 	in1.value = number2;
// 	in2.value = number1;	
// })


// let in1 = document.querySelector('#in1');
// let in2 = document.querySelector('#in2');
// let in3 = document.querySelector('#in3');
// let in4 = document.querySelector('#in4');
// let in5 = document.querySelector('#in5');
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function(){
// 	elem.textContent = elem.textContent + ((Number(in1.value) + Number(in2.value) + Number(in3.value) + Number(in4.value) + Number(in5.value)) / 5)
// })



// ⊗jsPmDmTFF
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function(){
// 	elem.value = 1;
// })

// elem.addEventListener('blur', function(){
// 	elem.value = 2;
// })


// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function(){
// 	elem.value = Math.sqrt(elem.value);
// })



// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function(){
// 	elem.value = '';
// })


// ⊗jsPmDmEA
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	alert(elem.className);
// })


// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	elem.className = 'newClass';
// 	alert(elem.className);
// })


// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	let array = [];
// 	array.push(elem.className);
// 	alert(array.join(' ').split(' '));
// })

//  ⊗jsPmDmChn 
// console.log(document.querySelector('#image').src);


// ⊗jsPmDmChA
// let image = document.querySelector('#image');
// console.log(image.width);
// console.log(image.height);
// console.log(image.src)


// ⊗jsPmDmThs
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function(){
// 	this.value = 1;
// })

// elem.addEventListener('blur', function(){
// 	this.value = 2;
// })


// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	this.textContent = Number(this.textContent) + 1;
// })


// ⊗jsPmDmThsA
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

// function func(){
//     this.textContent = this.textContent + '!!!';
// }


// let in1 = document.querySelector('#in1');
// let in2 = document.querySelector('#in2');
// let in3 = document.querySelector('#in3');
// in1.addEventListener('blur', func2);
// in2.addEventListener('blur', func2);
// in3.addEventListener('blur', func2);
// function func2(){
//     this.value = Math.pow(this.value, 2);
// }


// ⊗jsPmDmEGG

let elem = document.querySelectorAll('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function(){
    for (let el of elem) {
        el.textContent = 'text';
    }
})

let elem1 = document.querySelectorAll('#elem1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function(){
    let count = 1;
    for(let el of elem1) {
        el.textContent = el.textContent + count;
        count++;
    }
})


let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let number3 = document.querySelector('#number3');
let result = document.querySelector('#result');
let sum = document.querySelector('#sum');
sum.addEventListener('click', function(){
    result.textContent = +number1.value + +number2.value + +number3.value;
})