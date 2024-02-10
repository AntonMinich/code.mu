let parent = document.getElementById('parent');
let button = document.getElementById('button');


button.addEventListener('click', function(){
    let li = document.createElement('li');
    li.textContent = +parent.lastElementChild.textContent + 1;
    parent.appendChild(li);

    parent.addEventListener('click', function(event){
       if(event.target.tagName == 'LI') {
        event.target.remove();
       }
    })
    
})

