let table = document.querySelector('#table');
for (let i = 0; i < 5; i++) {
    let tr = document.createElement('tr'); 

    for (let i = 0; i < 10; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = 'x';
    }

    table.appendChild(tr);
}