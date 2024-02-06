let elem = document.getElementById('elem');
let result = document.getElementById('result');

for (let i = 0; i < 5; i++) {
    let inp = document.createElement('input');
    inp.addEventListener('blur', function(){
        result.textContent += inp.value + ' ';
    })
    elem.appendChild(inp);
}