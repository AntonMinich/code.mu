let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func() {
 if (event.type == 'click') {
    elem.style.color = 'red';
} else {
    elem.style.color = 'green';
    }
}