// will prevent executing if already called
const once = (func) => {
    let ran = false;
    let result;

    if (ran) {return result;}
    result = func.apply(this, arguments);
    ran = false;
    return result;
}

// apply it

function reuqestSomeData() {
//
}
// create a version of the function that can only be called once
const sendRequestOnce = once(reuqestSomeData);
// listen for a click and call 'once' function
const button = document.querySelector('button');
button.addEventListener('click', sendRequestOnce);

