let arr = [1, 2, 3, 4, 5];
let elem = document.getElementById('elem');

for (let item of arr) {
    let li = document.createElement('li');
    li.textContent = item;
    elem.appendChild(li);

    li.addEventListener('click', function(){
        alert(li.textContent);
    })

    li.addEventListener('click', function addElem(){
        li.textContent += '!';
        li.removeEventListener('click', addElem);

    })    

}
