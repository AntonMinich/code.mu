let arr = [1, 2, 3, 4, 5];

let parent = document.querySelector('#parent');

for (let elem of arr) {
	let p = document.createElement('p');
	p.textContent = elem;
	
	parent.appendChild(p);

    p.addEventListener('click', function(){
        p.textContent = +p.textContent + 1;
    })
}

