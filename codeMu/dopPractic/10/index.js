let parent = document.getElementById('parent');
let elem = document.getElementById('elem');
let remove = document.getElementById('linkRemove');

remove.addEventListener('click', function(){
    elem.remove();
    event.preventDefault();
})