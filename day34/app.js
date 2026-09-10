//challenge 2
//app.js
import getUserRole, { user, displayname } from "./user.js";
import { products } from "./product.js";
import { totalPrice, findProductById } from "./utils.js";
console.log(getUserRole());

//username by id
console.log(displayname(1));

//display all products
console.log(products);

//total price
console.log(totalPrice(products));

//search product by id
console.log(findProductById(2));

//set containing unique categoru
let category = new Set();
products.forEach((value) => {
  category.add(value.category);
});

console.log(category);

//no of unique category
console.log(category.size);
