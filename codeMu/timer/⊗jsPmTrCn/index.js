let num = 100;
setInterval(() => console.log(--num), 500);
// 
setInterval(function(){
    console.log(++num);
}, 1000);