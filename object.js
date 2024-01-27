// singleton - it means in a class we can create only single instance for the application.
// Object.create

// object literals - you can consider it as a datatype to declare an object in the form of key and value

const mySym = Symbol("key1")


const JsUser = {
    name: "Zympsy",
    "full name": "Zympsy Panda",
    [mySym]: "mykey1",
    age: 88,
    location: "Kolkata",
    email: "zympsy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "zympsy@chatgpt.com"
console.log(JsUser);
// // Object.freeze(JsUser)
// JsUser.email = "zympsy@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// console.log(JsUser.greeting());


// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`) ;
// }
// console.log(JsUser.greetingTwo());


// ``= ES6 literals
// string interpolation
// template literal