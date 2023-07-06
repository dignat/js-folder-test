function assertIsNonNulish(value, message) {
    if (value === null || value === undefined) {
        throw Error(message);
    }
}
// will throw ReferenceError document is not defined as it is a non-browser environment
var root = document.getElementById("root");
assertIsNonNulish(root, "Couldn't find DOM element #root");
root.addEventListener('click', function (e) {
});
