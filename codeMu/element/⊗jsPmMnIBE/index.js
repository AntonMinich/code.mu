let elem = document.getElementById('elem');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let add = document.createElement('li');
    elem.appendChild(add);

    add.addEventListener('click', function(){
        add.textContent += '!';
    })
})

