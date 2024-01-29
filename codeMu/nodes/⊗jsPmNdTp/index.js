let elem = document.getElementById('elem');
for (let node of elem.childNodes){
    if (node.nodeType == 1 || node.nodeType == 3) {
        console.log(node);
    }
}