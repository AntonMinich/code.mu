let elems = document.querySelectorAll('.elem');
elems.forEach((elem, index) => {
    elem.setAttribute('data-num', index + 1);
})
