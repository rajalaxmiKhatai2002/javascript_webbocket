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




//OBJECT2:-----------------

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "human"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "mailto:some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "zympsy",
            lastname: "panda"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "mailto:zympsy@gmail.com"
//     },
//     {
//         id: 1,
//         email: "mailto:zympsy@gmail.com"
//     },
//     {
//         id: 1,
//         email: "mailto:zympsy@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "javascript",
//     price: "999k",
//     courseInstructor: "zympsy"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course //object de-structure

// // console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "zympsy",
//     "coursename": "javascript",
//     "price": "free"
// }how  to structure an object within an array this is in the given bellow structure

// [
//     {},
//     {},
//     {}
// ]
