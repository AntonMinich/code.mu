let elem = document.getElementsByClassName('www');
let arr = [...elem];

arr.forEach(el => {
    el.classList.add('colored');
})