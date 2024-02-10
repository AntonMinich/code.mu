let table = document.querySelector('#table');
let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn.addEventListener('click', function(){
    let tr = document.createElement('tr');

    for (let i = 0; i <= 2; i++){
        let td = document.createElement('td');
        td.textContent = 'Ячейка' + (i+1);
        tr.appendChild(td);

    }
    table.appendChild(tr);
})

btn2.addEventListener('click', function(){
    let trs = document.querySelectorAll('#table tr');
    for (let tr of trs) {
        let td = document.createElement('td');
        td.textContent = '!';
        tr.appendChild(td);
    }
})


btn3.addEventListener('click', function(){
    let tr = document.createElement('tr');

    for (let i = 0; i <= 2; i++){
        let td = document.createElement('td');
        td.textContent = 'Ячейка' + (i+1);
        tr.appendChild(td);

    }
    table.appendChild(tr);

    let trs = document.querySelectorAll('#table tr');
    for (let tr of trs) {
        let td = document.createElement('td');
        td.textContent = '!';
        tr.appendChild(td);
    }


})