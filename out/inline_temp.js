// the problem
function hasDiscount(order) {
    let basePrice = order.basePrice(order.quantity, order.price);
    return basePrice > 1000;
}
// inline temp solution refsctoring
function hasDiscountRefactored(order) {
    return order.basePrice(order.quantity, order.price) > 1000;
}
const userOrder = {
    quantity: 10,
    price: 5.5,
    basePrice: (quantity, price) => quantity * price,
};
console.log(userOrder.basePrice(userOrder.quantity, userOrder.price));
//# sourceMappingURL=inline_temp.js.map