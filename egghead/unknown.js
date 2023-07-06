// assert function 
function assert(condition, message) {
    if (!condition) {
        throw Error(message);
    }
}
function assertIsNumber(value, name) {
    if (typeof value !== "number") {
        throw Error("Expected ".concat(name, " to be a number"));
    }
}
function range(from, to) {
    assert(typeof from === "number" && typeof to === "number", 'range() accepts exactly 2 numbers');
    assertIsNumber(from, "from");
    assertIsNumber(to, "to");
    var values = [];
    for (var i = from; i < to; i++) {
        values.push(i);
    }
    return values;
}
console.log(range("A", 5));
