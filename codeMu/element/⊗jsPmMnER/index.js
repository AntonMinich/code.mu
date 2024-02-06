let elems = document.querySelectorAll('li');
for (let elem of elems){
    elem.addEventListener('click', function(){
        elem.remove();
    })
}


let parent = document.querySelector('#parent');
let btn = document.querySelector('#button');
btn.addEventListener('click', function(){
    let lastLi = parent.lastElementChild;
    if (lastLi) {
        lastLi.remove();
    }
})