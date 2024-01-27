// const myarray = [0,1,2,3,4,5]
// const myheros = ["shaktiman","naagraj"]

// const myarray2 = new Array(1,2,3,4)
// console.log(myarray[1]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myarray.includes(9));
// console.log(myarray.indexOf(3));

// const newArr = myarray.join()

// console.log(myarray);
// console.log(myarray);


// slice, splice
//slice :---it stores the selected elements in another array without modifying or changing the original array.
//splice :----it removes the selected elements from the original array and stores them in a different array.
// console.log("A ", myarray);

// const myn1 = myarray.slice(1, 3)

// console.log(myn1, "slice");
// console.log("B ", myarray);


// const myn2 = myarray.splice(1, 3)
// console.log("C ", myarray);
// console.log(myn2, "splice");

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros, "marvel heros");
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros, "allHeros");

// const all_new_heros = [...marvel_heros, ...dc_heros] //here we use spread operator and it is used as array when we expect more than one output

// console.log(all_new_heros, "all_new_heros");

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// console.log(Array.isArray("zympsy"))
// console.log(Array.from("zympsy"))
// console.log(Array.from({name: "zympsy"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
