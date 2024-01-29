let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
    console.log(node.textContent);
}

let elem2 = document.querySelector('#elem2');
for (let node of elem2.childNodes) {
    if (node.nodeType == 3 || node.nodeType == 8) {
        console.log(node.textContent);
    }
}


