let elem = document.getElementById('elem');
document.addEventListener('click', function(event){
 if (event.target.tagName =='LI') {
   event.target.textContent += '!';
 } else {
    console.log(event.target.tagName);
 }
 console.log(event.target.tagName);
})
