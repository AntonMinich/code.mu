let num = 10;
let timerId = setInterval(function(){
    console.log(++num);
    if (num >= 15) {
        clearInterval(timerId);
    }
}, 1000)

