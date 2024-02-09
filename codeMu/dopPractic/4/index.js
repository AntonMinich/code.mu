let table = document.querySelector('#table');
let x = 2;
for (let i = 0; i < 5; i++) {
    let tr = document.createElement('tr');
    for(let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        td.textContent = x;
        if (x % 2 == 0) {
            x += 2;
        }
        
        
        tr.appendChild(td);
    }
    table.appendChild(tr);
}