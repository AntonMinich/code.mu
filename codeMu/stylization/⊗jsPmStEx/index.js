let elem = document.querySelectorAll('.elem');
let button = document.querySelector('#button');
let clear = document.querySelector('#clear');

    button.addEventListener('click', function(){
        elem.forEach(el => {
            el.style.cssFloat = 'left'; 
            el.style.listStyleType = 'none';
        })
        clear.style.clear = 'both';
        
    })



