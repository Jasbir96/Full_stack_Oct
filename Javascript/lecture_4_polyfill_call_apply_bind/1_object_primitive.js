/********
 * 
 * In JS 
 * 1. Primitives : 
 *      numbers, string , boolean, null , undefined 
 *      symbol , bigInt
 * 2. Everything else is an object
 * 
 * ***/

/****
 * What is a object -> 
 *     a.) key , value pair
 *      b.) property and methods 
 * 
 * ****/


// let cap = {
//     // properties 
//     name: "Steve",
//     // methods 
//     sayHi: function () {
//         console.log("Hi I am Steve")
//     }
// }


/****
 * Array -> emulating an object where keys are index
 * **/
let arr = [1, 2, 3, 4, 5];
// console.log(arr[6]);

// console.log("33",arr["abracadabra"])
// arr[arr.length]=100
// console.log(arr);

// arr.prop = "I am a property added on an Array";
// arr.Mymethod = function () {
//     console.log(" I am a method over array");
//     return "returning from a method of anArray";
// }

// console.log("property", arr.prop)
// console.log("method", arr.method());
// console.log(arr);

// let newArr = {
//     "0": 1,
//     "1": 10,
//     "2": 100
// }
// console.log("value at 1st Indx", newArr[1]);

/*************************
 * fucntions : function are objects that implements callbacble
 * ***************************/


function fn() {
    console.log("I am fn");
    console.log(" I will exec when you call me");
}
// that can be called -> code inside of that object
// fn();

// console.log(typeof fn);

// fn.myProperty = "I am a prop over a fn";
// fn.fnMethod = function () {
//     console.log(" I am a method on a fn");
//     return "returning from method of a fn ";
// }

// console.log("fn property", fn.myProperty);
// console.log("fn property", fn.fnMethod());









