let textarea = document.querySelector('#textarea');
let div = document.querySelector('#div');

textarea.addEventListener('blur', function() {
	div.textContent = textarea.value;
});




let checkbox = document.querySelector('#checkbox');
let button = document.querySelector('#button');
let div2 = document.querySelector('#div2');

button.addEventListener('click', function() {
	if (checkbox.checked) {
		div2.textContent = '111';
	} else {
		div2.textContent = '222';
	}
});



let checkbox2 = document.querySelector('[type="checkbox"]');
let button2 = document.querySelector('#button2');

button2.addEventListener('click', function() {
	if (checkbox2.checked == true) {
		alert('+++');
	} else {
		alert('---');
	}
});