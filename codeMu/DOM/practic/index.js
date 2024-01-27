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



let input10 = document.querySelector('#input10');
input10.addEventListener('blur', function(){
    let result = input10.value.split('').some(elem => elem == 3);
    alert(result);
})

let elem11 = document.querySelectorAll('#elem11');
let button11 = document.querySelector('#button11');
button11.addEventListener('click', function(){
    let count = 1;
    for (let elem of elem11){
        elem.textContent = count++;
    }
})


let elem12 = document.querySelectorAll('#elem12');
let button12 = document.querySelector('#button12');
button12.addEventListener('click', function(){
    for (let elem of elem12){
        elem.textContent += ' ' + '(' + elem.getAttribute('href') + ')';
    }
})

let elem13 = document.querySelectorAll('.elem13');
let button13 = document.querySelector('#button13');

button13.addEventListener('click', function () {
    for (let elem of elem13) {
        if (elem.getAttribute('href').startsWith('http://')) {
            elem.innerHTML += ' &rarr;';
        }
    }
});


let elem14 = document.querySelectorAll('.elem14');
for(let elem of elem14) {
    elem.addEventListener('click', function(){
        this.textContent = Math.pow(this.textContent, 2);
})
}


let elem15 = document.querySelector('#elem15');
elem15.addEventListener('blur', function(){
    let arr = elem15.value.split('.');
    let date = new Date(arr[2], arr[1]-1, arr[0]);
    alert(date.getDay());
})


let elem16 = document.querySelector('#elem16');
let button161 = document.querySelector('#btn161');
let button162 = document.querySelector('#btn162');

button161.addEventListener('click', function(){
    elem16.value = Number(elem16.value) + Number(1);
})

button162.addEventListener('click', function func(){
    if (elem16.value == 0) {
        // button162.removeEventListener('click', func);
        elem16.value = Number(elem16.value)
    } else {
        elem16.value = Number(elem16.value) - Number(1);
    }
})



let input17 = document.querySelector('#input17');
let clack = document.querySelectorAll('.clack');
for (let elem of clack){
    elem.addEventListener('click', function(){
        input17.value = Number(1) + +input17.value;
    })
}
    
let elem18 = document.querySelectorAll('.elem18');
for (let elem of elem18) {
    elem.addEventListener('click', function(){
        elem.textContent = elem.textContent.slice(0,10) + '...';
    })
}

let elem19 = document.querySelector('#elem19');
let button19 = document.querySelector('#button19');
button19.addEventListener('click', function(){
    let random = Math.round(Math.random()*Math.pow(10000,2));
    elem19.value = random;
})


let elem20 = document.querySelector('#elem20');
let button20 = document.querySelector('#button20');
button20.addEventListener('click', function(){
    let arr = elem20.value.split('');
    let newArr = arr.sort().join('');
    elem20.value = newArr;
})

let elem21 = document.querySelector('#elem21');
let p21 = document.querySelector('#p21');
let button21 = document.querySelector('#button21');

button21.addEventListener('click', function(){
    p21.textContent = (elem21.value - 32) * 5/9;
})


let elem22 = document.querySelector('#elem22');
let p22 = document.querySelector('#p22');
let button22 = document.querySelector('#button22');
button22.addEventListener('click', function(){
    let number = elem22.value;
    function factorial(number) {
        return (number != 1) ? number * factorial(number - 1) : 1;
      }
        p22.textContent = factorial(number);
})
