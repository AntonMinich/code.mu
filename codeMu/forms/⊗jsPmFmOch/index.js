let incomingText = document.getElementById('incomingText');
let outputText = document.getElementById('outputText');
incomingText.addEventListener('change', function(){
    outputText.textContent = incomingText.value;
})



let state = document.querySelector('#state');
let outputState = document.querySelector('#outputState');
state.addEventListener('change', function(){
    outputState.textContent = state.checked;
})



let characters = document.querySelector('#characters');
characters.addEventListener('change', function(){
    if (characters.value.length >=5) {
        characters.classList.add('green');
        characters.classList.toggle('red');
    } else {
        characters.classList.add('red');
        characters.classList.toggle('green');
    }
})