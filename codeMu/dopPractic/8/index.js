let table = document.getElementById('table');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let tds = document.querySelectorAll('#table td');
    for (let td of tds) {
        td.textContent = +td.textContent + 1;
    }
})