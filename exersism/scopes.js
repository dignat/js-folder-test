var x = 21

function scope() {
    console.log(x);
    var x = 20
}

scope()