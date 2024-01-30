// if
// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }


//switch statement


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = "april"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }





//truethy and false values
// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 =  15??undefined 
// val1 = null ?? 10 ?? 20



// console.log(val1);

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") 





// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 8) {
        // console.log("8 is best number");
    }
    // console.log(element);
    
}

// console.log(element);

// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} and inner loop ${i}`);
//     // console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }
// let myArray = ["flash", "batman", "superman"]
// // console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element); 
// }


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 9) {
        console.log(`Detected 9`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }




//while loop checks the condition before executing the statement.
//do-while loop executes the statement atleast once before checking the condition

// let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ["flash", "batman", "superman"];

// let arr = 0;
// while (arr < myArray.length) {
//   console.log(`Value is ${myArray[arr]}`);
//   arr = arr + 1;
// }

// let score = 11;
// do {
//   console.log(`Score is ${score}`);
//   score++;
// } while (score <= 10);


// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
