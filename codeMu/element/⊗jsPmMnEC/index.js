let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    let clone = elem.cloneNode(true);
    elem.insertAdjacentElement("afterend", clone);
})