let cap = {
    // property
    name: "Jasbir",
    last: "Singh",
    // method
    sayHi: function () {
        console.log("Hi from Jasbir");
    }
}
// function
function fn() {
    console.log("I am a fn ");
}
// function call
// fn();

// method call
// cap.sayHi();
/******************************************************/
/********************
 * when let and var are used in global area
 * ************************/
/***let variable goes to script */
// let a = 100;
/**** in global area when you declare a variable using 
 * var -> window object**/
// var b = 200;
/***************************function and addresses***************************/

// function fn2() {
//     console.log("I am fn2");
//     return "rval from fn2";
// }
// // // you are accessing the reference of the fn 
// // console.log("35", fn2);
// // // you accesing the return value by calling the fn
// console.log("36", fn2());


// let fn3=fn2;

// console.log("36", fn3());

/*********************************************************/
// variable get there memory on run time , value of the variable depend upon it's EC 
let a = 10;
console.log("47",a);
function fn() {
    let a = 100;
    console.log("50",a);
}
fn();
console.log("47",a);



