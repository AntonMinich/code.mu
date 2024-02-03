let links = document.querySelectorAll('.link');
for(let link of links) {
    link.addEventListener('click', function func(event){
           event.preventDefault();
           link.textContent = link.textContent + ' ' + link.href;
   })
}


let elem = document.querySelector('#elem');
let link2 = document.querySelector('.link2');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

link2.addEventListener('click', function(event){
    event.preventDefault();
    elem.textContent = +input1.value + +input2.value;
})
   
    