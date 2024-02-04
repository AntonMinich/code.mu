let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

func.call(elem, 'John', 'Smit');