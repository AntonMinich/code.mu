let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    let self = this;
	setInterval(function() {
		console.log(self.value); 
	}, 1000);
});

let elem2 = document.querySelector('#elem2');

elem2.addEventListener('click', function() {
    let self = this;
	setInterval(function() {
		self.value = Number(self.value) + 1;
	}, 1000);
});