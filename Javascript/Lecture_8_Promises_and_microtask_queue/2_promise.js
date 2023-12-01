const fs = require("fs");
/**
 * Promise based fn -> don't take any cb but return promise object
 * 
*/
// 
const promise = fs.promises.readFile("./f11.txt");

console.log("before");
console.log("promise", promise);
console.log("After");

setTimeout(function () {
    // when promise gets the data -> value is vsibile 
    console.log(promise);
}, 1000);