let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block = document.querySelector('#block');

button.addEventListener('click', function(){
    block.classList.add('active');
    event.stopPropagation();
})

parent.addEventListener('click', function(event){
    block.classList.remove('active');    
})