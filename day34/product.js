// product.js
//Assignment 2

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

//Assingment 5

export let products = [
  {
    id: 1,
    name: "HeadPhone",
    price: 1000,
    category: "gadgets",
  },
  {
    id: 2,
    name: "Mobile Cover",
    price: 300,
    category: "accesseries",
  },
  {
    id: 3,
    name: "Charger",
    price: 400,
    category: "gadgets",
  },
  {
    id: 4,
    name: "Controller",
    price: 800,
    category: "gaming",
  },
  {
    id: 5,
    name: "Ear Buds",
    price: 2000,
    category: "gadgets",
  },
];
