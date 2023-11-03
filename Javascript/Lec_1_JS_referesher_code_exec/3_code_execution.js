/**** high level overview of JS code execution 
 * 
 */

// let a = 10;
// function fn() {
//     console.log("I am fn");

//     function inner() {
//         console.log("I am inner");
//     }

//     inner();
// }

// fn();

/****
 * Exceution context : 
 *  
 *      1. It either belong to thecode outside every function 
 *      2. whenever a function is called
 * Execution context contains
 *      * acces to it's varibales and functions
 *      * acces to the code you write
 *      * ??
 *       * ??        
 * Exceution context actually runs in the call stack 
 *      1. creation
 *             a.  memory allocation  -> 
 *                           i.)   variables : undefined
 *                          ii .) function : memory allocated 
 *            
 *      2. execution  -> left to right , top to bottom 
 *         
 * **/



// var a;
// console.log("a",a);
// a=10;
// console.log("a",a);

// real();
// function real() {
//     console.log("I am real. Always run me");
// }

// real();
// function real() {
//     console.log("No I am real one ");
// }

// real();
// function real() {
//     console.log("You both are wasted");
// }
// real();

// console.log("a", a);
// var a = 10;
// console.log("a", a);
// function fn() {
//     console.log("64", a);
//     var a = 20;
//     console.log("66", a);

//     function inner() {
//         console.log(a);
//         var a;
//         a=30
//         console.log(a);
//     }
//     inner();
// }
// console.log("68", a);
// fn();
// console.log("70", a);






