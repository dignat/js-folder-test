
function createDiv() {
    const div = document.createElement('div');
    div.id ='custom';
    const paras = [];
    for (let i = 0; i < 100; i++) {
        paras.push(document.createElement('p'))
    }
    for (let i = 0; i < paras.length; i++) {
        const text = document.createTextNode(i + 1);
        paras[i].appendChild(text);
        div.appendChild(paras[i]);
    }
    document.body.appendChild(div);
    console.log('in the function', document.getElementById('#custom'))
}
 
createDiv()