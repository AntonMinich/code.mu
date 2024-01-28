let elem = document.getElementsByTagName('li');
for (let el of elem){
    el.textContent = 'Произведена замена текста';
    el.classList.add('colored');
}
