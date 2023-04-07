// productService.js

let id = 0;
let products = [];

function addProduct(product) {
  product.id = ++id;
  products.push(product);
  return product;
}

module.exports = {
  addProduct,
  products,
}; 