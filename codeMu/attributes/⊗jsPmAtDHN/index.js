let elem = document.querySelector('#elem');
elem.addEventListener('click', function func(){
    elem.textContent += '-' + elem.dataset.productPrice * elem.dataset.productAmount;
    elem.removeEventListener('click', func);
})