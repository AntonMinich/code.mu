let elem = document.querySelector('#elem'); 
let p = document.createElement('p');
p.textContent = '!!!';
elem.insertAdjacentElement('beforeBegin', p);

// elem.insertAdjacentElement('afterEnd', p);

// elem.insertAdjacentElement('afterBegin', p);

// elem.insertAdjacentElement('beforeend', p);