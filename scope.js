var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); 
    console.log(b);  
    var z = 200; 
}
// console.log(a);
// console.log(z)
// console.log(b);

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "zympsy"
    // console.log(username);
    function two(){
        const website = "github"
        // console.log(username);
        // console.log(website);
    }    
     two()
}
one()

if (true) {
    const username = "zympsy"
    if (username === "zympsy") {
        const website = " github"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}




const addTwo = function(num){
    return num + 2

}
console.log(addTwo(5))