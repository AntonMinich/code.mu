let list   = document.querySelector('ul');
list.addEventListener('click', function(event) {
	let li = event.target.closest('li');
	
	if (li) {
		li.textContent = li.textContent + '!';
	}
});