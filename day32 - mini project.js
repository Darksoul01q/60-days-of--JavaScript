// Mini Project - random user

let container = document.getElementById("container");
let card = document.getElementById("card");
let img = document.getElementById("image");
let userName = document.getElementById("username");
let userEmail = document.getElementById("useremail");
let userLocation = document.getElementById("userlocation");
let btn2 = document.getElementById("generate");

async function newUser() {
  try {
    let random = await fetch(`https://randomuser.me/api/`);

    if (!random.ok) {
      throw new Error("User Not Found");
    }

    let data = await random.json();
    img.src = data.results[0].picture.large;
    img.alt = "User Profile Pic";
    userName.textContent = `Name : ${data.results[0].name.first}`;
    userEmail.textContent = `Email : ${data.results[0].email}`;
    userLocation.textContent = `Location : ${data.results[0].location.timezone.description}`;
  } catch (error) {
    userName.textContent = error.message;
  }
}

btn2.addEventListener("click", () => {
  newUser();
});
