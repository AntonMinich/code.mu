let div = document.querySelector('div');

div.addEventListener('click', function(event) {
	if (event.target.matches('div')) {
        alert('Сработало в диве');
    } else if (event.target.matches('ul')) {
        alert('Сработало в ul'); 
        console.log(event.target.textContent);
    } else if (event.target.matches('li')) {
        alert('сработало в li');
        event.target.textContent += '!';
    }

});