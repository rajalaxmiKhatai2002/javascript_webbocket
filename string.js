// const name = "rajalaxmi"
// const repoCount = 50
// console.log(name + repoCount + "value");
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('zymps-zp-com')
// console.log(gameName[8]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('m'));


// const newString = gameName.slice(-8,4);

// const newStringOne = " zympsy "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://zympsy.com/zympsy%20Panda"
// console.log(url.replace('%20' , '-'));
// console.log(url.includes('Panda'));
// console.log(gameName);
// console.log(url.split('/'));


// const score = 400
// // console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const othernumber = 123.8966;
// console.log(othernumber.toPrecision(4));

// const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));
// console.log(hundred.toLocaleString('en-US'));

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,5,6.8));


// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

// const min = 10
// const max = 20

// console.log();


//*****************************number comparision**************************** */
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);

//string comparision
// console.log("2">1);
// console.log("02">1);

// //null comparision
// console.log(null>0);
// console.log(null == 0);
// console.log(null >= 0);

// //undefined comparision
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

//**************date******************** */
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);

let mycreatedate = new Date("01-14-2023")
console.log(mycreatedate.toLocaleString()); //method in js used to convert date object

let myitemstamp = Date.now()

console.log(myitemstamp);
console.log(mycreatedate.getTime());
console.log(Math.floor(Data.now()/1000));

