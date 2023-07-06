// problem
function printOwing() {
    printBanner();
    // print details
    console.log("name");
    console.log("amount");
}
function printBanner() {
}
//solution refactoring pattern extract method
function printOwingRefactored() {
    printBanner();
    printDetails(30);
}
function printDetails(amount) {
    console.log("name");
    console.log("amount" + amount);
}
//# sourceMappingURL=extract_method.js.map