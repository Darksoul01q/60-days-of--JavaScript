//Assignment 1
//utills.js
import { products } from "./product.js";

export function square(num) {
  return num ** 2;
}

export function cube(num) {
  return num ** 3;
}

export function isEven(num) {
  return num % 2 === 0;
}

//Assignment 5
//utils.js

export function totalPrice(element) {
  let total = 0;
  element.forEach((value) => {
    total += value.price;
  });
  return total;
}

export function findProductById(product) {
  let productList = new Map();
  products.forEach((element) => {
    productList.set(element.id, element.name);
  });

  return productList.get(product);
}
