let elem = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'item';
elem.appendChild(li);


let li2 = document.createElement('li');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    li2.textContent = 'item';
    elem.appendChild(li2);    
})