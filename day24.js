//Challenge1
/* 
const user = {
    name: "Arun",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();

output : Arun , get printed , cuz this will inherit user so it will become user.name , when we call user.greet it invoke user and greet function then 
it prints user.name
*/

// challenge 2

/* const user = {
    name: "Arun",

    greet: function () {
        console.log(this.name);
    }
};

const fn = user.greet;

fn();

output : undefined , cuz we didnt call the user.greet fucntion , we call fn()

*/
