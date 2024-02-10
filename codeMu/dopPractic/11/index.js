let parent = document.querySelector('#parent');

let elements = document.querySelectorAll('#parent li');

for (let elem of elements) {
    let link = document.createElement('a');
    link.href = '';
    link.textContent = ' remove';
    elem.appendChild(link);
    
    elem.addEventListener('click', function(event){
        elem.remove();
        event.preventDefault();
    })

}
