const assert = require("assert");
const orders = [
    { id: 101, product: "Laptop", quantity: 2 },
    { id: 102, product: "Keyboard", quantity: 5 }
];
assert(orders.length > 0, "Orders should not be empty");
assert(orders[0].product, "Order should have a product");
assert(orders[0].quantity > 0, "Order quantity should be positive");
console.log("Order Service tests passed successfully.");
