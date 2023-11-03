/****
 * 1. if nothing is passed then parameter recieves undefined
 * 2. if nothing is returned then fn returns undefined
 * */

// fn definition 
// function fn(param1) {
//     console.log("Hello world!", param1);


// }

// fn call
// let rVal = fn();
// console.log("rval", rVal);

// // question 2
// function fn(param1) {
//     console.log("Hello world!", param1);

//     let rval = 100;
//     /***
//      * always return variables in same line 
//      * 
//      * */ 
//     return rval;
// }

// // fn call
// let rVal = fn(10);
// console.log("rval",rVal);


/***
 * Object : collection   of key : value pair 
 * where keys can only be ->  strings
 * values -> any valid JS type
 * Usecase : It is used to describe different entities 
 * 
 * */


let cap = {
    'name': "Steve",
    lastName: "Rogers",
    isAvenger: true,
    address: {
        city: "Manhatten",
        state: "Newyork"
    },
    sayHi: function () {
        console.log("Cap say's Hi");
    },
    movies: ["first avenger", "Winter Soldier", "Civil War"],
    10: "i am value",

}
console.log("obj", cap);
console.log(cap[10]);


// // dot  opertor
// console.log("name", cap.name);
// console.log("city", cap.address.city);
// console.log("2nd movies", cap.movies[1]);

// // square bracket operator
// let CurrentName = "name";
// console.log("name: 69",cap[CurrentName]);

// iterating over an object

// for (let key in cap) {
// console.log("key :", key, "val : ", cap[key]) 
// }

// for (let key in cap) {
// console.log("key :", key, "val : ", cap.key) 
// }

/***********
 * JSON -> Javascript object notation -> Data Representation format that is inspired by javascript object
 *
 * **************/


// {
//     "name": "Toyota",
//         "Model": "Supra",
//             "price" : "100000$",
//                 "yrsold" : 12,
//                     "imported" : true,
//                     "owners", ["Steve","Rogers", "Peter"]
// }

