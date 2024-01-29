//arrow (=>) shorthand notation for defining function in javascript
//{=>()}
// const user = {
//     username: "zympsy",
//     price: 999,

//    welcomeMessage : function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }

// // user.welcomeMessage()

// user.username = "go-away"
// user.welcomeMessage()

// console.log(this);

// function books(){
//     var username = "zympsy"
//     console.log(this.username, "undefined");
// }

// books()

// const books = function () {
//     let username = "zympsy"
//     console.log(this.username);
// }
// books();
// const books =  () => {
//     let username = "zympsy"
//     console.log(this);
// }
// //this => does not have their own "this" context and inherit it from
// //the enclosing scope 

// books()

// const addTwo = (num1, num2) => {
//     return num1 + num2
      // }                            way-1

// const addTwo = (num1, num2) =>  num1 + num2    //way-2

// // const addTwo = (num1, num2) => ( num1 + num2 )   //way-3

// const addTwo = (num1, num2) => ({username: "zympsy"})            //way-4
// console.log(addTwo(3, 4))
