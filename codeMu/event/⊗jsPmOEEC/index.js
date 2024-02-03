let elem = document.querySelector('#elem');
document.addEventListener('mousemove', function(event){
    elem.innerHTML = event.clientX + ' : ' + event.clientY;
})


let elem2 = document.getElementById('elem2');
document.addEventListener('mousemove', function(event){
    elem2.innerHTML = event.pageX + ' : ' + event.pageY;
})