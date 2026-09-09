//Mini challenges

// challenge 1

/* 
async function checkAPI() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/3"
    );

    console.log(response.status);
    console.log(response.ok);
}

checkAPI();
*/

/* 
first console log will print the status of the api connection succed or failed through three digit codes  eg : 200 , 201 , 404 ,500 etc...
second console log will print true or  false based on the api status , success = true ( 200 to 299), failure = false (404 , 500)
and the response will not contain the js object , we have to use ,json() to convert into a js object to work with it 
*/

//challenge 2

/* 
async function getPost() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/7"
    );

    const result = response.json();

    console.log(result);
}

getPost();
*/

/* 
no it doesnt , cuz we didint have await to fully receive all the network packets , if we add await it will
wait in the bg untill all the data been downloaded through the network packets 

*/

//challenge 3

/* 
async function getUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/999"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Something went wrong");

    }
}

getUser();
*/

/* 
if the server doesnt have the user and sends a 404 error , the catch will not trigger , cuz catch will trigger when a code brokes 
*/

//challenge 4

/*  
<h2 id="name"></h2>
<p id="email"></p>

async function loadUser() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/4"
    );

    const data = await response.json();

    document.getElementById("name").textContent = data.name;
    document.getElementById("email").textContent = data.email;
}

loadUser();
*/

/* 
flow : fetch make a connention with the server with domain name to get the data  and stored in the response
next it is coverted into js object using .json() and stored in data 
and using dom to get the h2 and p element , pushing the text content from the data we have recieved 
*/

//challenge 5

/* 
console.log("A");

async function getData() {

    console.log("B");

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log("C");

    const data = await response.json();

    console.log("D");
}

getData();

console.log("E");
*/

/* 
output : A > B > E > C > D

a is synchronous executes immedeatly then invoked into the function and print B then encounter a await , the function paused and removed friom the 
call stack and execute other codes E and when it is empty it again called back by the microtask queue pushed into call stack execute C and again ecounter a 
await repeat the same process once again and print D

*/

//Assignments

//Assignment 1

async function getPost() {
  try {
    console.log(`fetching a post...`);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/12",
    );

    if (!response.ok) {
      throw new Error(`post not fonud`);
    }

    const post = await response.json();

    console.log(`Title : ${post.title}`);

    console.log(`body : ${post.body}`);
  } catch (error) {
    console.log(error);
  }
}

getPost();

//fetched a post and handled it

// assignment 2

async function user() {
  try {
    console.log(`fetching to get a user...`);

    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/6",
    );

    if (!userResponse.ok) {
      throw new Error(`user not fonud`);
    }

    const userObject = await userResponse.json();

    console.log(`Name : ${userObject.name}`);
    console.log(`Username : ${userObject.username}`);
    console.log(`Email : ${userObject.email}`);
    console.log(`City : ${userObject.address.city}`);
  } catch (error) {
    console.log(`${error}`);
  }
}

user();

//Assignment 3

async function posts() {
  try {
    console.log(`Fetching posts...`);
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10",
    );

    if (!postResponse.ok) {
      throw new Error(`Post not fount`);
    }

    const postConvert = await postResponse.json();

    let div = document.getElementById("posts");
    postConvert.forEach((element) => {
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let divAll = document.createElement("div");
      div1.append(`Id : ${element.id}`);
      div2.append(`Title : ${element.title}`);
      div3.append(`Body : ${element.body}`);

      divAll.append(div1);
      divAll.append(div2);
      divAll.append(div3);

      div.append(divAll);
    });
  } catch (error) {
    console.log(`${error}`);
  }
}

posts();

//Assignment 4
let input = document.getElementById("userId");
let btn = document.getElementById("search");
let result = document.getElementById("result");

async function postViewer() {
  result.innerHTML = "";
  try {
    const api = await fetch(
      `https://jsonplaceholder.typicode.com/users/${input.value}`,
    );

    if (!api.ok) {
      throw new Error(`User not found`);
    }

    const apiData = await api.json();

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let divAll = document.createElement("div");

    div1.append(`user : ${apiData.name}`);
    div2.append(`Email : ${apiData.email}`);
    div3.append(`CompanyName : ${apiData.company.name}`);

    divAll.append(div1);
    divAll.append(div2);
    divAll.append(div3);

    result.append(divAll);
  } catch (error) {
    result.textContent = error.message;
  }
}

btn.addEventListener("click", () => {
  postViewer();
});

//Assignment 5

let grp = document.getElementById("btn1");
let box = document.getElementById("box");

async function generateRandomPost() {
  box.innerHTML = "<p>Loading...</p>";
  try {
    let random = Math.floor(Math.random() * 99) + 1;
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${random}`,
    );

    if (!response.ok) {
      throw new Error("Post not found");
    }

    let post = await response.json();
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    div1.append(`Id : ${post.id}`);
    div2.append(`Title : ${post.title}`);
    div3.append(`Body : ${post.body}`);

    box.append(div1);
    box.append(div2);
    box.append(div3);
  } catch (error) {
    box.textContent = error.message;
  }
}

grp.addEventListener("click", () => {
  generateRandomPost();
});
