let select = document.querySelector('#select');
for (let option of select) {
    option.textContent = option.textContent + ' ' + option.value;
}