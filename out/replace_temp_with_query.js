// problem you place the result of expression in a local variable for later use
let quantity = 1000;
let price = 3.5;
function calculateTotal() {
    let basePrice = quantity * price;
    if (basePrice > 1000) {
        return basePrice * 0.95;
    }
    else {
        return basePrice * 0.98;
    }
}
// solution
//Nonetheless, if your temp variable is used to cache the result of a truly time-consuming expression, you may want to stop this refactoring after extracting the expression to a new method.
function calculateTotalRefactored() {
    if (basePrice(quantity, price) > 1000) {
        return basePrice(quantity, price) * 0.95;
    }
    return basePrice(quantity, price) * 0.98;
}
const basePrice = (qty, price) => qty * price;
console.log(calculateTotalRefactored());
//# sourceMappingURL=replace_temp_with_query.js.map