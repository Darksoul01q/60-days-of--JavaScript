//store.js

import product, { getDiscountedPrice } from "./product.js";

console.log(product.name);
console.log(product.price);
console.log(product.category);

console.log(getDiscountedPrice(product.price));
