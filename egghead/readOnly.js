function interperse(array, separator) {
    var newArray = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (newArray.length !== 0) {
            newArray.push(separator);
        }
        newArray.push(element);
    }
    return newArray;
}
var values = ["A", "B", "C"];
// another way to declare readonly array
var values1 = ["A", "B", "C"];
var valueWithSeparators = interperse(values, "X");
// read only tuple types
function swap(tuple) {
    var first = tuple[0], second = tuple[1];
    return [second, first];
}
var keyValue = [1, "one"];
var readOnlykeyValue = [2, "haha"];
var valueKey = swap(keyValue);
var readONlyValueKey = swap(readOnlykeyValue);
console.log(keyValue, valueKey, readONlyValueKey, readOnlykeyValue);
// make object propeeties immutable
var ORIGIN = {
    x: 0,
    y: 0,
};
console.log(ORIGIN);
// another way is to set Object.freese()
var NOTORIGIN = Object.freeze({
    x: 1,
    y: 1
});
// as const assetion to make array read only tuple
var person = ["Nesrin", 50];
// const assetion allows us to makr a varaible value as a literal type For example:
var onSwitch = "On";
console.log(onSwitch);
// bare in mind const assertion can be applied only on simple expression
// for example this will not set onSwitch to type Off | On
function switchValue(input) {
    var onSwitchP = (input ? "On" : "Off");
    onSwitchP = 'boo';
    return onSwitchP;
}
// but this will
function switchValueWithAssetion(input) {
    var onSwitchS = (input ? "On" : "Off");
    onSwitchS = "s";
    return onSwitchS;
}
