//challenge 2
//user.js
export default function getUserRole() {
  return `Developer`;
}

//Assignment 5

export let user = [
  {
    id: 1,
    name: "Arun",
  },
  {
    id: 2,
    name: "Madhan",
  },
];

export function displayname(id) {
  return user[id - 1].name;
}
