type Order = {
    quantity: number,
    price: number
    basePrice: (quantity:number, price:number) => number,
}

// the problem

function hasDiscount(order: Order): boolean {
    
    let basePrice: number  = order.basePrice(order.quantity, order.price);
    return basePrice > 1000;
}

// inline temp solution refsctoring

function hasDiscountRefactored(order: Order): boolean {
    return order.basePrice(order.quantity, order.price) > 1000;
}

const userOrder = <Order>{
    quantity: 10,
    price: 5.5,
    basePrice: (quantity, price) => quantity * price,
}


console.log(userOrder.basePrice(userOrder.quantity, userOrder.price));
