let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'new';
parent.insertBefore(li, elem);
li.addEventListener('click', function(){
    li.textContent += '!';
})