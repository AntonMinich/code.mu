let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    for(let i = 0; i <= 9; i++) {
        let li = document.createElement('li');
        elem.appendChild(li);
    }
    

})