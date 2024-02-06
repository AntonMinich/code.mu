let elem = document.querySelector('#elem');
let liStart = document.createElement('li');
let liEnd = document.createElement('li');
liStart.textContent = 'Start';
liEnd.textContent = 'End';
elem.prepend(liStart);
elem.append(liEnd);