//arrow (=>) shorthand notation for defining function in javascript
//{=>()}
const user = {
    username: "zympsy",
    price: 999,

   welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

user.username = "go-away"
user.welcomeMessage()

console.log(this);

// // function books(){
// //     var username = "zympsy"
// //     // console.log(this.username, "undefined");
// // }

// // books()

// // const books = function () {
// //     let username = "zympsy"
// //     console.log(this.username);
// // }

// // const books =  () => {
// //     let username = "zympsy"
// //     console.log(this);
// // }
// //this => does not have their own "this" context and inherit it from
// //the enclosing scope 

// // books()

// // const addTwo = (num1, num2) => {
// //     return num1 + num2
// // }

// // const addTwo = (num1, num2) =>  num1 + num2

// // const addTwo = (num1, num2) => ( num1 + num2 )

// // const addTwo = (num1, num2) => ({username: "zympsy"})


// // console.log(addTwo(3, 4))


// // const myArray = [2, 5, 3, 7, 8]
// // var c = 300
// // let a = 300
// // if (true) {
// //     let a = 10
// //     const b = 20
// //     // console.log("INNER: ", a); 
// //     console.log(b);  
// //     var z = 200; 
// // }
// // console.log(a);
// // console.log(z)
// // console.log(b);

// // console.log(a);
// // console.log(b);
// // console.log(c);

// // function one(){
// //     const username = "zympsy"
// //     // console.log(username);
// //     function two(){
// //         const website = "github"
// //         // console.log(username);
// //         // console.log(website);
// //     }    
// //      two()
// }
// one()

// if (true) {
//     const username = "zympsy"
//     if (username === "zympsy") {
//         const website = " github"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }
// // console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }




// const addTwo = function(num){
//     return num + 2

// }
// console.log(addTwo(5))
// // myArray.forEach()