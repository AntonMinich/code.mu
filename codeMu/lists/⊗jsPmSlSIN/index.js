let select = document.querySelector('#select');
let inp = document.querySelector('#inp');
inp.addEventListener('blur', function(){
    select.selectedIndex = inp.value;
})


let dates = new Date();
document.querySelector('#select2').selectedIndex = dates.getDay() - 1;
