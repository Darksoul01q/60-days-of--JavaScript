//Assignment 2

// product.js

let product = {
  name: "Headphone",
  price: 1000,
  category: "Gadgets",
};
export default product;

export function getDiscountedPrice(num) {
  let discount = num * (20 / 100);
  return num - discount;
}
