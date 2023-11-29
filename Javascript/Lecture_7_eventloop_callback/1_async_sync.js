/***
 * Synchronous : the code that is executed line by line 
 * 
 * */

// console.log("Before");
// function fn() {
//     console.log("I am fn");
// }
// fn();
// console.log("After");

/**
 * Async code:  a part of code is executed first and apart of code is delayed  
 * and that part is executed later one
 * 
 * ***/
//1
console.log("Before");
setTimeout(fn, 2000);

// 2
function fn() {
    console.log("I am fn");
}

// 3
console.log("After");











