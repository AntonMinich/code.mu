let input1 = document.querySelector('#input1');
let elem1 = document.querySelector('#elem1');
input1.addEventListener('blur', function(){
    elem1.textContent = input1.value;
})


let input2 = document.querySelectorAll('#input2');
let elem2 = document.querySelector('#elem2');
let button = document.querySelector('#btn2');
button.addEventListener('click', function(){
    let sum = 0;
    for (let in2 of input2) {
        sum += +in2.value;
    }
    elem2.textContent = sum;
   
})


let input3 = document.querySelector('#input3');
input3.addEventListener('blur', function(){
    let arr = input3.value.split('');
    let sum = 0;
    for (let elem of arr) {
        sum += +elem;
    }
    alert(sum);
})


let input4 = document.querySelector('#input4');
input4.addEventListener('blur', function(){
    let arr = input4.value.split(', ');
    let sum = 0;
    for (let elem of arr) {
        sum += +elem;
    }
    let result = sum / arr.length;
    alert(result);
})

let input5 = document.querySelector('#input5');
let input51 = document.querySelector('#input51');
let input52 = document.querySelector('#input52');
let input53 = document.querySelector('#input53');

input5.addEventListener('blur', function(){
    let arr = input5.value.split(' ');
    input51.value = arr[0];
    input52.value = arr[1];
    input53.value = arr[2];
})


let input6 = document.querySelector('#input6');
// input6.addEventListener('blur', function(){
//     let arr = input6.value.split(' ');
//     let newArr = [];
//     for(let elem of arr) {
//         let item = elem.split('');
//         item[0] = item[0].toUpperCase();
//         newArr.push(item.join(''));
//     }
//     input6.value = newArr.join(' ');
// })

input6.addEventListener('blur', function(){
    input6.value = input6.value.split(' ')
    .map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
    .join(' ');
})

let input7 = document.querySelector('#input7');
input7.addEventListener('blur', function(){
    let count = 0;
    let arr = input7.value.split(' ')
    .map(elem => elem.length > 1 ? count++ : false);
    alert(count);
})



let input8 = document.querySelector('#input8');
input8.addEventListener('blur', function(){
    input8.value = input8.value
    .split('.')
    .reverse()
    .join('-')
})

let input9 = document.querySelector('#input9');
let button9 = document.querySelector('#button9');
button9.addEventListener('click', function(){
    input9.value = input9.value.toLowerCase();
    if (input9.value === input9.value.split('').reverse().join('')) {
        input9.value = 'Палиндром';
    } else {
        input9.value = 'Не палиндром'
    }
})