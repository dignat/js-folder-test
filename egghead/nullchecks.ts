function assertIsNonNulish<T>(value: T, message: string): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
        throw Error(message);
    }
}
// will throw ReferenceError document is not defined as it is a non-browser environment
const root = document.getElementById("root");
console.log('before the check')
assertIsNonNulish(root, "Couldn't find DOM element #root");
console.log('we did not pass the check')
root.addEventListener('click', e => {
    console.log(e)
})