const assert = require("assert");
const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Keyboard", price: 1200 }
];
assert(products.length > 0, "Products should not be empty");
assert(products[0].name, "Product should have a name");
assert(products[0].price > 0, "Product price should be positive");
console.log("Product Service tests passed successfully.");
