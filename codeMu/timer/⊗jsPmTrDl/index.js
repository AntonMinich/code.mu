let result = document.querySelector('#result');
setTimeout(function(){
    result.textContent = 'Hello world!';
},5000)


let i = 0;
function timer(){
    setTimeout(function(){
        console.log(++i);
        timer();
    }, (i+1) * 1000)
}
timer();

