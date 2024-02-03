let select = document.querySelector('#select');
for (let option of select){
    if (option.selected) {
        option.text += '!';
    }
}